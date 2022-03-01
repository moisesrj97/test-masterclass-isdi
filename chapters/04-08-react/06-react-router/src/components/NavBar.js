import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/details/1'>Details 1</Link>
      <Link to='/details/2'>Details 2</Link>
      <Link to='/details/3'>Details 3</Link>
    </ul>
  );
};

export default NavBar;
