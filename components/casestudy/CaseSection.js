import CaseImage from './CaseImage'

export default function CaseSection({ section }) {
  const styles = {
    wrapper: {
      padding: '64px 48px',
      borderBottom: '1px solid #2e2b24',
      maxWidth: '800px',
    },
    heading: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '11px',
      letterSpacing: '0.15em',
      color: '#4a4540',
      textTransform: 'uppercase',
      marginBottom: '20px',
    },
    body: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '13px',
      lineHeight: 2,
      color: '#8a8070',
    },
  }

  if (section.type === 'image') {
    return <CaseImage src={section.src} caption={section.caption} />
  }

  return (
    <div style={styles.wrapper}>
      {section.heading && <p style={styles.heading}>{section.heading}</p>}
      {section.body && <p style={styles.body}>{section.body}</p>}
    </div>
  )
}
