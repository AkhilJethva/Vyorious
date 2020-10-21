import React from 'react';
import Nav from './components/nav';
import './App.css';
import { Button, Container,Grid,Image } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <hr></hr>
        <Nav />
        <hr></hr>
        <div className="app__grid" >
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <div className="grid__text">
              <Grid.Column  mobile={16} tablet={8} computer={6}>
                  <div className="font_orange" ><h4>CONECTING THE DISCONNECTED</h4></div>
                  <div className="oran"><h1><span class="font_orange">Vyorius</span> brings<br></br>
                    unmanned robots<br></br>
                    <span class="font_orange">togather</span>,wherever they
                  </h1></div>
                  <h3> With all of the operations, commanding and <br></br>
                    maintenance tools in one place. unmanned vehicles<br></br>
                    will stay connected and productive no matter where<br></br>
                    you're Deliverring
                  </h3>
                  <Button size="huge" color='orange' >Try Vyorius</Button>
                  <Button basic size="huge" color='orange' content='Learn More' />
                  <h4>Need to order a delivery ? <a href="#">Get Started</a></h4>
              </Grid.Column>
              </div>
              <Grid.Column  mobile={16} tablet={8} computer={10}>
                <div className="grid__image">
                <Image size="big" src='https://thumbnails-visually.netdna-ssl.com/worldmap-worldmap-photos-wallpapers-galleries-full-hd_50290fb555fd4_w1500.jpg' />
                </div>
                <button class="btn btn1">AIR</button>
                <button class="btn btn2">WATER</button>  
                <button class="btn btn3">LAND</button>  
                <button class="btn btn4">INDOOR</button>               
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
      <hr></hr>
    </div>
  );
}

export default App;
