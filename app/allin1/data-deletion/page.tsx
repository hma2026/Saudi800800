import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, PageTitle, text, h2, CONTACT_EMAIL } from '../_shell';

export const metadata: Metadata = {
  title: 'Data Deletion — ALLIN1',
  description: 'How to remove ALLIN1 access to a connected account and delete your ALLIN1 data.',
};

const a: React.CSSProperties = { color: '#8DE9FF' };

export default function DataDeletionPage() {
  return (
    <Shell>
      <PageTitle eyebrow="DATA DELETION" title="Data Deletion Instructions" />
      <p style={text}>You can remove ALLIN1&apos;s access to any connected account, and you can have all of your ALLIN1 data deleted.</p>

      <h2 style={h2}>1. Disconnect an account inside ALLIN1</h2>
      <p style={text}>
        Sign in to ALLIN1, open <b>Accounts</b>, and choose <b>Disconnect</b> on the account. ALLIN1 immediately stops using it and its stored
        access credentials are revoked.
      </p>

      <h2 style={h2}>2. Remove ALLIN1 from the platform</h2>
      <ul style={text}>
        <li><b>Facebook / Instagram:</b> Settings &amp; privacy → Settings → Apps and websites (Facebook), or Settings → Website permissions → Apps and websites (Instagram) → remove ALLIN1.</li>
        <li><b>Threads:</b> Settings → Account → Website permissions → remove ALLIN1.</li>
        <li><b>Google / YouTube:</b> <a href="https://myaccount.google.com/permissions" style={a}>myaccount.google.com/permissions</a> → ALLIN1 → Remove access.</li>
        <li><b>X, TikTok, Pinterest, Snapchat, Reddit:</b> the connected apps section of each platform&apos;s security settings → remove ALLIN1.</li>
        <li><b>Bluesky:</b> Settings → Privacy and security → App passwords → delete the ALLIN1 app password.</li>
        <li><b>Telegram:</b> remove the bot from your channel, or revoke its token with @BotFather.</li>
      </ul>

      <h2 style={h2}>3. Delete all of your ALLIN1 data</h2>
      <p style={text}>
        Email <a href={`mailto:${CONTACT_EMAIL}?subject=ALLIN1%20data%20deletion%20request`} style={a}>{CONTACT_EMAIL}</a> from the email address
        you use to sign in, with the subject &quot;ALLIN1 data deletion request&quot;. We delete your ALLIN1 account, workspace, connected-account
        records and credentials, posts, media files and publishing history within 30 days and confirm by email. Content already published on a
        social platform stays on that platform until you delete it there.
      </p>

      <h2 style={h2}>Facebook data deletion</h2>
      <p style={text}>
        If you removed ALLIN1 from Facebook and want the data ALLIN1 received from Facebook deleted, send the request above; it covers all data
        received from Facebook and Instagram.
      </p>

      <p style={{ ...text, marginTop: 30 }}>See also our <Link href="/allin1/privacy" style={a}>Privacy Policy</Link>.</p>
    </Shell>
  );
}
