
import './App.css'
import Array from "./Array.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
 

  return (
    < div style={{margin:"5rem"}}>
<Navbar bg="primary" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home">Normal Table</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      Signed in as: <a href="#login">Sudipta Dhawya</a>
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
      </Navbar>


      
       <h1>Table creations by react-BootStrap </h1>
       <table  class="table table-hover" size={"sm"}>
        <thead>
          <tr>
            <th>
             NAME
            </th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
             {Array.map((item)=>{
              return(
                <tr>
                   <td>{item.name}</td>
                   <td>{item.age}</td>
                   <td><button variant="info">UPDATE</button></td>
                   <td><button variant="danger">DELATE</button></td>


                </tr>
              );

             }

             )}

        </tbody>


       </table>
       <Button variant="warning" size="lg">
                    Create
                </Button> 
    
    </div>
  )
}

export default App
