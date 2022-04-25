import '../styles/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div id="header">
            <h1> Humara University </h1>
            <div><Link to="/upload">Upload Mess Card</Link></div>
        </div>
     );
}
 
export default Header;