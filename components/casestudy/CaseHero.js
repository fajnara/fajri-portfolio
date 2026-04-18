import Link from 'next/link'

export default function CaseHero({ project }) {
  const styles = {
    section: {
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '120px 48px 64px',
      borderBottom: '1px solid #2e2b24',
    },
    back: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '11px',
      letterSpacing: '0.12em',
      color: '#4a4540',
      textTransform: 'uppercase',
      marginBottom: '48px',
      display: 'inline-block',
      textDecoration: 'none',
      transition: 'color 0.2s',
    },
    tags: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px',
    },
    tag: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '10px',
      letterSpacing: '0.1em',
      color: '#4a4540',
      border: '1px solid #2e2b24',
      padding: '3px 10px',
      textTransform: 'uppercase',
    },
    title: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: 'clamp(48px, 8vw, 96px)',
      lineHeight: 0.95,
      color: '#f0e6d2',
      marginBottom: '16px',
    },
    subtitle: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '13px',
      color: '#8a8070',
      letterSpacing: '0.04em',
      marginBottom: '8px',
    },
    year: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '11px',
      color: '#4a4540',
      letterSpacing: '0.1em',
    },
  }

  return (
    <section style={styles.section}>
      <Link href="/#work" style={styles.back}>← Back to work</Link>
      <div style={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} style={styles.tag}>{tag}</span>
        ))}
      </div>
      <h1 style={styles.title}>{project.title}</h1>
      <p style={styles.subtitle}>{project.subtitle}</p>
      <span style={styles.year}>{project.year}</span>
    </section>
  )
}
