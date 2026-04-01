'use client';

import { useState, useRef, type FormEvent } from 'react';
import { track } from '@vercel/analytics';
import { Button } from '@/components/ui/Button';
import { contact, formLabels } from '@/lib/content';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'peer mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition-colors focus:border-red-600 focus:ring-0 focus:outline-none';

const errorInputClasses =
  'peer mt-1.5 block w-full border border-red-400 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition-colors focus:border-red-600 focus:ring-0 focus:outline-none';

const focusLineClasses =
  'absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-red-600 transition-transform duration-300 peer-focus:scale-x-100';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function getError(field: string): string | null {
    if (!touched[field]) return null;
    const value = values[field]?.trim() ?? '';

    if (field === 'email') {
      if (!value) return formLabels.required;
      if (!isValidEmail(value)) return formLabels.invalidEmail;
      return null;
    }

    if (['name', 'company', 'message'].includes(field)) {
      if (!value) return formLabels.required;
    }

    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'company', 'message'];
    const allTouched: Record<string, boolean> = {};
    requiredFields.forEach((f) => (allTouched[f] = true));
    setTouched((prev) => ({ ...prev, ...allTouched }));

    const form = e.currentTarget;
    const formData = new FormData(form);
    const currentValues: Record<string, string> = {};
    requiredFields.forEach((f) => {
      currentValues[f] = (formData.get(f) as string) ?? '';
    });
    setValues((prev) => ({ ...prev, ...currentValues }));

    const hasErrors = requiredFields.some((f) => {
      const val = currentValues[f]?.trim() ?? '';
      if (!val) return true;
      if (f === 'email' && !isValidEmail(val)) return true;
      return false;
    });

    if (hasErrors) {
      const firstErrorField = requiredFields.find((f) => {
        const val = currentValues[f]?.trim() ?? '';
        if (!val) return true;
        if (f === 'email' && !isValidEmail(val)) return true;
        return false;
      });
      if (firstErrorField) {
        const el = form.querySelector<HTMLElement>(`#${firstErrorField}`);
        el?.focus();
      }
      return;
    }

    setStatus('submitting');

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        track('contact_form_submit');
        form.reset();
        setTouched({});
        setValues({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-blue-200 bg-blue-50 p-8">
        <p className="text-navy-950 font-serif text-xl">
          {formLabels.thankYou}
        </p>
        <p className="mt-2 text-slate-600">{contact.form.success}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-medium text-blue-600 transition-colors hover:text-red-600"
        >
          {formLabels.sendAnother}
        </button>
      </div>
    );
  }

  const nameError = getError('name');
  const emailError = getError('email');
  const companyError = getError('company');
  const messageError = getError('message');

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className="text-navy-950 block text-sm font-medium"
        >
          {formLabels.name} <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={formLabels.namePlaceholder}
            aria-describedby={nameError ? 'name-error' : undefined}
            aria-invalid={nameError ? true : undefined}
            onBlur={() => handleBlur('name')}
            onChange={(e) => handleChange('name', e.target.value)}
            className={nameError ? errorInputClasses : inputClasses}
          />
          <div className={focusLineClasses} />
        </div>
        {nameError && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
            {nameError}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-navy-950 block text-sm font-medium"
        >
          {formLabels.email} <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder={formLabels.emailPlaceholder}
            aria-describedby={emailError ? 'email-error' : undefined}
            aria-invalid={emailError ? true : undefined}
            onBlur={() => handleBlur('email')}
            onChange={(e) => handleChange('email', e.target.value)}
            className={emailError ? errorInputClasses : inputClasses}
          />
          <div className={focusLineClasses} />
        </div>
        {emailError && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {emailError}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="text-navy-950 block text-sm font-medium"
        >
          {formLabels.company} <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            placeholder={formLabels.companyPlaceholder}
            aria-describedby={companyError ? 'company-error' : undefined}
            aria-invalid={companyError ? true : undefined}
            onBlur={() => handleBlur('company')}
            onChange={(e) => handleChange('company', e.target.value)}
            className={companyError ? errorInputClasses : inputClasses}
          />
          <div className={focusLineClasses} />
        </div>
        {companyError && (
          <p
            id="company-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {companyError}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="audience"
          className="text-navy-950 block text-sm font-medium"
        >
          {contact.form.audienceLabel} <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <select id="audience" name="audience" required className={inputClasses}>
            {contact.form.audienceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={focusLineClasses} />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="text-navy-950 block text-sm font-medium"
        >
          {formLabels.phone}
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder={formLabels.phonePlaceholder}
            className={inputClasses}
          />
          <div className={focusLineClasses} />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-navy-950 block text-sm font-medium"
        >
          {formLabels.message} <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder={formLabels.messagePlaceholder}
            aria-describedby={messageError ? 'message-error' : undefined}
            aria-invalid={messageError ? true : undefined}
            onBlur={() => handleBlur('message')}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`${messageError ? errorInputClasses : inputClasses} resize-y`}
          />
          <div className={focusLineClasses} />
        </div>
        {messageError && (
          <p
            id="message-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {messageError}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          {contact.form.error}
        </p>
      )}

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting'
            ? contact.form.submitting
            : contact.form.submitLabel}
        </Button>
        <p className="mt-3 text-xs text-slate-400">{contact.microcopy}</p>
      </div>
    </form>
  );
}
