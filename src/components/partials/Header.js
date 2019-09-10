import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light'>
        <Link className='navbar-brand' to='/'>Maquina de Turing</Link>       
    </nav>
);

export default Header;