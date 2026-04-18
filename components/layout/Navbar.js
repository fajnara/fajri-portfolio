import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav reveal in" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 0 0',
      fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
      color: 'var(--ink-dim)',
    }}>
      <div className="mark">
        <span className="dot" />
        <span>Fajri&nbsp;Studio</span>
      </div>
      <ul>
        <li><Link href="/#work">Work</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#skills">Skills</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      <div className="avail">
        <span className="pulse" />
        <span>Available — Q3 &#39;26</span>
      </div>
    </nav>
  )
}
