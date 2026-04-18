import Link from 'next/link'

export default function WorkGrid({ projects }) {
  return (
    <section className="sec" id="work">
      <div className="sec-head">
        <div className="sec-num">03 — Selected Works</div>
        <h2 className="sec-title reveal">Recent<br /><em>engagements.</em></h2>
      </div>
      <div className="works">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className={`work reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
            <span className="w-num">({String(i + 1).padStart(2, '0')})</span>
            <span className="w-title">{p.title}</span>
            <span className="w-meta">
              {p.tags.join(' · ')}
              <span>{p.subtitle}</span>
            </span>
            <span className="w-year">{p.year}</span>
            <span className="w-thumb">
              <span className="tag">// {p.slug} — case study</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
