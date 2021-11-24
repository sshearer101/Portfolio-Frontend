import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </div>
  )
}
