/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () =>{
    return (<footer>


        <div class="box-container">

            <div class="footer-box">
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt assumenda ratione voluptatem
                    natus itaque odio doloremque neque maiores qui ullam, <br /><br />quisquam laboriosam placeat quos
                    eaque
                    molestias
                    illum sint incidunt.</p>


            </div>


            <div class="footer-box">
                <h4>Latest tweets</h4>
                <p><span class="text-white">@Lorem, ipsum</span> dolor sit amet consectetur adipisicing elit. Commodi
                    sunt assumenda ratione</p> <br />

                <p>voluptatem
                    natus itaque odio doloremque <span class="text-white">@neque maiores qui</span> ullam, quisquam</p>
                <br />
                <p>laboriosam placeat quos
                    eaque
                    <span class="text-white">@molestias</span>
                    illum sint incidunt.</p>


            </div>


            <div class="footer-box">
                <h4>Latest posts</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p><br />

                <p>Elit Commodi
                    sunt assumenda ratione
                    voluptatem</p><br />

                <p>natus itaque odio doloremque neque maiores</p><br />


                <p>qui ullam, quisquam laboriosam
                    placeat quos eaque
                    molestias
                    illum sint incidunt.</p>


            </div>



            <div class="footer-box">
                <h4>flickr</h4>
                <div class="flicker-box">






                    <div class="flbox"><img src="https://source.unsplash.com/random/200x200" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/201x201" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/202x202" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/203x203" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/204x204" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/205x205" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/206x206" alt=""/></div>
                    <div class="flbox"><img src="https://source.unsplash.com/random/207x207" alt=""/></div>

                </div>

            </div>

        </div>


        <div class="bottom-box">

            <div class="social-box">

                <p>
                    Copyright&copy; 2003-2012 ventus inc. all rights reserved.

                </p>
                <div class="social-container">

                    <a href="#" class="tooltip"> <i class="fab fa-twitter-square"> <span
                                class="hover-text">Twitter</span> </i></a>
                    <a href="#" class="tooltip"> <i class="fab fa-facebook-square"><span
                                class="hover-text">Facebook</span></i></a>
                    <a href="#" class="tooltip"> <i class="fab fa-vimeo-square"><span
                                class="hover-text">Vimeo</span></i></a>
                    <a href="#" class="tooltip"> <i class="fab fa-pinterest-square"><span
                                class="hover-text">Pinterest</span></i></a>
                    <a href="#" class="tooltip"> <i class="fab fa-twitter-square"><span
                                class="hover-text">Twitter</span></i></a>
                    <a href="#" class="tooltip"> <i class="fab fa-facebook-square"><span
                                class="hover-text">Facebook</span></i></a>


                </div>

            </div>

            <a href="#top"><i id="up-icon" class="fas fa-arrow-circle-up"></i></a>


        </div>



    </footer>)
    }

export default Footer;