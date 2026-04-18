import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { projects, getProjectBySlug } from '../../data/projects'

export default function CaseStudy({ project }) {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [project.slug])

  if (!project) return null

  return (
    <>
      <Head>
        <title>{project.title} — Fajri Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page">
        <Navbar />
        <main>
          <CaseHero project={project} />
          {project.sections.map((section, i) => (
            <CaseSection key={i} section={section} />
          ))}
          {project.next && <NextProject next={project.next} />}
        </main>
        <Footer />
      </div>
    </>
  )
}

function CaseHero({ project }) {
  return (
    <header style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--rule-soft)' }}>
      <Link href="/#work" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--ink-quiet)',
        marginBottom: '48px', transition: 'color .25s',
      }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--ink-quiet)'}
      >
        ← Back to Work
      </Link>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--gold)',
            border: '1px solid var(--rule)', padding: '3px 12px',
          }}>{tag}</span>
        ))}
      </div>

      <h1 style={{
        fontFamily: 'var(--serif)', fontWeight: 300,
        fontSize: 'clamp(32px, 6vw, 140px)',
        lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)',
        marginBottom: '24px',
      }}>
        {project.title}{project.titleSub && <> <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{project.titleSub}</em></>}
      </h1>

      <p style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--ink-dim)',
        marginBottom: '64px', maxWidth: '640px',
      }}>{project.description}</p>

      {project.meta && (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0', borderTop: '1px solid var(--rule-soft)',
        }}>
          {[
            { k: 'Role', v: project.meta.role },
            { k: 'Duration', v: project.meta.duration },
            { k: 'Deliverables', v: project.meta.deliverables },
            { k: 'Status', v: project.meta.status },
          ].map(({ k, v }) => (
            <div key={k} style={{ padding: '28px 0 28px', borderRight: '1px solid var(--rule-soft)', paddingRight: '24px', marginRight: '24px' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-quiet)', marginBottom: '12px' }}>{k}</p>
              {v.split('\n').map((line, i) => (
                <p key={i} style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 300, color: i === 0 ? 'var(--cream)' : 'var(--ink-dim)', lineHeight: 1.4 }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

function CaseSection({ section }) {
  if (section.steps) return <ProcessSection section={section} />
  if (section.images) return <FinalDesignSection section={section} />
  if (section.stats && section.learnings) return <ResultsSection section={section} />
  if (section.stats) return <OverviewSection section={section} />
  if (section.personas) return <ResearchSection section={section} />
  return <TextSection section={section} />
}

function TextSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px', alignItems: 'start' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div className="reveal d1">
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '32px' }}>{section.heading}</h2>
          {section.body.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '20px' }}>{para}</p>
          ))}
          {section.quote && (
            <blockquote style={{
              margin: '48px 0 0', padding: '32px 40px',
              borderLeft: '2px solid var(--gold)',
              background: 'var(--bg-2)',
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: '22px', lineHeight: 1.5, color: 'var(--cream)',
            }}>{section.quote}</blockquote>
          )}
        </div>
      </div>
    </section>
  )
}
function OverviewSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div>
          <h2 className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '40px' }}>{section.heading}</h2>
          <div className="reveal d1 stats-row" style={{ display: 'flex', gap: '48px', marginBottom: '48px', paddingBottom: '40px', borderBottom: '1px solid var(--rule-soft)', flexWrap: 'wrap' }}>
            {section.stats.map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '48px', lineHeight: 1, color: 'var(--gold)', letterSpacing: '-0.02em' }}>{s.value}</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-quiet)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>{s.label}</p>
              </div>
            ))}
          </div>
          {section.body.split('\n\n').map((para, i) => (
            <p key={i} className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '20px' }}>{para}</p>
          ))}
          {section.quote && (
            <blockquote className="reveal d2" style={{ margin: '40px 0 0', padding: '28px 36px', borderLeft: '2px solid var(--gold)', background: 'var(--bg-2)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', lineHeight: 1.5, color: 'var(--cream)' }}>{section.quote}</blockquote>
          )}
        </div>
      </div>
    </section>
  )
}

function ResearchSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div>
          <h2 className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '32px' }}>{section.heading}</h2>
          <p className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '48px' }}>{section.body}</p>

          <div className="persona-grid reveal d2" style={{ display: 'grid', gap: '24px', marginBottom: '48px' }}>
            {section.personas.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg-2)', border: '1px solid var(--rule-soft)', padding: '36px' }}>
                <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '22px', color: 'var(--cream)', marginBottom: '4px' }}>{p.name}</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-quiet)', letterSpacing: '0.08em', marginBottom: '24px' }}>{p.role}</p>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', lineHeight: 1.5, color: 'var(--gold)', marginBottom: '24px' }}>{p.quote}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-quiet)', border: '1px solid var(--rule)', padding: '2px 10px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="reveal d2" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', lineHeight: 1.6, color: 'var(--ink-dim)', borderTop: '1px solid var(--rule-soft)', paddingTop: '32px' }}>
            <span style={{ color: 'var(--gold)', fontStyle: 'normal', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Key Insight</span>
            {section.insight}
          </p>
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div>
          <h2 className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '32px' }}>{section.heading}</h2>
          <p className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '48px' }}>{section.body}</p>

          <div className="reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--rule-soft)', border: '1px solid var(--rule-soft)', marginBottom: '48px' }}>
            {section.steps.map((s, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '32px 28px' }}>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '20px' }}>{s.num}</p>
                <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '24px', color: 'var(--cream)', marginBottom: '12px' }}>{s.label}</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-quiet)', lineHeight: 1.7, letterSpacing: '0.04em' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '40px' }}>{section.visual}</p>

          {section.image && (
            <div className="reveal d3">
              <img src={section.image.src} alt={section.image.caption} style={{ width: '100%', display: 'block', border: '1px solid var(--rule-soft)' }} />
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-quiet)', marginTop: '12px' }}>{section.image.caption}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FinalDesignSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div>
          <h2 className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '32px' }}>{section.heading}</h2>
          <p className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '48px' }}>{section.body}</p>

          {section.images.map((img, i) => (
            <div key={i} className="reveal d2" style={{ marginBottom: '32px' }}>
              <img src={img.src} alt={img.caption} style={{ width: '100%', display: 'block', border: '1px solid var(--rule-soft)' }} />
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-quiet)', marginTop: '12px' }}>{img.caption}</p>
            </div>
          ))}

          <p className="reveal d3" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink-dim)', marginTop: '16px' }}>{section.typography}</p>
        </div>
      </div>
    </section>
  )
}

function ResultsSection({ section }) {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--rule-soft)' }}>
      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '80px' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{section.num}</p>
        </div>
        <div>
          <h2 className="reveal d1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '48px' }}>{section.heading}</h2>

          <div className="reveal d1 " style={{ display: 'flex', gap: '64px', marginBottom: '56px', paddingBottom: '56px', borderBottom: '1px solid var(--rule-soft)' }}>
            {section.stats.map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '64px', lineHeight: 1, color: 'var(--gold)', letterSpacing: '-0.02em' }}>{s.value}</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-quiet)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <p className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '48px' }}>{section.body}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {section.learnings && section.learnings.map((l, i) => (
              <div key={i} className="reveal d2" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '24px', padding: '32px', background: 'var(--bg-2)', border: '1px solid var(--rule-soft)' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '32px', color: 'var(--gold)', lineHeight: 1 }}>{l.num}</p>
                <div>
                  <p style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: '16px', color: 'var(--cream)', marginBottom: '8px' }}>{l.title}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', lineHeight: 1.8, color: 'var(--ink-dim)' }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function NextProject({ next }) {
  return (
    <section style={{ padding: '100px 0' }}>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-quiet)', marginBottom: '24px' }}>Next Project</p>
      <Link href={`/work/${next.slug}`} style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        paddingBottom: '32px', borderBottom: '1px solid var(--rule-soft)',
        transition: 'opacity .25s',
      }}
        onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
        onMouseOut={e => e.currentTarget.style.opacity = '1'}
      >
        <div>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 72px)', color: 'var(--cream)', lineHeight: 1 }}>{next.title}</p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-quiet)', letterSpacing: '0.08em', marginTop: '8px' }}>{next.subtitle}</p>
        </div>
        <span style={{ fontFamily: 'var(--serif)', fontSize: '48px', color: 'var(--gold)' }}>→</span>
      </Link>
    </section>
  )
}

export async function getStaticPaths() {
  const paths = projects.map(p => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug)
  return { props: { project } }
}
