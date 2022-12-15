import React from 'react'
import './Content.css';
import Header from './Header';
import Footer from './Footer';

function Content() {
  return (
    <div className="content-container">
        <div class="card card-1">&lt;nav&gt;</div>
        <div class="card card-2">
            &lt;section&gt;
            <Header/>
            <div className="article"> &lt;article&gt;</div>
            <Footer/>
        </div>
        <div class="card card-3">&lt;aside&gt;</div>
    </div>
  )
}

export default Content