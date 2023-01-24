import React from 'react';
import logodtf from '../../images/logodtf.png';
import './Propos.css';
import Footer from '../../data/Footer';
import { proposData } from '../../data/proposData';

function Propos() {


  return (
    <div className="about" id="about" >
      <div className="line-styling">
        <div className="style-circle" ></div>
        <div className="style-circle"></div>
        <div className="style-line" ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2>{proposData.title}</h2>
          <p>{proposData.description1}<br /><br />{proposData.description2}
            <br /><br />{proposData.description3}<br /><br />{proposData.description4}</p><br /><br />
        </div>
        <div className="about-img">
          <img
            src={logodtf}
            alt="logo img"
          />
        </div>
      </div>
      <center><Footer /></center>
    </div>
  );
}

export default Propos


