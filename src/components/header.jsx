import '../styles/header.css'

const Header = () => {
    return ( 
        <div id="container">
            <div>
                <h1 id='heading'> Mess </h1>
            </div>
            <div id='publish'>
                <button onClick={event => window.location.href ='/form.jsx'}> Add Card </button>
            </div>
        </div>
     );
}
 
export default Header;