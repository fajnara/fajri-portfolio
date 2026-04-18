export default function About() {
  return (
    <section className="sec" id="about">
      <div className="sec-head">
        <div className="sec-num">01 — About</div>
        <h2 className="sec-title reveal">A designer<br /><em>with a point of view.</em></h2>
      </div>
      <div className="about-grid">
        <div className="about-portrait reveal">
          <span className="corner c-tl" /><span className="corner c-tr" />
          <span className="corner c-bl" /><span className="corner c-br" />
          <span className="label">// portrait.fajri — 4:5</span>
        </div>
        <div className="about-body reveal d2">
          <p>I&#39;m Fajri — a freelance designer working at the intersection of{' '}
            <em>brand</em> and <em>product</em>. For the last four years I&#39;ve helped
            founders turn quiet convictions into companies that feel unmistakably theirs.</p>
          <p>My practice is small on purpose. One designer, one point of view, and a
            deep respect for the craft: typography that breathes, interfaces that disappear,
            identities that survive a decade.</p>
          <p>If you&#39;re building something serious — I&#39;d like to hear about it.</p>
          <div className="about-sign">
            <div>Based in<b>Banjarmasin, ID</b></div>
            <div>Working since<b>2020</b></div>
            <div>Typing from<b>a quiet studio</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}
