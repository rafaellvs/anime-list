import PropTypes from 'prop-types'

import '../../styles/layout.less'

import NavBar from '../NavBar'

const Layout = ({ children }) =>
  <div className='container'>
    <NavBar />

    <main className='main-content'>
      {children}
    </main>
  </div>

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
