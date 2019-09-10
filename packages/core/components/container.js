import { AuthProvider } from 'react-use-auth'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import theme from '@amherst/design/themes/default'
import { ThemeProvider } from '@material-ui/styles'

export default ({ Component, pageProps, wrapper, wrapperProps = {} }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  const Wrapper = wrapper || Fragment

  return (
    <AuthProvider
      auth0_domain={process.env.AUTH0_DOMAIN}
      auth0_client_id={process.env.AUTH0_CLIENT_ID}
      auth0_params={{
        audience: process.env.AUTH0_AUDIENCE,
      }}
      navigate={Router.replace}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <title>World</title>
        </Head>
        <CssBaseline />
        <Wrapper {...wrapperProps}>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </AuthProvider>
  )
}
