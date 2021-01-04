import React, { Component, } from 'react';
import {
  Dropdown, Container, Row, Col, Figure, Carousel, Breadcrumb, ListGroup, Jumbotron, Button, Form, Modal
} from 'react-bootstrap';



class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <Container fluid >
          <Row style={{ marginTop: "5px", marginLeft: "-15px", marginRight: "-15px", backgroundColor: "black" }}>
            <Col>
              <Dropdown>
                <Dropdown.Toggle>Pilih Bahasa</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Bahasa</Dropdown.Item>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={{ offset: "9" }}>
              <Figure>
                <Figure.Image style={{ marginLeft: "20px" }} width={30} height={30} src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />
                <Figure.Caption style={{ color: "white" }}>Alan Saputra</Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: "4", offset: "8" }}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br />
          <Row >
            <Col md={{ span: "6", offset: "3" }}>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 " height={400} width={600}
                    src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                    alt="Neymar PSG" />
                  <Carousel.Caption>
                    <h3>Neymar dan Paris Saint-Germain</h3>
                    <p>Berikut penjelasan Neymar mengenai kontrak dengan Paris Saint-Germain (PSG)</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100 " height={400} width={600}
                    src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                    alt="England FC" />
                  <Carousel.Caption>
                    <h3>Selebrasi Tim Inggris Vs Montenegro</h3>
                    <p>Berikut berita tentang menangnya tim sepak bola Inggris melawan tim sepak bola Montenegro</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100 " height={400} width={600}
                    src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                    alt="Sani Rizki Fauzi" />
                  <Carousel.Caption>
                    <h3>Tanggapan Sani Rizki Fauzi Mengenai Sepak Bola Indonesia</h3>
                    <p>Berikut berita tentang tanggapan pemain tim nasional (timnas) Indonesa U-22 mengenai sepak bola tanah air</p>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Premier</ListGroup.Item>
                <ListGroup.Item>Seri A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundes Liga</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6}>
              <Jumbotron>
                <h1>DIVISI PRIMERA</h1>
                <p>Main Untuk Catalunya, Gerard Pique Minta Di Hormati</p>
                <Button variant="primary">Read More</Button>
              </Jumbotron>
            </Col>
            <Col>
              <center>
                <Figure>
                  <Figure.Image height={60} width={60} src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle />
                  <Figure.Caption>
                    <h5>Silahkan Login</h5>
                  </Figure.Caption>
                </Figure>
              </center>
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Masukkan email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" label="Term & Condition" />
                </Form.Group>

                <Button variant="primary" onClick={this.handleLogin}>Login</Button>
              </Form>

              <Modal show={this.state.show} >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Anda Berhasil Login!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleLogin}>
                    Close
                </Button><Button variant="primary" onClick={this.handleLogin}>
                    Save Username & Password
                </Button>
                </Modal.Footer>
              </Modal>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;