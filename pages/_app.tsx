import '../styles/globals.css'
import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Layout } from "@components/common"
import { UIProvider} from "@components/context"
import TagManager from "react-gtm-module"

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    TagManager.initialize({ gtmId: String(process.env.NEXT_PUBLIC_GTM_MANAGER_ID) })
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(String(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID)) // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return  <UIProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UIProvider>
}

export default MyApp
