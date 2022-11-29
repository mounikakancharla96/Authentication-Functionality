import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-lists">
    <li className="header-item">
      <Link to="/">Home</Link>
    </li>
    <li className="header-item">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
