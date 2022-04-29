import { Link } from 'react-router-dom'

export default function Navbar() {
  return (


        <ul class="menu">
    <li class="menu_list">
        <span className="front fas fa-home"></span>
        <Link to="/" className="side">Home</Link>    </li>
    <li class="menu_list">
        <span className="front fas fa-info"></span>
        <Link to="/about" className='side'>About</Link>
    </li>
    <li class="menu_list">
        <span className="front fas fa-briefcase"></span>
        <Link to="/skills" className="side"> Skills </Link>
    </li>
    <li class="menu_list">
        <span className="front fas fa-briefcase"></span>
        <Link to="/projects" className='side'>Projects</Link>
    </li>
    <li class="menu_list">
        <span class="front fas fa-paper-plane"></span>
        <Link to="/contact" className='side'>Contact</Link>
    </li>
</ul>
  )
}
