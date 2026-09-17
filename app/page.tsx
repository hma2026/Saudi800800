"use client";

import { useState } from "react";
import { ThreeScene } from "@/components/three-scene";

type SocialLink = { name: string; href: string; className: string; icon: React.ReactNode };
const iconProps = { viewBox: "0 0 64 64", "aria-hidden": true, focusable: false } as const;

const links: SocialLink[] = [
  { name: "انستقرام", href: "https://www.instagram.com/saudi800800", className: "instagram", icon: <svg {...iconProps}><rect x="13" y="13" width="38" height="38" rx="11" fill="none" stroke="currentColor" strokeWidth="5"/><circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="5"/><circle cx="44.5" cy="19.5" r="3" fill="currentColor"/></svg> },
  { name: "سناب شات", href: "https://www.snapchat.com/add/saudi800800", className: "snapchat", icon: <svg {...iconProps}><path d="M32 11c-9 0-14 7-14 16v4c-1 2-5 3-7 4 1 4 4 6 8 7 1 5 5 5 8 4 2-1 3-1 5-1s3 0 5 1c3 1 7 1 8-4 4-1 7-3 8-7-2-1-6-2-7-4v-4c0-9-5-16-14-16Z" fill="currentColor"/></svg> },
  { name: "تيك توك", href: "https://www.tiktok.com/@saudi800800", className: "tiktok", icon: <svg {...iconProps}><path d="M38 11c1 7 5 11 12 12v9c-5 0-9-2-12-4v13c0 9-7 14-15 12-7-1-11-8-9-15 2-6 7-10 14-10v9c-3 0-5 2-5 5 0 4 6 5 7 1V11h8Z" fill="currentColor"/></svg> },
  { name: "X", href: "https://x.com/saudi800800", className: "x-social", icon: <svg {...iconProps}><path d="M14 12h11l10 14 12-14h5L38 30l14 22H41L30 37 17 52h-5l15-19L14 12Zm9 5 21 30h-5L18 17h5Z" fill="currentColor"/></svg> },
  { name: "بنترست", href: "https://www.pinterest.com/saudi800800", className: "pinterest", icon: <svg {...iconProps}><path d="M32 7C18.2 7 9 17 9 29.7c0 9.4 5.3 17.6 13.1 21.3-.2-1.8-.4-4.6.1-6.6l3-12.7s-.8-1.7-.8-4.2c0-3.9 2.3-6.9 5.1-6.9 2.4 0 3.6 1.8 3.6 4 0 2.4-1.5 6-2.3 9.3-.7 2.8 1.4 5.1 4.2 5.1 5 0 8.8-5.3 8.8-12.9 0-6.7-4.8-11.5-11.8-11.5-8 0-12.8 6-12.8 12.3 0 2.4.9 5 2.1 6.4.2.3.3.5.2.8l-.8 3.2c-.3 1-1 1.2-1.8.7-4.4-2-7.1-8.3-7.1-13.3C11.1 13.1 19 3.1 33.8 3.1 45.7 3.1 55 11.6 55 23c0 11.9-7.5 21.5-17.8 21.5-3.5 0-6.7-1.8-7.8-3.9l-2.1 8.1c-.8 3-2.9 6.7-4.3 9 3.3 1 6.7 1.6 10.3 1.6 13.8 0 23-10 23-22.7C56.3 17 45.8 7 32 7Z" fill="currentColor"/></svg> },
  { name: "فيسبوك", href: "https://www.facebook.com/saudi800800", className: "facebook", icon: <svg {...iconProps}><path d="M38 18h8V7c-2 0-6-1-10-1-10 0-16 6-16 17v9H10v12h10v20h12V44h11l2-12H32v-8c0-4 2-6 6-6Z" fill="currentColor"/></svg> },
  { name: "يوتيوب", href: "https://www.youtube.com/@saudi800", className: "youtube", icon: <svg {...iconProps}><path d="M55 20c-1-4-4-7-8-8-4-1-26-1-30 0-4 1-7 4-8 8-1 4-1 20 0 24 1 4 4 7 8 8 4 1 26 1 30 0 4-1 7-4 8-8 1-4 1-20 0-24Z" fill="currentColor"/><path d="m27 41 16-9-16-9v18Z" fill="#ff1837"/></svg> },
  { name: "تيليجرام", href: "https://t.me/saudi800800", className: "telegram", icon: <svg {...iconProps}><path d="M55.2 11.7 47 51.1c-.6 2.8-2.3 3.5-4.7 2.2L29.8 44l-6 5.8c-.7.7-1.2 1.2-2.5 1.2l.9-12.8L45.5 17c1-.9-.2-1.4-1.6-.5L15.1 34.6 2.7 30.7c-2.7-.8-2.7-2.7.6-4l48.4-18.6c2.3-.8 4.2.5 3.5 3.6Z" fill="currentColor"/></svg> },
  { name: "واتساب", href: "https://whatsapp.com/channel/0029VbDsEcjAu3aUqwyty53Y", className: "whatsapp", icon: <svg {...iconProps}><path d="M32 7C18.2 7 7 17.8 7 31.1c0 4.6 1.4 9.1 4 12.9L8.4 57l13.4-2.5c3.1 1.7 6.7 2.6 10.2 2.6 13.8 0 25-10.8 25-24S45.8 7 32 7Zm0 43.9c-3.2 0-6.4-.9-9.1-2.6l-.7-.4-7.9 1.5 1.5-7.6-.5-.8a18.5 18.5 0 0 1-3-9.9c0-10.2 8.8-18.5 19.7-18.5s19.7 8.3 19.7 18.5S42.9 50.9 32 50.9Z" fill="currentColor"/><path d="M43.2 36.7c-.6-.3-3.6-1.8-4.2-2-.6-.2-1-.3-1.5.3-.4.6-1.6 2-2 2.4-.4.4-.7.5-1.3.2-3.6-1.8-6-3.3-8.4-7.5-.6-1 .6-1 .9-1.8.1-.3.1-.7-.1-1-.1-.3-1.5-3.5-2-4.8-.5-1.3-1.1-1.1-1.5-1.1h-1.2c-.4 0-1.1.2-1.7.8-.6.6-2.2 2.2-2.2 5.3s2.3 6.2 2.6 6.6c.3.4 4.5 6.9 10.9 9.7 4.1 1.8 5.7 1.9 7.8 1.6 1.3-.2 3.6-1.5 4.1-2.9.5-1.4.5-2.6.4-2.9-.2-.3-.6-.5-1.2-.8Z" fill="currentColor"/></svg> },
];

