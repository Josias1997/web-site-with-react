import React from 'react';
import HeroBlock from 'components/commons/lightweight/HeroBlock';
import PriceCard from 'components/commons/heavy/PriceCard';
import bodyContent from 'mocks/PriceCards';


class Body extends React.Component {
    constructor(props) {
        super(props);
        const {priceCards, heroBlock} = bodyContent;
        this.state = {
            priceCards: priceCards,
            heroBlock: heroBlock
        }
    }

    render() {
        const {priceCards, heroBlock} = this.state;
        return (
            <div>
                <HeroBlock title = {heroBlock.title} 
                    content = {heroBlock.content}
                />
                <div  className = "card-deck mb-3 text-center">
                    {
                        priceCards.map((priceCard, index) => (
                            <PriceCard key = {index}
                                title = {priceCard.title}
                                price = {priceCard.price}
                                unity = {priceCard.unity}
                                items = {priceCard.items}
                                buttonValue = {priceCard.buttonValue}
                                buttonStyle = {(index === 0) ? "btn btn-lg btn-block btn-outline-primary": "btn btn-lg btn-block btn-primary"}
                            />
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

export default Body;