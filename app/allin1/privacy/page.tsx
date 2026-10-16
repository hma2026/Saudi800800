import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, PageTitle, text, h2, CONTACT_EMAIL } from '../_shell';

export const metadata: Metadata = {
  title: 'Privacy Policy — ALLIN1',
  description: 'How ALLIN1 collects, uses, stores, shares and deletes information.',
};

const a: React.CSSProperties = { color: '#8DE9FF' };

export default function PrivacyPage() {
  return (
    <Shell>
      <PageTitle eyebrow="PRIVACY" title="Privacy Policy" />
      <p style={text}>
        ALLIN1 is a social publishing workspace used by authorized users to connect the social media accounts they own or manage,
        prepare content, schedule posts and publish them. This policy explains what information ALLIN1 processes, why, how long it
        is kept, who it is shared with, and how to have it deleted.
      </p>

      <h2 style={h2}>Information we process</h2>
      <ul style={text}>
        <li><b>Your ALLIN1 account:</b> name, email address and profile picture from Google Sign-In, and security records of your sessions.</li>
        <li><b>Connected accounts:</b> the identifiers, names, profile pictures and granted permissions returned by a platform when you authorize ALLIN1, together with the access credentials (tokens or app passwords) needed to publish on your behalf.</li>
        <li><b>Your content:</b> the text, links, hashtags, images and videos you upload, the destinations you choose and your schedule.</li>
        <li><b>Publishing results:</b> the status of each publication, the identifier and link of the published post, and error messages returned by the platform.</li>
      </ul>
      <p style={text}>ALLIN1 does not access private messages, contacts, followers&apos; data, or any account you did not connect, and it does not use connected-account data for advertising or profiling.</p>

      <h2 style={h2}>How we use information</h2>
      <p style={text}>
        Information is used only to provide the features you request: signing you in, connecting your accounts, validating your posts
        against each platform&apos;s rules, publishing at the time you choose, and showing you the results. Platform data is never sold,
        used to train models, or transferred to anyone except as described below.
      </p>

      <h2 style={h2}>Platform-specific information</h2>
      <ul style={text}>
        <li><b>Facebook, Instagram and Threads (Meta):</b> ALLIN1 uses Page, Instagram professional account and Threads publishing permissions only to publish the posts you schedule to the Pages and accounts you select.</li>
        <li><b>YouTube:</b> ALLIN1 uses the YouTube API Services to upload the videos you choose to your channel with the title, description and privacy you set. By connecting YouTube you agree to the <a style={a} href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>, and Google&apos;s handling of data is described in the <a style={a} href="https://policies.google.com/privacy">Google Privacy Policy</a>. You can revoke ALLIN1&apos;s access at any time from your <a style={a} href="https://myaccount.google.com/permissions">Google security settings</a>.</li>
        <li><b>Google user data:</b> ALLIN1&apos;s use and transfer of information received from Google APIs adheres to the <a style={a} href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</li>
        <li><b>TikTok, X, Pinterest, Snapchat, Bluesky and Reddit:</b> ALLIN1 requests only the permissions needed to identify the connected account and publish the content you submit, with the privacy and interaction settings you choose.</li>
        <li><b>Telegram:</b> you connect a bot you created; ALLIN1 uses it only to post to the channels you specify.</li>
      </ul>

      <h2 style={h2}>Storage and security</h2>
      <p style={text}>
        Access credentials are encrypted at rest and decrypted only on the server when a requested operation needs them; they are never
        shown in the user interface or stored in your browser. Media files are kept in private storage and reached only through
        short-lived signed links. Access to ALLIN1 requires an authenticated session, and every change is protected by origin checks
        and one-time authorization states. No system is perfectly secure, but ALLIN1 is designed to minimize exposure of sensitive data.
      </p>

      <h2 style={h2}>Service providers</h2>
      <p style={text}>
        ALLIN1 runs on infrastructure providers that process data only to host and operate the service: application hosting (Vercel),
        database (Neon), file storage (Cloudflare R2), queueing and rate limiting (Upstash). For networks whose direct integration is still
        pending platform approval, ALLIN1 may temporarily publish through Ayrshare, a social media API provider, for accounts you link
        through it. Content is sent to a social platform only when you publish to it.
      </p>

      <h2 style={h2}>Retention</h2>
      <p style={text}>
        Connection credentials are kept while the account remains connected and are removed when you disconnect it. Posts, media and
        publishing records are kept while your workspace exists so you can review your history, unless you delete them earlier; media
        attached only to a single post can be cleaned up automatically after publication.
      </p>

      <h2 style={h2}>Your choices and deletion</h2>
      <p style={text}>
        You can disconnect any account from the Accounts page in ALLIN1, delete posts and media, or revoke ALLIN1 from the platform&apos;s own
        settings. To delete your ALLIN1 account and all associated data, follow the steps on the <Link href="/allin1/data-deletion" style={a}>Data Deletion</Link> page.
      </p>

      <h2 style={h2}>Children</h2>
      <p style={text}>ALLIN1 is not directed to children and is intended for business and professional users aged 18 or over.</p>

      <h2 style={h2}>Changes</h2>
      <p style={text}>This policy is updated when ALLIN1 adds integrations or changes how data is processed; the effective date above changes with it.</p>

      <h2 style={h2}>Contact</h2>
      <p style={text}>Privacy questions and requests: <a href={`mailto:${CONTACT_EMAIL}`} style={a}>{CONTACT_EMAIL}</a></p>
    </Shell>
  );
}
