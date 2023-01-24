import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Connexion</button>
    </Link>
  );
}
