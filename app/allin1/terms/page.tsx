import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, PageTitle, text, h2, CONTACT_EMAIL } from '../_shell';

export const metadata: Metadata = {
  title: 'Terms of Use — ALLIN1',
  description: 'Terms of Use for the ALLIN1 social publishing application.',
};

const a: React.CSSProperties = { color: '#8DE9FF' };

export default function TermsPage() {
  return (
    <Shell>
      <PageTitle eyebrow="TERMS" title="Terms of Use" />
      <p style={text}>
        These terms govern the use of ALLIN1, a social publishing application. By signing in you agree to them and to our{' '}
        <Link href="/allin1/privacy" style={a}>Privacy Policy</Link>.
      </p>

      <h2 style={h2}>Who may use ALLIN1</h2>
      <p style={text}>ALLIN1 is available to users authorized by its administrator. You must be at least 18 years old and able to enter into these terms.</p>

      <h2 style={h2}>Your accounts and content</h2>
      <p style={text}>
        Connect only accounts you own or are authorized to manage. You are responsible for the content you publish through ALLIN1 and must
        hold the rights to it. You must comply with the terms and community guidelines of every platform you publish to, including the{' '}
        <a href="https://www.youtube.com/t/terms" style={a}>YouTube Terms of Service</a> when you connect YouTube.
      </p>

      <h2 style={h2}>Acceptable use</h2>
      <p style={text}>
        Do not use ALLIN1 for spam, impersonation, misleading or unlawful content, automated engagement manipulation, or to bypass any
        platform&apos;s limits or security. Do not attempt to bypass ALLIN1&apos;s authentication or access other users&apos; data.
      </p>

      <h2 style={h2}>Platform availability</h2>
      <p style={text}>
        ALLIN1 depends on third-party platform APIs. Features, permissions and limits may change or be suspended by those platforms, and
        a platform may reject or moderate a post. ALLIN1 reports the result it receives but cannot guarantee publication.
      </p>

      <h2 style={h2}>Security</h2>
      <p style={text}>Keep your sign-in secure and disconnect integrations that should no longer have access. Report suspected misuse to {CONTACT_EMAIL}.</p>

      <h2 style={h2}>Suspension and termination</h2>
      <p style={text}>Access may be suspended or ended if these terms are violated, if authorization is withdrawn, or to protect the service, its users or connected platforms. You may stop using ALLIN1 and request deletion of your data at any time.</p>

      <h2 style={h2}>Disclaimer and liability</h2>
      <p style={text}>ALLIN1 is provided &quot;as is&quot;. To the extent permitted by law, ALLIN1 is not liable for indirect or consequential losses, or for actions taken by third-party platforms.</p>

      <h2 style={h2}>Changes</h2>
      <p style={text}>These terms may be updated; the effective date above changes when they do. Continued use after an update means you accept it.</p>

      <h2 style={h2}>Contact</h2>
      <p style={text}><a href={`mailto:${CONTACT_EMAIL}`} style={a}>{CONTACT_EMAIL}</a></p>
    </Shell>
  );
}
