import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light'>
        <Link className='navbar-brand' to='/'>To Do List</Link>       
    </nav>
);

export default Header;