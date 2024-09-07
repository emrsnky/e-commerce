import './contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactPage() {
  return (
    <div className="container mt-3 mb-5">
      <div className="row d-flex justify-content-center align-items-center">
        <h3 className="text-center my-3 display-2 fw-bold">Bize Ulaşın</h3>
        <div className="col-12 col-md-10 col-lg-8 ">
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
        <div className="col-12 col-md-10 col-lg-8 text-center mt-5 fw-medium">
            <p> <strong>*Aynı</strong> gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar verilen siparişler icin geçerlidir. <br />
            Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.</p>
            <p className='pt-4'>
            Telefon ile <strong>0850 555 55 55</strong>  numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi saat 
           <strong> 09:00-17:00</strong>  arasında dönüş sağlanmaktadır.
            </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
