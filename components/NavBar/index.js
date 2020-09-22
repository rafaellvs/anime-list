import Link from 'next/link'

import '../../styles/navbar.less'

const NavBar = () =>
  <nav className='navbar'>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/animes'>Animes</Link>
      </li>
    </ul>
  </nav>

export default NavBar
