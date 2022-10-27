import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(false)

  useEffect(()=> {
    setLoad(true)
  }, [])

  if (load) return;

  return <Component {...pageProps} />;
}

export default MyApp;