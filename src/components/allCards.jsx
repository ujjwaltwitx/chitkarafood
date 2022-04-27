import React from "react";
import getData from "../Utilites/firbase"
import Card from "./card"

class AllCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [], allCards: [] };
    }
    componentDidMount() {
        getData().then((val) => this.setState({ cards: val }));
    }
    componentDidUpdate() {
        for (let index = 0; index < this.state.cards.length; index++) {
            let curEle = this.state.cards[index]
            this.state.allCards.push(<Card key={index} hostel={curEle.hostel} cardNum={curEle.cardNo} rollNo={curEle.rollNo} mobNo={curEle.mob} />);
        }
    }
    render() {
        return (
            <div>
                {this.state.allCards}
            </div>
        );
    }
}

export default AllCards;