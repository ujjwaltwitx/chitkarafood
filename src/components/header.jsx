import '../styles/header.css'
import getData from '../Utilites/firbase';
import { Link } from 'react-router-dom';
import AllCards from './allCards';

const Header = () => {
    return ( 
        <div id="header">
            <h1> Humara University </h1>
            <div><Link to="/upload">Upload Mess Card</Link></div>
            <button onClick={<AllCards />}> Click </button>
        </div>
     );
}
 
export default Header;