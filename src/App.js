import React, { useState } from 'react';
import Route from './components/Route';
import License from './assets/license_plates.jpg';
import './styles.css';
import Header from './components/Header'
import NewGame from './components/NewGame';
import SavedGames from './components/SavedGames';

const options = [
    {
        label: 'Fix This',
        value: 'Fix This'
    },
    {
        label: 'Saved Games',
        value: 'Saved Games'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    
    return (
        <div className= "ui container">
            <div>
            <Header />
            <div className='title'>License Plate Game</div>
            <Route path='/newGame'>
                <NewGame />
            </Route>
            <Route path='/savedGames'>
                <SavedGames
                label='Choose a Saved Game'
                options={options}
                selected={selected}
                onSelectedChange={setSelected} />
            </Route>
            </div>
            <img src={License} className="license" id="icon" alt="User Icon"></img>
            </div>
             
                  
    ); 
};