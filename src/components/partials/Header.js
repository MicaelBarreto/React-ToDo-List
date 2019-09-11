import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light '>
        <h1><Link className='navbar-brand' to='/'>To Do List</Link></h1>
    </nav>
);

export default Header;