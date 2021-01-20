import React from 'react'
import { useDispatch } from 'react-redux'
import { getDrinkItem } from '../../store/drinks'

export default function Drink({ drink }) {
    const dispatch = useDispatch()

    return (
    <div className="drink" onClick={() => dispatch(getDrinkItem(drink.id))}>
        <img className="drink__image drink__image--default" src={drink.image} alt={drink.description}/>
        <h3 className="drink__description">{drink.description}</h3>
    </div>
    )
}