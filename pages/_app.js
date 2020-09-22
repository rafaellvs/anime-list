import PropTypes from 'prop-types'

import '../styles/antd.less'

const App = ({ Component, pageProps }) =>
  <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default App
