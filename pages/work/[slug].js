import Head from 'next/head'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CaseHero from '../../components/casestudy/CaseHero'
import CaseSection from '../../components/casestudy/CaseSection'
import { projects, getProjectBySlug } from '../../data/projects'

export default function CaseStudy({ project }) {
  if (!project) return null

  const styles = {
    description: {
      padding: '64px 48px',
      borderBottom: '1px solid #2e2b24',
    },
    descText: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 'clamp(22px, 3vw, 32px)',
      lineHeight: 1.5,
      color: '#f0e6d2',
      maxWidth: '700px',
    },
  }

  return (
    <>
      <Head>
        <title>{project.title} — Fajri Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navbar />
      <main>
        <CaseHero project={project} />

        <div style={styles.description}>
          <p style={styles.descText}>{project.description}</p>
        </div>

        {project.sections.map((section, i) => (
          <CaseSection key={i} section={section} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug)
  return { props: { project } }
}
