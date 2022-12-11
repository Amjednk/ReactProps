import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import Navigation from './Components/Navigation';
import LoginForm from './Components/LoginForm';
import Profile from './Components/Profile/Profile';
import Myphoto from './Components/Profile/Myphoto.png';
import handleName from './Components/Profile/handleName';
import FullName from './Components/Profile/FullName';
import Button from 'react-bootstrap/Button';


function App() {
  const styleObject = {textAlign: "center"};
  return (
    <div>
      <Navigation />
      <div className = "position1">
        <LoginForm /> 
      </div>
      <div style = {styleObject}>
        <Profile fullName = {FullName()} bio="Consultancy services in Digital Transformation and Operations Management" 
          profession = "Business Consultant" myPic={Myphoto} />
        <Button variant="primary" type="submit" onClick={() => handleName(FullName())}>User Check</Button> 
      </div>
    </div>
  );
}

export default App;
