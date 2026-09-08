import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ALLIN1',
  description: 'Privacy Policy for the independent ALLIN1 social publishing application.',
};

const shell: React.CSSProperties = {minHeight:'100vh',background:'#031127',color:'#F7FAFF',fontFamily:'Inter, Arial, sans-serif'};
const wrap: React.CSSProperties = {maxWidth:880,margin:'0 auto',padding:'36px 22px 72px'};
const text: React.CSSProperties = {color:'#B8C5DB',lineHeight:1.8};

export default function PrivacyPage(){
  return <main style={shell}><div style={wrap}>
    <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap',marginBottom:52}}>
      <Link href="/allin1" style={{color:'#F7FAFF',textDecoration:'none',fontWeight:800,fontSize:20}}>ALLIN1</Link>
      <Link href="/allin1" style={{color:'#A9B9D4'}}>Back to app information</Link>
    </nav>
    <div style={{fontSize:12,fontWeight:800,letterSpacing:'.16em',color:'#19D7F4'}}>PRIVACY</div>
    <h1 style={{fontSize:'clamp(38px,7vw,58px)',lineHeight:1.08,margin:'10px 0 10px'}}>Privacy Policy</h1>
    <p style={{color:'#8292AC'}}>Effective date: September 8, 2026</p>

    <div style={{marginTop:28,border:'1px solid rgba(169,185,212,.18)',background:'rgba(10,35,78,.55)',borderRadius:20,padding:24}}>
      <p style={text}>ALLIN1 is an independent social publishing workspace used by authorized users to connect supported social accounts, prepare content, schedule posts, and manage publishing operations.</p>
      <p style={{...text,marginBottom:0}}>This policy explains what information ALLIN1 processes, why it is processed, and the controls available to authorized users.</p>
    </div>

    <h2 style={{marginTop:38}}>Information we process</h2>
    <ul style={text}>
      <li>Account connection information returned after OAuth authorization, such as account identifiers, profile metadata, and granted scopes.</li>
      <li>OAuth access and refresh credentials required to make authorized API requests on behalf of the connected account.</li>
      <li>Publishing data supplied by the user, including titles, descriptions, links, destination identifiers, scheduling information, and media metadata.</li>
      <li>Operational records needed to manage queues, status, validation, failures, and connection health.</li>
      <li>Security-related session information needed to authenticate authorized users of ALLIN1.</li>
    </ul>

    <h2 style={{marginTop:38}}>How we use information</h2>
    <p style={text}>Information is used only to provide and secure the publishing workflow requested by the authorized user: connecting accounts, reading permitted account resources, preparing and validating posts, scheduling publication, publishing content, and reporting operational status.</p>

    <h2 style={{marginTop:38}}>Pinterest data</h2>
    <p style={text}>When a user connects Pinterest, ALLIN1 requests only the scopes needed for the enabled Pinterest features. Pinterest credentials are handled server-side and are not stored in browser local storage or session storage. Users can disconnect Pinterest from ALLIN1, which removes the stored connection record used by the application.</p>

    <h2 style={{marginTop:38}}>Credential protection</h2>
    <p style={text}>OAuth credentials are stored in encrypted form and are decrypted only when an authorized server-side API operation requires them. Application secrets are not displayed in the ALLIN1 user interface.</p>

    <h2 style={{marginTop:38}}>Sharing and sale of data</h2>
    <p style={text}>ALLIN1 does not sell connected-account data. Data may be processed by infrastructure providers only as needed to host, secure, store, and operate the service, or transmitted to a social platform when carrying out an authorized publishing action.</p>

    <h2 style={{marginTop:38}}>Retention and deletion</h2>
    <p style={text}>Connection data is retained while the integration remains connected or while it is required for the requested service. An authorized user can disconnect a supported account from ALLIN1. Publishing records may also be removed from the application's queue by authorized users.</p>

    <h2 style={{marginTop:38}}>Security</h2>
    <p style={text}>ALLIN1 uses server-side authenticated sessions, origin checks for state-changing requests, one-time OAuth state values, encrypted credential storage, and restricted access to operational data. No system can guarantee absolute security, but the service is designed to minimize exposure of sensitive credentials.</p>

    <h2 style={{marginTop:38}}>Third-party services</h2>
    <p style={text}>Social platforms such as Pinterest process information under their own terms and privacy policies. ALLIN1's use of platform data is limited by the permissions granted by the account owner and the platform's developer requirements.</p>

    <h2 style={{marginTop:38}}>Changes to this policy</h2>
    <p style={text}>This policy may be updated when ALLIN1 adds integrations or materially changes how data is processed. The effective date shown above will be updated when material changes are made.</p>

    <h2 style={{marginTop:38}}>Privacy requests</h2>
    <p style={text}>Authorized users can use the account-management controls inside ALLIN1 to disconnect supported integrations. Additional privacy or deletion requests can be submitted through the administrative contact associated with the ALLIN1 application.</p>

    <footer style={{marginTop:56,paddingTop:22,borderTop:'1px solid rgba(169,185,212,.16)',color:'#8292AC'}}>© 2026 ALLIN1 · <Link href="/allin1/terms" style={{color:'#8DE9FF'}}>Terms of Use</Link></footer>
  </div></main>;
}
