import React, {useState} from "react";
import "./VClub.css";
import data from "../../data/VoirCData.json";

function VoirClub() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
  <br/><u>
  <h1> <center><span style={{color: '#000000'}}>VOIR LES CLUBS :</span>{' '}</center></h1></u>
      <div className="templateContainer">
        <div className="searchInput_Container">
         
          <input id="searchInput" type="text" placeholder="Saisir le nom du club..." onChange={(event) => {
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
                    <img src={val.image} alt="La photo du club" />
                      <h3>{val.title}</h3>
            
                      <b ><p className="nom"><i>Nom du club :</i>{val.nom}</p></b>
                  </div> 
                )
              })

                  
          }
        </div>
      </div> <br/>
   
    </>
   
  )
}

export default VoirClub;