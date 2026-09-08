import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — ALLIN1',
  description: 'Terms of Use for the independent ALLIN1 social publishing application.',
};

const shell: React.CSSProperties = {minHeight:'100vh',background:'#031127',color:'#F7FAFF',fontFamily:'Inter, Arial, sans-serif'};
const wrap: React.CSSProperties = {maxWidth:880,margin:'0 auto',padding:'36px 22px 72px'};
const text: React.CSSProperties = {color:'#B8C5DB',lineHeight:1.8};

export default function TermsPage(){
  return <main style={shell}><div style={wrap}>
    <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap',marginBottom:52}}>
      <Link href="/allin1" style={{color:'#F7FAFF',textDecoration:'none',fontWeight:800,fontSize:20}}>ALLIN1</Link>
      <Link href="/allin1" style={{color:'#A9B9D4'}}>Back to app information</Link>
    </nav>
    <div style={{fontSize:12,fontWeight:800,letterSpacing:'.16em',color:'#19D7F4'}}>TERMS</div>
    <h1 style={{fontSize:'clamp(38px,7vw,58px)',lineHeight:1.08,margin:'10px 0 10px'}}>Terms of Use</h1>
    <p style={{color:'#8292AC'}}>Effective date: September 8, 2026</p>

    <div style={{marginTop:28,border:'1px solid rgba(169,185,212,.18)',background:'rgba(10,35,78,.55)',borderRadius:20,padding:24}}>
      <p style={{...text,margin:0}}>ALLIN1 is an independent social publishing workspace intended for authorized users. By using the service, you agree to use connected social-platform accounts only when you have the authority to do so and to comply with the applicable platform rules.</p>
    </div>

    <h2 style={{marginTop:38}}>Authorized use</h2>
    <p style={text}>You may use ALLIN1 to prepare, schedule, and publish content through supported platform integrations. You are responsible for the content you submit and for ensuring you have the necessary rights and permissions.</p>

    <h2 style={{marginTop:38}}>Connected platforms</h2>
    <p style={text}>ALLIN1 relies on third-party APIs, including Pinterest. Availability, permissions, rate limits, and publishing behavior may depend on the access tier and policies of each platform. Third-party services may change or suspend API functionality independently of ALLIN1.</p>

    <h2 style={{marginTop:38}}>Security responsibilities</h2>
    <p style={text}>Users must protect their login credentials, avoid sharing application secrets, and disconnect integrations that should no longer have access. Attempts to bypass authentication, security controls, or platform restrictions are prohibited.</p>

    <h2 style={{marginTop:38}}>Content and publishing</h2>
    <p style={text}>ALLIN1 provides operational tools for content preparation and publishing but does not guarantee that a third-party platform will accept or display every post. Platform-side validation, moderation, availability, and policy enforcement remain outside ALLIN1's control.</p>

    <h2 style={{marginTop:38}}>Service changes</h2>
    <p style={text}>The service may evolve as new integrations, storage systems, scheduling workers, or platform capabilities are added. Features may be changed or temporarily disabled when necessary for security, compatibility, or platform compliance.</p>

    <h2 style={{marginTop:38}}>Termination of access</h2>
    <p style={text}>Access may be disabled when authorization is withdrawn, when a connected account is disconnected, or when continued access would create a security or compliance risk.</p>

    <h2 style={{marginTop:38}}>No sale of platform credentials</h2>
    <p style={text}>ALLIN1 does not sell OAuth credentials or connected-account access. Credentials are used only to perform authorized application functions.</p>

    <footer style={{marginTop:56,paddingTop:22,borderTop:'1px solid rgba(169,185,212,.16)',color:'#8292AC'}}>© 2026 ALLIN1 · <Link href="/allin1/privacy" style={{color:'#8DE9FF'}}>Privacy Policy</Link></footer>
  </div></main>;
}
