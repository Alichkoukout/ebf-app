import React, {useState} from "react";
import "./Etabli.css"
import data from "../../data/EtabliData.json";
import {Link} from 'react-router-dom';
function VoirEtabli() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
  <br/><u>
  <h1> <center><span style={{color: '#000000'}}>DECOUVRIRE LES ETABLISSEMENT :</span>{' '}</center></h1></u>
      <div className="templateContainer">
        <div className="searchInput_Container">
        
          <input id="searchInput" type="text" placeholder="Saisir le nom d'établissement ..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                  return val;
                
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>

                    <img src={val.image} alt="La photo d'établissement" />
                      <h4>{val.title}</h4>
                       <Link to={`/route/to/new/page/${val.id}`}>
                      <b ><button className="btnn"><i></i>{val.nom}</button></b>
                      </Link>
                  </div> 
                )
              })

                  
          }
        </div>
      </div> <br/>
   
    </>
   
  )
}

export default VoirEtabli;