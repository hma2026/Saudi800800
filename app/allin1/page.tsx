import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ALLIN1 — Post Everywhere From One Place',
  description: 'ALLIN1 is an independent social publishing workspace for authorized users.',
};

const shell: React.CSSProperties = {
  minHeight: '100vh',
  background: '#031127',
  color: '#F7FAFF',
  fontFamily: 'Inter, Arial, sans-serif',
};

const wrap: React.CSSProperties = {
  maxWidth: 1040,
  margin: '0 auto',
  padding: '40px 22px 72px',
};

const card: React.CSSProperties = {
  border: '1px solid rgba(169,185,212,.20)',
  background: 'linear-gradient(180deg, rgba(10,35,78,.92), rgba(6,27,63,.94))',
  borderRadius: 20,
  padding: 22,
};

const linkStyle: React.CSSProperties = {
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 16px',
  borderRadius: 12,
  border: '1px solid rgba(169,185,212,.20)',
  color: '#F7FAFF',
  textDecoration: 'none',
};

export default function AllIn1InfoPage() {
  return (
    <main style={shell}>
      <div style={wrap}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap',marginBottom:64}}>
          <strong style={{fontSize:22,letterSpacing:'.04em'}}>ALLIN1</strong>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <Link href="/allin1/privacy" style={linkStyle}>Privacy Policy</Link>
            <Link href="/allin1/terms" style={linkStyle}>Terms of Use</Link>
          </div>
        </nav>

        <section style={{display:'grid',gap:18,maxWidth:820}}>
          <div style={{fontSize:12,fontWeight:800,letterSpacing:'.18em',color:'#19D7F4'}}>INDEPENDENT SOCIAL PUBLISHING WORKSPACE</div>
          <h1 style={{fontSize:'clamp(42px,8vw,74px)',lineHeight:1.02,margin:0}}>Post everywhere<br/>from one place.</h1>
          <p style={{fontSize:18,lineHeight:1.8,color:'#A9B9D4',margin:0}}>
            ALLIN1 is a standalone social publishing application for authorized users. It centralizes social account connections, content preparation, scheduling, bulk CSV workflows, and publishing operations in one secure workspace.
          </p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#A9B9D4',margin:'2px 0 0'}}>
            Pinterest is the first active integration and is connected only after the account owner explicitly authorizes access through OAuth.
          </p>
        </section>

        <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:14,marginTop:54}}>
          <article style={card}><h2 style={{margin:'0 0 8px',fontSize:18}}>Secure connections</h2><p style={{margin:0,color:'#A9B9D4',lineHeight:1.75}}>OAuth-based account connections with server-side authentication and encrypted credential handling.</p></article>
          <article style={card}><h2 style={{margin:'0 0 8px',fontSize:18}}>Single & bulk publishing</h2><p style={{margin:0,color:'#A9B9D4',lineHeight:1.75}}>Create individual posts or validate and import structured CSV batches before scheduling.</p></article>
          <article style={card}><h2 style={{margin:'0 0 8px',fontSize:18}}>Operational visibility</h2><p style={{margin:0,color:'#A9B9D4',lineHeight:1.75}}>Review queues, publishing states, account health, and preflight validation from one place.</p></article>
        </section>

        <footer style={{marginTop:72,paddingTop:22,borderTop:'1px solid rgba(169,185,212,.16)',color:'#8292ac',display:'flex',justifyContent:'space-between',gap:14,flexWrap:'wrap'}}>
          <span>© 2026 ALLIN1</span>
          <span><Link href="/allin1/privacy" style={{color:'#A9B9D4'}}>Privacy Policy</Link> · <Link href="/allin1/terms" style={{color:'#A9B9D4'}}>Terms of Use</Link></span>
        </footer>
      </div>
    </main>
  );
}
