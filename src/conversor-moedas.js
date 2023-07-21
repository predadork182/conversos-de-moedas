import './conversor-moedas.css';
import { Container, Row, Col, Button, Form, Spinner, Alert, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  
  return (
    <> 
    <Container>
      <Row>
          <h2 style={{textAlign: 'center', marginTop: '15px', marginBottom:'15px'}}>Conversor Moedas</h2>
          <Alert variant="danger" show={false}>
             Obtendo dados de conversão, tente novamente.
          </Alert>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col sm="3">
                <Form.Control placeholder="0" value={1} required/>
              </Col>
              <Col sm="3">
                <Form.Control as="select">

                </Form.Control>
              </Col>
              <Col sm="1" className='text-center' style={{marginTop: '5px'}}>
                 <FontAwesomeIcon icon={faAngleDoubleRight}/>
              </Col>
              <Col sm="3">
                <Form.Control as="select">
                  
                </Form.Control>
              </Col>
              <Col sm="2">
                <Button variant='success' type='submit'>
                  <Spinner animation='border' size='sm'></Spinner>
                   Converter
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Modal show={false}>
        <Modal.Header closeButton>
          <Modal.Title>Conversão</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Nova conversão</Button>
        </Modal.Footer>
      </Modal>
    </Container> 
    </>
  )
}

export default ConversorMoedas;
