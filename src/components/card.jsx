import '../styles/card.css'
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
                <p> {props.rollNo}</p>
            </div>
            <div className="cardPay">
                <p>{props.mobNo}</p>
            </div>
        </div>
     );
}
 
export default Card;