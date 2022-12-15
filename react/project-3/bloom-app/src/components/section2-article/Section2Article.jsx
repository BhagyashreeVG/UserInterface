import React from 'react'
import './Section2Article.css';
import image from '../../images/card-image.jpg'
import Button from '../button/Button';

export default function Section2Article() {
  return (
    <div className="section-2-article-main">
        <div>
            <img src={image}/>
        </div>
        <h2>
            This is heading 2
        </h2>
        <div className="section-2-article-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, exercitationem. Cumque libero error aliquid quod, esse deleniti, voluptate optio et ipsa quam non, illo expedita velit ipsam eos doloremque quos.
        </div>
        <Button/>
    </div>
  )
}
