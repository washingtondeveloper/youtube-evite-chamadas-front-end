import React from 'react'

import Drink from '../Drink'

export default function Drinks({ drinks }) {
    
    return (
    <div className="drinks">
      {drinks.map(drink => <Drink key={drink.id} drink={drink}/>)}
    </div>
    )
}