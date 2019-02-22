import React, {useState} from 'react';
import SimpleCard from 'components/commons/heavy/SimpleCard';
import Icon from 'components/commons/lightweight/Icon';
import cardsContent from 'mocks/Card.js';

const Footer = props => {
    const [items, setItems] = useState({
        cards: cardsContent.cards
    })

    return (
        <footer className = "pt-4 my-md-5 pt-md-5 border-top">
            <div className = "row">
                <Icon source = "/docs/4.3/assets/brand/bootstrap-solid.svg"/>
                {
                    items.cards.map((item, index) => (
                        <SimpleCard key = {index} 
                            title = {item.title}
                            elements = {item.elements}
                        />
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer;