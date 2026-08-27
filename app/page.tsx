"use client";

import { ThreeScene } from "@/components/three-scene";

type SocialLink = { name: string; href: string; className: string; icon: React.ReactNode };
const iconProps = { viewBox: "0 0 64 64", "aria-hidden": true, focusable: false } as const;

const links: SocialLink[] = [
  { name: "انستقرام", href: "https://www.instagram.com/saudi800800", className: "instagram", icon: <svg {...iconProps}><rect x="13" y="13" width="38" height="38" rx="11" fill="none" stroke="currentColor" strokeWidth="5"/><circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="5"/><circle cx="44.5" cy="19.5" r="3" fill="currentColor"/></svg> },
  { name: "سناب شات", href: "https://www.snapchat.com/add/saudi800800", className: "snapchat", icon: <svg {...iconProps}><path d="M32 11c-9 0-14 7-14 16v4c-1 2-5 3-7 4 1 4 4 6 8 7 1 5 5 5 8 4 2-1 3-1 5-1s3 0 5 1c3 1 7 1 8-4 4-1 7-3 8-7-2-1-6-2-7-4v-4c0-9-5-16-14-16Z" fill="currentColor"/></svg> },
  { name: "تيك توك", href: "https://www.tiktok.com/@saudi800800", className: "tiktok", icon: <svg {...iconProps}><path d="M38 11c1 7 5 11 12 12v9c-5 0-9-2-12-4v13c0 9-7 14-15 12-7-1-11-8-9-15 2-6 7-10 14-10v9c-3 0-5 2-5 5 0 4 6 5 7 1V11h8Z" fill="currentColor"/></svg> },
  { name: "X", href: "https://x.com/saudi800800", className: "x-social", icon: <svg {...iconProps}><path d="M14 12h11l10 14 12-14h5L38 30l14 22H41L30 37 17 52h-5l15-19L14 12Zm9 5 21 30h-5L18 17h5Z" fill="currentColor"/></svg> },
  { name: "بنترست", href: "https://www.pinterest.com/saudi800800", className: "pinterest", icon: <svg {...iconProps}><path d="M32 9c-12 0-21 9-21 20 0 8 4 14 11 17-1-3-1-7 0-10l3-13c-1-2-1-4-1-6 0-5 3-8 7-8 3 0 5 2 5 5 0 3-2 8-3 12-1 3 2 6 5 6 6 0 10-7 10-15 0-7-6-12-15-12-10 0-16 7-16 15 0 3 1 7 3 9l-2 7c-4-3-7-9-7-16C11 18 20 9 32 9Z" fill="currentColor"/></svg> },
  { name: "فيسبوك", href: "https://www.facebook.com/saudi800800", className: "facebook", icon: <svg {...iconProps}><path d="M38 18h8V7c-2 0-6-1-10-1-10 0-16 6-16 17v9H10v12h10v20h12V44h11l2-12H32v-8c0-4 2-6 6-6Z" fill="currentColor"/></svg> },
  { name: "يوتيوب", href: "https://www.youtube.com/@saudi800", className: "youtube", icon: <svg {...iconProps}><path d="M55 20c-1-4-4-7-8-8-4-1-26-1-30 0-4 1-7 4-8 8-1 4-1 20 0 24 1 4 4 7 8 8 4 1 26 1 30 0 4-1 7-4 8-8 1-4 1-20 0-24Z" fill="currentColor"/><path d="m27 41 16-9-16-9v18Z" fill="#ff1638"/></svg> },
];

export default function Home() {
  const openInNewPage = (url: string) => {
    const newPage = window.open(url, "_blank", "noopener,noreferrer");
    if (newPage) newPage.opener = null;
  };

  return (
    <main className="site-shell" dir="rtl">
      <ThreeScene />
      <div className="vignette" aria-hidden="true" />
      <section className="experience" aria-labelledby="site-title">
        <div className="brand-object" aria-label="Saudi 800 800">
          <div className="brand-face">
            <span className="brand-saudi">SAUDi</span>
            <span className="brand-number brand-gold">800</span>
            <span className="brand-number">800</span>
          </div>
          <span className="brand-depth" aria-hidden="true" />
        </div>
        <header className="brand-copy">
          <h1 id="site-title">@SAUDi<span>800</span>800</h1>
          <p>حساباتنا الرسمية</p>
        </header>
        <nav className="social-stage" aria-label="حسابات Saudi800800 الرسمية">
          {links.map((link, index) => (
            <a
              key={link.name}
              className={`social-link ${link.className}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`فتح حساب ${link.name} في صفحة جديدة`}
              title={link.name}
              style={{ "--order": index } as React.CSSProperties}
              onClick={(event) => {
                event.preventDefault();
                openInNewPage(link.href);
              }}
            >
              <span className="button-face"><span className="icon-face">{link.icon}</span></span>
              <span className="button-depth" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
