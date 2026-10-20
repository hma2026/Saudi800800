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
  { name: "Threads", href: "https://www.threads.com/@saudi800800", className: "threads", icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" fill="currentColor"/></svg> },
  { name: "Bluesky", href: "https://bsky.app/profile/saudi800800.bsky.social", className: "bluesky", icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" fill="currentColor"/></svg> },
  { name: "Reddit", href: "https://www.reddit.com/user/saudi800800/", className: "reddit", icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" fill="currentColor"/></svg> },
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
