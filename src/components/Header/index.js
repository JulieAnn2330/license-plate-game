import React from 'react';
import Link from '../Link';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href='/' className='item' className='nav'>
                Home
            </Link>
            <Link href='/newGame' className='item' className='nav'>
                New Game
            </Link>
            <Link href='/savedGames' className='item' className='nav'>
                Saved Games
            </Link>
        </div>
    );
};

export default Header;