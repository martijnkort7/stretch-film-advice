import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'More Stable Pallets, 30–50% Less Film | Stretch Film Advice';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#0A1628',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
      }}
    >
      {/* Brand */}
      <div
        style={{
          display: 'flex',
          color: '#64748B',
          fontSize: 22,
          letterSpacing: '0.05em',
          fontFamily: 'sans-serif',
        }}
      >
        stretchfilmadvice.com
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Primary headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            fontFamily: 'sans-serif',
            marginBottom: 20,
          }}
        >
          More Stable Pallets.
        </div>

        {/* Blue accent line */}
        <div
          style={{
            width: 100,
            height: 4,
            background: '#3B82F6',
            marginBottom: 28,
            display: 'flex',
          }}
        />

        {/* Subheadline */}
        <div
          style={{
            color: '#60A5FA',
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.1,
            fontFamily: 'sans-serif',
            marginBottom: 24,
          }}
        >
          30–50% Less Stretch Film.
        </div>

        {/* Supporting text */}
        <div
          style={{
            color: '#94A3B8',
            fontSize: 26,
            fontFamily: 'sans-serif',
            lineHeight: 1.4,
          }}
        >
          Expert advisory on film selection &amp; machine settings
        </div>
      </div>

      {/* Bottom stats */}
      <div
        style={{
          display: 'flex',
          color: '#475569',
          fontSize: 20,
          fontFamily: 'sans-serif',
          gap: 32,
        }}
      >
        <span>25+ Countries</span>
        <span style={{ color: '#1E3A5F' }}>·</span>
        <span>1,000+ Sites Assessed</span>
        <span style={{ color: '#1E3A5F' }}>·</span>
        <span>45+ Years Experience</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
