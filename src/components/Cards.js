import React from 'react';
import './Cards.css';
import img1 from '../images/img-1.jpg';
import img4 from '../images/img-4.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import CardItem from '../data/CardsData';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    
    <div className='cards'>
      <h1>DIGITAL TALENT FACTORY</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Ajouter un établissement'
              label='Ajouter'
              path='/'
            />
            <CardItem
              src={img4}
              text='Découvrire les établissements disponibles'
              label='Découvrire'
              path='/Etabli'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Ajouter un club'
              label='Ajouter'
              path='/propos'
            />
            <CardItem
              src={img3}
              text='Découvrire les clubs disponibles'
              label='Découvrire'
              path='/ClubV'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;