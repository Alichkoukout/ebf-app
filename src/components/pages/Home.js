import React from 'react';
import ImageSlider from '../Slide';
import { SliderData } from '../../data/slideData';
import Cards from '../Cards';
import '../../App.css';
import Footer from './FooterH';

function App() {
  return (
    <div className='backgrnd'>
    <>
      <ImageSlider slides={SliderData} />
      <Cards />
      <Footer />
    </>
    </div>
  );
}
export default App;
