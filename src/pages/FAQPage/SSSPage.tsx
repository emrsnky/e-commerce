import './ssspage.css';
import General from './General';
import Products from './Products';
import Shipping from './Shipping';

import { Button, Form, Tab, Tabs } from 'react-bootstrap';

export default function SSS() {
  return (
    <div className="container my-5">
      <Tabs 
        defaultActiveKey={"/general"}
        id="uncontrolled-tab-example"
        className="mb-3 custom-tabs" // Use your custom class here
      >
        <Tab eventKey={"/general"} title="Genel">
          <h2>Genel</h2>
          <General />
        </Tab>
        <Tab eventKey={"/products"} title="Ürünler">
          <h2>Ürünler</h2>
          <Products />
        </Tab>
        <Tab eventKey={"/shipping"} title="Kargo">
          <h2>Kargo</h2>
          <Shipping />
        </Tab>
      </Tabs>
      <div className="col-12 col-md-10 col-lg-6 mx-auto my-5">
          <Form>
            <p className='pt-4 pb-2'>Bize aşağıdaki iletişim formundan ulaşabilirsiniz.</p>
            <div className='d-md-flex d-block'>
              <Form.Group className="mb-3  me-3 contact-input-div" controlId="firstName">
                <Form.Control className='py-3 contact-input' type="text" placeholder="isim*" id='firstName' required />
              </Form.Group>
              <Form.Group className="mb-3 contact-input-div" controlId="lastName">
                <Form.Control className='py-3 contact-input' type="text" placeholder="Soyad" id='lastName' />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control className='py-3 contact-input' type="email" placeholder="E-posta" id='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control as="textarea" className='form-control contact-input' placeholder="Mesaj" rows={5} name='message' />
            </Form.Group>
            <div className="d-flex justify-content-center mb-4 pt-3">
              <Button className='px-4 py-3 fw-bold' variant="dark" type="submit">
                GÖNDER
              </Button>
            </div>
          </Form>
        </div>
    </div>
  );
}
