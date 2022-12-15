import React from 'react'
import Section2Article from '../section2-article/Section2Article';
import './Section2.css';

export default function section2() {
  return (
      <div className="section-2-main">
        <h2 class="section-2-head">This is main heading</h2>
        <div class="section-2-content">
            <Section2Article/>
            <Section2Article/>
            <Section2Article/>
        </div>
    </div>
  )
}
