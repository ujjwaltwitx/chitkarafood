import { useState } from 'react';
import '../styles/card.css'

const Card = () => {
    var [hostel, hostelName] = useState();
    var [numb, cardNumber] = useState();
    var [price, cardPrice] = useState(); 
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