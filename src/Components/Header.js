import { Link } from "react-router-dom";
function Header(){
    return(
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/user/Maddie">Madhavan</Link></li>
            <li><Link to="/user/Dharnish">Dharnish</Link></li> */}
            <li><Link to="/login">Login</Link></li>		
          </ul>
        </nav>
    );
}


export default Header