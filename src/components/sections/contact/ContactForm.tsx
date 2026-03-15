'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { contact } from '@/lib/content';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

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
        <p className="font-serif text-xl text-navy-950">Thank you</p>
        <p className="mt-2 text-slate-600">{contact.form.success}</p>
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
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 transition-colors focus:border-blue-600 focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy-950"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 transition-colors focus:border-blue-600 focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-navy-950"
        >
          Company <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          autoComplete="organization"
          className="mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 transition-colors focus:border-blue-600 focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-navy-950"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="mt-1.5 block w-full border border-slate-200 bg-white px-4 py-3 text-navy-950 transition-colors focus:border-blue-600 focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-950"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full resize-y border border-slate-200 bg-white px-4 py-3 text-navy-950 transition-colors focus:border-blue-600 focus:ring-0 focus:outline-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{contact.form.error}</p>
      )}

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
    </form>
  );
}