export default function Home() {
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

  const markAsCopied = () => {
    setShareStatus("copied");
    window.setTimeout(() => setShareStatus("idle"), 2200);
  };

  const copyPageLink = async () => {
    const url = "https://saudi800800.com";
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("textarea");
      input.value = url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    markAsCopied();
  };

  const sharePage = async () => {
    const shareData = {
      title: "Saudi800800",
      text: "الإلهام والأفكار قبل أن تصبح واقع — عمارة وديكور بلمسة سعودية",
      url: "https://saudi800800.com",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyPageLink();
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
          <p className="official-label">حساباتنا الرسمية</p>
          <p className="brand-tagline">
            <strong>الإلهام والأفكار قبل أن تصبح واقع تصورات عمارة وديكور بلمسة سعودية</strong>
          </p>
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
            >
              <span className="button-face"><span className="icon-face">{link.icon}</span></span>
              <span className="button-depth" aria-hidden="true" />
            </a>
          ))}
        </nav>
        <section className="vision-copy" aria-label="عن محتوى Saudi800800">
          <p>
            مساحة بصرية تعرض تصوّرات لعمارة وديكور<br />
            بلمسة سعودية — من فناء نجدي إلى واجهة حجازية،<br />
            ومن مجلس عسيري إلى بيت ساحلي على الخليج.
          </p>
          <p>
            كل ما تراه هنا تصوّر تصميمي مُنشأ بالذكاء الاصطناعي،<br />
            لا صورة لمبنى قائم. الغاية إلهام صاحب البيت والمصمم والمقاول قبل أن ترتفع أول لبنة.
          </p>
          <p className="vision-signature"><strong>الإلهام والأفكار قبل أن تصبح واقع.</strong></p>
        </section>
        <div className="share-area">
          <button className="share-button" type="button" onClick={sharePage} aria-live="polite">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="18" cy="5" r="2.5" />
              <circle cx="6" cy="12" r="2.5" />
              <circle cx="18" cy="19" r="2.5" />
              <path d="m8.2 10.9 7.5-4.5M8.2 13.1l7.5 4.5" />
            </svg>
            <span>{shareStatus === "copied" ? "تم نسخ رابط الصفحة" : "مشاركة الصفحة"}</span>
          </button>
        </div>
      </section>
    </main>
  );
}
