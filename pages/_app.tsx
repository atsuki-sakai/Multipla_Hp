import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "@components/common"
import { UIProvider, CanPlayMovieProvider } from "@components/context"

function MyApp({ Component, pageProps }: AppProps) {

  return  <UIProvider>
            <CanPlayMovieProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CanPlayMovieProvider>
          </UIProvider>
}

export default MyApp
