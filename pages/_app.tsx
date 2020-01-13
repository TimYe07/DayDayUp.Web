import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import AppStatusContainer from '../store/AppProvider'
import { AppStatus } from '../store/AppStatus'

const appStatus: AppStatus = {
  isDesktop: true,
  hiddenSidebar: false
}

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Tim'Blog</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppStatusContainer.Provider initialState={appStatus}>
            <Component {...pageProps} />
          </AppStatusContainer.Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
