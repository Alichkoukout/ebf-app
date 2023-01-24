import React, { useState } from 'react';
import FormSignup from '../../data/SingUpData';
import FormSuccess from '../../data/SingUpSucces';
import imgleft from '../../svg/img-2.svg';
import '../pages/SignUp.css';
import Footer from './FooterH';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={imgleft} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <Footer />
      </>
  );
};

export default Form;
