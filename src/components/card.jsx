import '../styles/card.css'
// var hostel = null;
// var numb = null;
// var price = null;
const Card = (props) => {
    return (
        <div className="cardWrapper">
            <div className="cardHostel">
                <p> {props.hostel} </p>
            </div>
            <div className="cardNumber">
                <p> {props.cardNum}</p>
            </div>
            <div className="cardPrice">
                <p> { "Rs. " + props.price}</p>
            </div>
            <div className="cardPay">
                <div>Pay</div>
            </div>
        </div>
     );
}
 
export default Card;