import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Propos from './components/pages/Propos';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import './App.css';
import ClubV from './components/Club/ClubV';
import Etabli from './components/Etablissement/Etabli';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyParagraph from './components/PageDescrip/DescEmsi';


function App() {
  return (
    <div className='backgrnd'>
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/propos' component={Propos} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/ClubV' component={ClubV} />
        <Route path='/Etabli' component={Etabli} />
        <Route path="/route/to/new/page/:id" component={MyParagraph} />
      </Switch>
    </Router>
    </>
    </div>
  );
}

export default App;
