import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, card, APP_URL, CONTACT_EMAIL } from './_shell';

export const metadata: Metadata = {
  title: 'ALLIN1 — Post Everywhere From One Place',
  description: 'ALLIN1 is a social publishing workspace for authorized users: connect accounts, prepare content, schedule and publish from one place.',
};

const PLATFORMS = ['Facebook Pages', 'Instagram (professional accounts)', 'Threads', 'YouTube', 'X', 'TikTok', 'Pinterest', 'Snapchat (Public Profiles)', 'Telegram (channels)', 'Bluesky', 'Reddit'];

export default function AllIn1InfoPage() {
  return (
    <Shell wide>
      <section style={{ display: 'grid', gap: 18, maxWidth: 820 }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.18em', color: '#19D7F4' }}>SOCIAL PUBLISHING WORKSPACE</div>
        <h1 style={{ fontSize: 'clamp(42px,8vw,74px)', lineHeight: 1.02, margin: 0 }}>Post everywhere<br />from one place.</h1>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: '#A9B9D4', margin: 0 }}>
          ALLIN1 is a social publishing application for authorized users. A user connects the social accounts they own or manage,
          prepares a post once, adjusts it per platform, and schedules or publishes it to each connected account.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#A9B9D4', margin: 0 }}>
          Every account is connected only after its owner explicitly authorizes ALLIN1 on the platform itself (OAuth or a
          platform-issued app credential). ALLIN1 publishes only content the user created and scheduled, only to the accounts
          the user connected. It does not read private messages, follow, like, comment on behalf of users, or collect data about other people.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
          <a href={APP_URL} style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', padding: '10px 18px', borderRadius: 12, background: '#19D7F4', color: '#031127', fontWeight: 800, textDecoration: 'none' }}>Open ALLIN1</a>
          <Link href="/allin1/privacy" style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', padding: '10px 18px', borderRadius: 12, border: '1px solid rgba(169,185,212,.25)', color: '#F7FAFF', textDecoration: 'none' }}>Privacy Policy</Link>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14, marginTop: 54 }}>
        <article style={card}><h2 style={{ margin: '0 0 8px', fontSize: 18 }}>Connect</h2><p style={{ margin: 0, color: '#A9B9D4', lineHeight: 1.75 }}>Authorize your own accounts on each platform. Credentials are encrypted server-side and can be disconnected at any time.</p></article>
        <article style={card}><h2 style={{ margin: '0 0 8px', fontSize: 18 }}>Compose &amp; validate</h2><p style={{ margin: 0, color: '#A9B9D4', lineHeight: 1.75 }}>Write one post, attach images or video, and see each platform&apos;s limits checked before anything is sent.</p></article>
        <article style={card}><h2 style={{ margin: '0 0 8px', fontSize: 18 }}>Schedule &amp; publish</h2><p style={{ margin: 0, color: '#A9B9D4', lineHeight: 1.75 }}>Publish now or at a chosen time. Each destination reports its own result with a link to the published post.</p></article>
      </section>

      <section style={{ ...card, marginTop: 14 }}>
        <h2 style={{ margin: '0 0 10px', fontSize: 18 }}>Supported platforms</h2>
        <p style={{ margin: 0, color: '#A9B9D4', lineHeight: 1.9 }}>{PLATFORMS.join(' · ')}</p>
        <p style={{ margin: '10px 0 0', color: '#8292AC', lineHeight: 1.7, fontSize: 14 }}>Each integration uses only the official API of that platform and only the permissions needed to publish the user&apos;s own content.</p>
      </section>

      <p style={{ color: '#8292AC', marginTop: 28 }}>Questions or requests: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#8DE9FF' }}>{CONTACT_EMAIL}</a></p>
    </Shell>
  );
}
