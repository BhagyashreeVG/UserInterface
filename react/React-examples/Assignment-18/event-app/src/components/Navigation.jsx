import React from 'react'
import './Navigation.css';
import { images } from '../service/images-data';

export default function Navigation() {
  return (
    <nav>
        <div className="left-nav">
            <img src="../../images/piano-icon.svg"/>
            <span>SoundAMP</span>
        </div>
        <div className="right-nav">
            <div>
                <select>
                    <option>HTML Templates</option>
                    <option>React Template</option>
                </select>
            </div>
            <div>
            <select>
                    <option>More HTML Templates</option>
                    <option>More React Template</option>
                </select>
            </div>
            <div>
                <input className="download-btn" type="button" value="Download now"/>
            </div>
            {images.map(icon => <img src={icon.name}/>)}
        </div>
    </nav>
  )
}
