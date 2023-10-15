import "@styles/globals.css"
import { ContextProvider } from "@components/Context"
import Layout from "@components/Layout"

function Application({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default Application
