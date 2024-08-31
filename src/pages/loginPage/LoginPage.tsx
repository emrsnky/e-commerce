import { Button, Form, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";

const OuterDiv = styled.div`

height: 70vh;
margin: auto;
display: flex;
justify-content: center;

`
export default function LoginPage() {
  return (
    

    <OuterDiv>
        <div className="col-10 col-md-8 col-lg-4 mx-auto my-5">
        <Tabs 
        defaultActiveKey={"/login"}
        id="uncontrolled-tab-example"
        className="mb-3 custom-tabs gap-2 " 
        fill
      >
        <Tab eventKey={"/login"} title="Giriş Yap" >
        <Form >
            
            
            <Form.Group className="mb-3  me-3 contact-input-div" controlId="email">
              <Form.Label>E-posta*</Form.Label>
              <Form.Control className='py-3 contact-input' type="email"   id='email' required name="email" />
            </Form.Group>
            <Form.Group className="mb-3 contact-input-div" controlId="password">
            <Form.Label>Şifre*</Form.Label>
              <Form.Control className='py-3 contact-input' type="password"  id='password' required name="password" />
            </Form.Group>
         
          
          
          
            <Button className='px-4 py-3 fw-bold w-100' variant="dark" type="submit">
              Giriş Yap
            </Button>
          
        </Form>
          
        </Tab>
        <Tab eventKey={"/register"} title="Üye Ol">
        <Form >
            
        <div className='d-md-flex d-block'>
              <Form.Group className="mb-3  me-3 contact-input-div" controlId="firstName">
                <Form.Label>Ad*</Form.Label>
                <Form.Control className='py-3 contact-input' type="text"  id='firstName' required />
              </Form.Group>
              <Form.Group className="mb-3 contact-input-div" controlId="lastName">
              <Form.Label>Soyad*</Form.Label>
                <Form.Control className='py-3 contact-input' type="text"  id='lastName' />
              </Form.Group>
            </div>
            <Form.Group className="mb-3  me-3 contact-input-div" controlId="email">
              <Form.Label>E-posta*</Form.Label>
              <Form.Control className='py-3 contact-input' type="email"   id='email' required name="email" />
            </Form.Group>
            <Form.Group className="mb-3 contact-input-div" controlId="password">
            <Form.Label>Şifre*</Form.Label>
              <Form.Control className='py-3 contact-input' type="password"  id='password' required name="password" />
            </Form.Group>
            
         
          
          
          
            <Button className='px-4 py-3 fw-bold w-100' variant="dark" type="submit">
              Üye Ol
            </Button>
          
        </Form>
        </Tab>
        
      </Tabs>
        
          </div>
    </OuterDiv>
   
   )
}
