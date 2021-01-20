import React from 'react'
import { useSelector } from 'react-redux'

const imageDefault = "https://www.pngkit.com/png/detail/99-990368_coffee-smiley-emoji-drinking-coffee.png";

export default function SelectedDrink() {
    const drinkItem = useSelector(state => state.drinks.drinkItem)
    return (
        <div className="selected-drink">
            <img 
            className="selected-drink__image selected-drink__image--active" 
            src={drinkItem ? drinkItem.image : imageDefault }
            alt="empty"
        />
        </div>
    )
}