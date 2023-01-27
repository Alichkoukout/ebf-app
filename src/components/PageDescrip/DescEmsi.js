import React from 'react';
import "../PageDescrip/Description.css"
import emsi from "../../images/emsi.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBr from './Nav';



function MyParagraph() {
  return (
    <>
    <NavbarBr/>
    
    <div className="bordered-paragraph">

         <u><h1 className='title'>L'École Marocaine des Sciences de l’ingénieure</h1><br/></u>

        <img className='img-desc' src={emsi} width="180px"></img>
        <br/>

        &nbsp;&nbsp;&nbsp;<h2 className='semi-title'>EMSI EN CHIFFRES:</h2>
        <h2 className='semi-title2'>INFORMATIONS:</h2>

        <br/><br/>
        
        <div className="bordered-paragraph2">     
    <p className='parag'>L'École Marocaine des Sciences de l'ingénieure, EMSI, est un établissement d'enseignement supérieur privé fondé en 1986, par un groupe d'enseignants universitaires pour former des élèves dans les domaines de 
     l'ingénierie, des nouvelles technologies et des télécoms au Maroc.
     L'École Marocaine des Sciences de l’Ingénieur est reconnue par l’état et est membre du réseau Honoris United Universities avec l'université Mundiapolis et l'EAC.
     En 2019, l'EMSI comptait plus de 4 500 élèves en formation dans tout le royaume, répartis sur 14 sites, et plus de 300 professeurs intervenants.</p>
     </div>
        <div className='pa3'>
           <h4><b>Nom d'etablissement :</b></h4><h5>L'École Marocaine des Sciences de l'ingénieure</h5>
           <h4><b>Address :</b></h4><h5>05 lot bouizgaren, Rte de Safi, Marrakech 40000</h5>
           <h4><b>Site web :</b></h4><h5>https://www.emsi.ma/</h5>
           <h4><b>Téléphone :</b></h4><h5>05244-22222</h5>

        </div>
   
    </div>
    </>
  );
}

export default MyParagraph;