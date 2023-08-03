import { Link }
from "react-router-dom"

const Header = () => {
  return (
   <header>
    <Link to="/">
    <h1>e-commerce</h1>
    </Link>
    <nav>
        <ul>
            <li>Login</li>
        </ul>
    </nav>
   </header>
  )
}

export default Header