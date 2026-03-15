import { siteConfig, contact } from '@/lib/content';

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl text-navy-950">
        {contact.info.heading}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {contact.info.body}
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-1 block text-base text-navy-950 transition-colors hover:text-blue-600"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Phone
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-1 block text-base text-navy-950 transition-colors hover:text-blue-600"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            LinkedIn
          </p>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-base text-navy-950 transition-colors hover:text-blue-600"
          >
            {siteConfig.owner}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Address
          </p>
          <address className="mt-1 text-base not-italic text-slate-600">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
            <br />
            {siteConfig.address.country}
          </address>
        </div>
      </div>
    </div>
  );
}
