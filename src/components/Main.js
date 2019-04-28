import React from 'react';

const Main = () => {
    
    return (
        <div class="box-container">
        <div class="main-box">
            <span class="dot"> <i class="fas fa-mobile-alt"></i></span>
            <h2>Superbly <span class="text-thin">Responsive</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ab architecto! Neque labore
                eius
                impedit nemo sed, placeat nesciunt nulla.</p>
            <button class="btn-read">Read more</button>
        </div>


        <div class="main-box">
            <span class="dot"><i class="fas fa-desktop"></i></span>
            <h2>Squeeky <span class="text-thin">Clean</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ab architecto! Neque labore eius impedit nemo sed, placeat nesciunt nulla.</p>
            <button class="btn-read">Read more</button>
        </div>

        <div class="main-box">
            <span class="dot"><i class="fas fa-laptop"></i></span>
            <h2>Multi <span class="text-thin">Purpose</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ab architecto! Neque labore eius impedit nemo sed, placeat nesciunt nulla.</p>
            <button class="btn-read">Read more</button>
        </div>

        <div class="main-box">
            <span class="dot"><i class="fab fa-rev"></i></span>
            <h2>Highly <span class="text-thin">flexible</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ab architecto! Neque labore eius impedit nemo sed, placeat nesciunt nulla.</p>
            <button class="btn-read">Read more</button>
        </div>


    </div>



    <div class="grid-container"> 
    
    <div class="bg-pattern" />
            <h3>Recent Work</h3>
        </div>


        <div class="blog-box">
            <img src="./assets/img/img-placeholder.png" />
            <h3>Blog Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et vitae nobis, eligendi dolores
                blanditiis.</p>
        </div>


        <div class="blog-box">
            <img src="./assets/img/img-placeholder.png"/>
            <h3>Blog Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et vitae nobis, eligendi dolores
                blanditiis.</p>
        </div>


        <div class="blog-box">
            <img src="./assets/img/img-placeholder.png"/>
            <h3>Blog Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et vitae nobis, eligendi dolores
                blanditiis.</p>
        </div>

        <div class="bg-pattern-testimonial">
            <h3>Testimonials</h3>
        </div>

        <div class="bg-pattern-development">
            <h3>Development</h3>
        </div>


        <div class="testimonial-box1a">
            <h3>John Smith</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla eaque perspiciatis modi
                expedita autem! At animi reprehenderit voluptatum doloribus!</p>
        </div>

        <div class="testimonial-box1b">
            <h3>John Smith</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla eaque perspiciatis modi
                expedita autem! At animi reprehenderit voluptatum doloribus!</p>
        </div>

        <div class="testimonial-box2a">
            <h3>John Smith</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla eaque perspiciatis modi
                expedita autem! At animi reprehenderit voluptatum doloribus!</p>
        </div>

        <div class="testimonial-box2b">
            <h3>John Smith</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla eaque perspiciatis modi
                expedita autem! At animi reprehenderit voluptatum doloribus!</p>
        </div>


        <div class="development-box1a">

            <div class="tabbed">
                <input checked="checked" id="tab1" type="radio" name="tabs" />
                <input id="tab2" type="radio" name="tabs" />


                <nav>
                    <label for="tab1">Design</label>
                    <label for="tab2">Production</label>

                </nav>

                <figure>
                    <div class="tab1">
                        <h3>The Design</h3>



                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione sed debitis magni cumque aspernatur quo consectetur explicabo!</p>


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reprehenderit!</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione sed debitis magni cumque aspernatur quo consectetur explicabo!</p>


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reprehenderit!</p>


                    </div>
                    <div class="tab2">
                        <h3>The Production</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur repudiandae iusto molestias temporibus aut nesciunt harum blanditiis!</p>


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, incidunt?</p>
                    </div>



                </figure>
                <div class="block"></div>
            </div>
            <button class="btn-read">Read more</button></div></div>

<div class="foreground-box">

        <p>Get in touch with us <span class="text-thick-italic">now!</span></p> <button class="btn-white">Contact
            us</button>

    </div>)
    }


    export default Main;