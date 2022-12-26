import React from 'react'
import './Card.css';
import { cardDetails } from '../service/card-data';

function Card({data}) {
  return (
    <div className="card">
        <img src={data.image}/>
        <div>
            {data.date}
        </div>
        <h3>
            {data.headline}
        </h3>
        <div>
            {data.tags}
        </div>
        <div>
            {data.content}
        </div>
        <div class="see-more-div">
            <input className="see-more-btn" type="button" value="See more"/>
        </div>
    </div>
  )
}

export default Card