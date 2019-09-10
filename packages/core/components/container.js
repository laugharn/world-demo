import CssBaseline from '@material-ui/core/CssBaseline'
import { Fragment, useEffect } from 'react'
import Head from 'next/head'
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
    <ThemeProvider theme={theme}>
      <Head>
        <title>World</title>
      </Head>
      <CssBaseline />
      <Wrapper {...wrapperProps}>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  )
}
