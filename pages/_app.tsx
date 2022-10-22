import '../styles/globals.css'
import React, { useEffect } from "react"
import type { AppProps } from 'next/app'
import { Layout } from "@components/common"
import { UIProvider} from "@components/context"
import TagManager from "react-gtm-module"

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: String(process.env.NEXT_PUBLIC_GTM_MANAGER_ID) })
  }, [])

  return  <UIProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UIProvider>
}

export default MyApp
