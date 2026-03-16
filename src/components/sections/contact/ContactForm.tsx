'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { contact, formLabels } from '@/lib/content';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-300 transition-colors focus:border-red-600 focus:ring-0 focus:outline-none';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus('error');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
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
        <p className="font-serif text-xl text-navy-950">{formLabels.thankYou}</p>
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy-950"
        >
          {formLabels.name} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder={formLabels.namePlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy-950"
        >
          {formLabels.email} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder={formLabels.emailPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-navy-950"
        >
          {formLabels.company} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          autoComplete="organization"
          placeholder={formLabels.companyPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="audience"
          className="block text-sm font-medium text-navy-950"
        >
          {contact.form.audienceLabel} <span className="text-red-600">*</span>
        </label>
        <select
          id="audience"
          name="audience"
          required
          className={inputClasses}
        >
          {contact.form.audienceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-navy-950"
        >
          {formLabels.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder={formLabels.phonePlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-950"
        >
          {formLabels.message} <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={formLabels.messagePlaceholder}
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">{contact.form.error}</p>
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
