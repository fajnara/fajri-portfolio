export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="index">
        <span>Freelance Creative Designer</span>
        <span>Portfolio / Vol. 04</span>
        <span>Banjarmasin ⇄ Worldwide</span>
      </div>

      <div className="eyebrow">Fajri — est. 2020</div>

      <h1>
        <span className="h-word"><span>Crafting</span></span>{' '}
        <span className="h-word"><span>brands</span></span><br />
        <span className="h-word"><span>that</span></span>{' '}
        <span className="h-word"><span className="italic">mean&nbsp;something.</span></span>
      </h1>

      <div className="hero-row">
        <p className="hero-tag reveal">
          An independent designer shaping identity, interface, and story
          for founders who refuse to blend in — work built on{' '}
          <span className="mean">intention,</span> not trend.
        </p>
        <div className="hero-meta reveal d2">
          <div className="row"><span className="k">Discipline</span><span className="v">UI/UX · Branding</span></div>
          <div className="row"><span className="k">Engagements</span><span className="v">42 Shipped</span></div>
          <div className="row"><span className="k">Based</span><span className="v">Banjarmasin, ID</span></div>
          <div className="row"><span className="k">Clients</span><span className="v">DTC · Fintech · Arts</span></div>
        </div>
      </div>

      <div className="cta-wrap reveal d3">
        <a href="#work" className="cta">
          <span>View My Work</span>
          <span className="arrow" />
        </a>
        <span className="cta-sub">A selection of 2023—26 engagements across identity &amp; product.</span>
      </div>
    </header>
  )
}
