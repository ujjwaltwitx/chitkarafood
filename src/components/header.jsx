import '../styles/header.css'
// import getData from '../Utilites/firbase';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// import AllCards from './allCards';

const Header = () => {
    return (
        <Router>
            <div id="header">
                <h1> Karachit University </h1>
                <div><Link to="/upload">Upload Mess Card</Link></div>
            </div>
        </Router>
    );
}

export default Header;