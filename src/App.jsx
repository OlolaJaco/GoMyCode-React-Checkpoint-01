import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container} from "react-bootstrap";
import Name from './Name.jsx';
import Price from './Price.jsx';
import Description from './Description.jsx';
import Image from './image.jsx';
import './App.css';

const firstName = "Olola Jaco";

function App() {

  return (
    <Container>
      <Card style={{width: "18rem", border: "1px solid black"}}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <p>
        {firstName ? `Hello, ${firstName}!` : <h2>Hello, there!</h2>}
        {firstName && (
          <img 
            src='Olola Jaco Profile - Smaller and Resized.jpg'
            alt='profile picture'
          />
        )}
      </p>
    </Container>
  )
}

export default App;
