import React from 'react';
import Items from '../lightweight/Items';
import Button from '../lightweight/Button';
import Price from '../lightweight/Price';
import Title from '../lightweight/Title';

const PriceCard = props => {
    const {title, price, unity, items, buttonValue, buttonStyle} = props;
    return (
        <div className = "card mb-4 shadow-sm">
            <Title title = { title }/>
            <div className = "card-body">
                <Price price = {price} unity = {unity}/>
                <Items values = {items} />
                <Button value = {buttonValue} buttonStyle = {buttonStyle}/>
            </div>
        </div>
    );
}

export default PriceCard;