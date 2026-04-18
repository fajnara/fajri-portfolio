export default function CaseImage({ src, caption }) {
  const styles = {
    wrapper: {
      padding: '0 48px 64px',
    },
    img: {
      width: '100%',
      aspectRatio: '16/9',
      objectFit: 'cover',
      background: '#2e2b24',
    },
    caption: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '10px',
      letterSpacing: '0.1em',
      color: '#4a4540',
      textTransform: 'uppercase',
      marginTop: '12px',
    },
  }

  return (
    <div style={styles.wrapper}>
      {src ? (
        <img src={src} alt={caption || ''} style={styles.img} />
      ) : (
        // Placeholder jika gambar belum ada
        <div style={{ ...styles.img, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#4a4540', letterSpacing: '0.1em' }}>
            IMAGE PLACEHOLDER
          </span>
        </div>
      )}
      {caption && <p style={styles.caption}>{caption}</p>}
    </div>
  )
}
