import '../styles/card.css'

var hostel = null;
var numb = null;
var price = null;
const Card = () => {
    return ( 
        
        <div className="cardWrapper">
            <div className="cardHostel">
                <p> {hostel}hostelName </p>
            </div>
            <div className="cardNumber">
                <p> {numb}Number </p>
            </div>
            <div className="cardPrice">
                <p> {price}Price </p>
            </div>
            <div className="cardPay">
                <button> Pay </button>
            </div>
        </div>
     );
}
 
export default Card;