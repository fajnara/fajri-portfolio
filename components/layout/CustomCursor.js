import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    if (!dot) return

    const onMove = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      dot.classList.add('on')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div className="cursor-dot" />
}
