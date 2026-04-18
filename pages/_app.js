import '../styles/globals.css'
import '../styles/components.css'
import CustomCursor from '../components/layout/CustomCursor'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}
