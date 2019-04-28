import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

const App = () => {
    return <div>
    <Header />
    <Main />
    <Footer year = {new Date().getFullYear()}/>
    </div>
    }


    export default App;