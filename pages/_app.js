import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/fontawesome.css'
import NextNprogress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  return(
      <>
        <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />

        <Component {...pageProps} />
      </>
      )

}

export default MyApp
