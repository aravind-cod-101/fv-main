import React from 'react'
import '../css/card.css'

const CardComponent = () => {
    return (
        <div>
            <div className="card">
                        <div className="card__side card__side--front card__side--front-2">
                         <div className="card__image--2 card__image">
                          &nbsp;
                         </div>
                          <h2  className="card__head">Hello</h2>
                         <h3>
                           
                         </h3>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                         back
                        </div>
                    </div>
        </div>
    )
}

export default CardComponent
