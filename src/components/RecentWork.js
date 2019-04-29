import React from 'react';
import placeholderImage from '../assets/img/img-placeholder.png';


const RecentWork = () => {
    return (<div className="grid-container" > 
    
    <div className="bg-pattern">
            <h3>Recent Work</h3>
        </div>


        <div class="blog-box">
            <img src={placeholderImage} />
            <h3>Blog Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et vitae nobis, eligendi dolores
                blanditiis.</p>
        </div>


        <div class="blog-box">
        <img src={placeholderImage} />
            <h3>Blog Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et vitae nobis, eligendi dolores
                blanditiis.</p>
        </div>


        <div class="blog-box">
            <img src={placeholderImage} />
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
          
            <button class="btn-read">Read more</button></div>
        
    </div>);
}

export default RecentWork;