export default function Skills() {
  const skills = [
    {
      idx: '/ 01', glyph: '◇',
      title: 'UI / UX Design', titleEm: 'UX',
      desc: 'Interfaces that feel inevitable. I design calm, confident product experiences — from first principle to final pixel.',
      tags: ['Product Design', 'Design Systems', 'Prototyping', 'Interaction'],
    },
    {
      idx: '/ 02', glyph: '§',
      title: 'Graphic Design', titleEm: 'Design',
      desc: 'Editorial systems, campaigns, and print artifacts that reward a second look. Every grid, every ligature — deliberate.',
      tags: ['Editorial', 'Campaigns', 'Typography', 'Print & Motion'],
    },
    {
      idx: '/ 03', glyph: '❋',
      title: 'Branding & Identity', titleEm: 'Branding',
      desc: 'Identity work for founders who know their north. Marks, voice, and visual languages built to compound over decades.',
      tags: ['Logo & Wordmark', 'Brand Guidelines', 'Naming', 'Art Direction'],
    },
  ]

  function renderTitle(title, em) {
    const parts = title.split(em)
    return <>{parts[0]}<em>{em}</em>{parts[1]}</>
  }

  return (
    <section className="sec" id="skills">
      <div className="sec-head">
        <div className="sec-num">02 — Practice</div>
        <h2 className="sec-title reveal">Two disciplines,<br /><em>one point of view.</em></h2>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <article key={i} className={`skill reveal${i > 0 ? ` d${i}` : ''}`}>
            <div>
              <div className="idx">{s.idx}</div>
              <div className="glyph"><span>{s.glyph}</span></div>
              <h3>{renderTitle(s.title, s.titleEm)}</h3>
              <p>{s.desc}</p>
            </div>
            <ul>
              {s.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
