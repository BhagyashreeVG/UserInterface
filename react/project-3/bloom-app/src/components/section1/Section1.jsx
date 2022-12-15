import React from 'react'
import './Section1.css';
import image from '../../images/card-image.jpg';
import Button from '../button/Button';

export default function Section1() {
  return (
    <div class="section-1-main">
        <div class="section-1-content">
            <h2>This is longgggggggggggg heading</h2>
            <div class="section-1-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse alias cum modi commodi quam sint eum magni, delectus beatae, soluta illo necessitatibus impedit sapiente, fuga ratione quo. Obcaecati, nihil?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse alias cum modi commodi quam sint eum magni, delectus beatae, soluta illo necessitatibus impedit sapiente, fuga ratione quo. Obcaecati, nihil?
            </div>
            <Button/>
        </div>
        <div class="section-1-image">
            <img src={image} />
        </div>
    </div>
  )
}
