import React from 'react';
import Link from '../Link';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href='/' className='item'>
                Home
            </Link>
            <Link href='/index' className='item'>
                New Game
            </Link>
            <Link href='/savedGames' className='item'>
                Saved Games
            </Link>
        </div>
    );
};

export default Header;