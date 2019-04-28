import React from 'react';

import HeaderImage from '../assets/img/header-img.png';



const Header = () => {
    return (
        <header>

        <div class="header-box1">
            <div class="left-box">
            <img src={HeaderImage} alt="main header" /></div>


            <div class="right-box">
                <h1>Powerfully Simple <span class="text-thin">&nbsp;with a</span><br />squeeky clean <span
                        class="text-thin">
                        &nbsp;design.</span></h1>
                <p>Find out how you can offer quick and powerful<br /> solutions to your customers now</p>
                <button class="btn-blue">
                    Learn more
                </button>
            </div>

        </div>


        <div class="header-box2">




            <div class="foreground-box shadow-top">


                <p>Create a <span class="text-thick-italic">Powerfull</span> solution now</p>

                <button class="btn-white">Get started</button>

            </div>


        </div>




        <div class="bg-pattern"></div>

    </header>)
    }

    export default Header;