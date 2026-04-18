import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import WorkGrid from '../components/home/WorkGrid'
import Contact from '../components/home/Contact'
import { projects } from '../data/projects'

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    requestAnimationFrame(() => {
      const hero = document.querySelector('.hero')
      if (hero) hero.classList.add('in')
    })

    return () => io.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Fajri — Freelance Creative Designer</title>
        <meta name="description" content="UI/UX, Branding, Web — Fajri, creative designer based in Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <WorkGrid projects={projects} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
