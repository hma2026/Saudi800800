import Link from 'next/link';

// Shared frame for the public ALLIN1 information pages (the URLs given to platform reviewers:
// /allin1, /allin1/privacy, /allin1/terms, /allin1/data-deletion). English, left-to-right.
export const CONTACT_EMAIL = 'ha@hma.sa';
export const APP_URL = 'https://allin1.saudi800800.com';
export const EFFECTIVE_DATE = 'October 16, 2026';

const shell: React.CSSProperties = { minHeight: '100vh', background: '#031127', color: '#F7FAFF', fontFamily: 'Inter, Arial, sans-serif' };
const navLink: React.CSSProperties = { color: '#A9B9D4', textDecoration: 'none' };
export const text: React.CSSProperties = { color: '#B8C5DB', lineHeight: 1.8 };
export const h2: React.CSSProperties = { marginTop: 38 };
export const card: React.CSSProperties = { border: '1px solid rgba(169,185,212,.20)', background: 'linear-gradient(180deg, rgba(10,35,78,.92), rgba(6,27,63,.94))', borderRadius: 20, padding: 22 };

export function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main style={shell} dir="ltr" lang="en">
      <div style={{ maxWidth: wide ? 1040 : 880, margin: '0 auto', padding: '36px 22px 72px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 52 }}>
          <Link href="/allin1" style={{ color: '#F7FAFF', textDecoration: 'none', fontWeight: 800, fontSize: 22, letterSpacing: '.04em' }}>ALLIN1</Link>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/allin1/privacy" style={navLink}>Privacy Policy</Link>
            <Link href="/allin1/terms" style={navLink}>Terms of Use</Link>
            <Link href="/allin1/data-deletion" style={navLink}>Data Deletion</Link>
          </div>
        </nav>
        {children}
        <footer style={{ marginTop: 64, paddingTop: 22, borderTop: '1px solid rgba(169,185,212,.16)', color: '#8292AC', display: 'flex', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
          <span>© 2026 ALLIN1 · Contact: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#8DE9FF' }}>{CONTACT_EMAIL}</a></span>
          <span>
            <Link href="/allin1/privacy" style={{ color: '#A9B9D4' }}>Privacy</Link> · <Link href="/allin1/terms" style={{ color: '#A9B9D4' }}>Terms</Link> · <Link href="/allin1/data-deletion" style={{ color: '#A9B9D4' }}>Data Deletion</Link>
          </span>
        </footer>
      </div>
    </main>
  );
}

export function PageTitle({ eyebrow, title, date = true }: { eyebrow: string; title: string; date?: boolean }) {
  return (
    <>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.16em', color: '#19D7F4' }}>{eyebrow}</div>
      <h1 style={{ fontSize: 'clamp(38px,7vw,58px)', lineHeight: 1.08, margin: '10px 0 10px' }}>{title}</h1>
      {date ? <p style={{ color: '#8292AC' }}>Effective date: {EFFECTIVE_DATE}</p> : null}
    </>
  );
}
