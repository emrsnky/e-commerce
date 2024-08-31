import { Accordion } from "react-bootstrap";


const faqItems = [
    {
      header: "Şimdi sipariş versem ne zaman elime ulasır? ",
      body: "Haftaiçi 16:00, Cumartesi günü ise saat 11:00'e kadar verilen siparişler aynı gün Kolay Gelsin veya Hepsijet kargoya teslim edilir. Türkiye'nin %90'ına ertesi gün ulaşır.",
    },
    {
      header: "Haftasonu verilen siparişler hangi gün kargolanır?",
      body: "Cumartesi 11:00'den sonra verdiğiniz siparişler ilk iş günü olan Pazartesi günü kargoya verilir.",
    },
    {
      header: "Kargo ücreti var mı?",
      body: "100 TL ve üzeri alışverişlerinizde kargo ücretsizdir.",
    },
    {
      header: "Yurtdışına kargo hizmetiniz var mı?",
      body: " Yalnızca Türkiye sınırları içerisine teslimatımız vardır.",
    },
    
    
    
  ];
export default function Shipping() {
  return (
   <>
   <Accordion>
        {faqItems.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header className="fw-bold">
              {item.header}
            </Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
   
   </>
  )
}