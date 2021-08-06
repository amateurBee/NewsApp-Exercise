import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import { Card } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'

//maintain state in react component
class Directory extends React.Component {

  constructor(){

    super();
    this.state = {
        
        userName: 'Bee'
          
    }
}





    render() {

        return (
            <Navbar>
            <Container>
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
               <Navbar.Text>
                Signed in as: {this.state.userName}
                 </Navbar.Text>
               
                
              </Navbar.Collapse>
            </Container>
          
          </Navbar>
        

          
        );
    }
}


export default Directory;
