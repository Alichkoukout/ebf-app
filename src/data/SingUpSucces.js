import React from 'react';
import '../components/pages/SignUp.css';
import imgright from '.././svg/img-3.svg';
const FormSuccess = () => {
  return (
    <>
    <div className='form-content-right'>
      <h1 className='form-success'>Nous avons reçu votre demande!</h1>
      <img className='form-img-2' src={imgright} alt='success-image' />
    </div>
    </>
  );
};

export default FormSuccess;
