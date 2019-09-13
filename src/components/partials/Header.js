import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="col-12 center-text">
        <Link to='/'><h1>To Do List</h1></Link>
    </div>
);

export default Header;