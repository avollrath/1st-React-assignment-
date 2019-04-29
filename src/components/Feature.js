import React from 'react';


const Feature = (props) => {
    return (
    <div class="main-box">
        <span class="dot"> <i class={props.icon}></i></span>
        <h2>{props.wordOne} <span class="text-thin">{props.wordTwo}</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ab architecto! Neque labore
            eius
            impedit nemo sed, placeat nesciunt nulla.</p>
        <button class="btn-read">Read more</button>
    </div>);
}

export default Feature;