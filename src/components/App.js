import React from 'react';
import States from './States';
import License from '../assets/license_plates.jpg';
import '../styles.css';
import Header from './Header'

const App = () => {
    return (
        <div className= "ui container">
            <Header />
            <div className='title'>License Plate Game</div>
             <img src={License} className="license" id="icon" alt="User Icon"></img>
             <States />
        </div>          
    ); 
};

export default App;