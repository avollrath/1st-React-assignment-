import React from 'react';
import Feature from './Feature';


const Features = () => {
    return (   <div class="box-container">
                <Feature 
                icon = 'fas fa-mobile-alt'
                wordOne = 'Superbly'
                wordTwo = 'Responsive'
                />
        
                <Feature 
                icon = 'fas fa-desktop'
                wordOne = 'Squeeky'
                wordTwo = 'Clean'
                />
        
                <Feature 
                icon = 'fas fa-laptop'
                wordOne = 'Multi'
                wordTwo = 'Purpose'
                />
        
                <Feature 
                icon = 'fas fa-sync'
                wordOne = 'Highly'
                wordTwo = 'Flexible'
                />
        
    </div>);
}

export default Features;