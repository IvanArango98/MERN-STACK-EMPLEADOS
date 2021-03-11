import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/router/router'
import TopMenu from './components/navbar/navbar';
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Container>
      <TopMenu/>
   <AppRouter />
   
</Container>
    </div>
  );
}

export default App;
