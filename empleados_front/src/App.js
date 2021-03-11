import { Form ,Button, Container} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <Container>
   <Login />
   
</Container>
    </div>
  );
}

export default App;
