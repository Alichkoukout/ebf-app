import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import "../pages/contact.css";
import dtfL from '../../images/dtfL.jpg';
export default function Delivery() {
  return (
    <>
      <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px' }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-gris">Bienvenue</MDBTypography>
            </div>
            <img src={dtfL} width="168px" height="188px" />
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >CONTACTEZ-NOUS :</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Nom' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                       label='Prenom' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Ville' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Sujet' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    
                    <MDBCol>
                      <MDBInput label='Message' type='message' />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#7FBCD2'}}>Se Connecter</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}