import { Accordion } from "react-bootstrap";

const faqItems = [
  {
    header: "OJS Nutrition ürünlerinin menşei neresi?",
    body: "Ürünlerin hammaddeleri ithal olup, paketlenmesi Türkiye'de yapılmaktadır. Proteinocean marka ürünlerin menşei Türkiye'dir.",
  },
  {
    header: "Hangi sertifikalarınız var?",
    body: "Müşterilerimizin daha sağlıklı bir hayat yaşayabilmesi adına kurulmuş ve buna yardımcı olacak ürünleri çıkartmış bir firmayız. Dolayısıyla üretim safhasında da hijyen ve sağlık bizim için en önemli sıradadır. Bunun ışığında ISO 9001, ISO 22000 ve HELAL sertifikalarına sahip bir tesiste üretim yapmaktayız.",
  },
  {
    header: "Satılan ürünler garantili midir? Değişim var mı?",
    body: "Satın aldığınız ürünler açılmamış ise 14 gün içerisinde iade hakkınız mevcuttur. Satılan ürünler gıda olduğu ve açılan ürünün tekrar başkası tarafından kullanılamayacağı için kanun gereği açılan ürünleri iade alamıyoruz. Daha detaylı bilgi için destek@ojs.com adresine mail atmanız durumunda sizlere en kısa sürede dönüş yapılacaktır.",
  },
  {
    header: "Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?",
    body: "Buraya tıklayarak bize mesaj bırakabilirsiniz.",
  },
  {
    header: "OJS Nutrition ürünleri nerede satılıyor?",
    body: "Ürünlerimizi ojsnutrition.com'da ve başlıca büyük alışveriş sitelerinde bulabilirsiniz.",
  },
  {
    header: "Yüksek proteinli ürünleri kimler kullanabilir?",
    body: "15 yaş üstü bireyler kullanabilir. Özellikle spor yapan bireylerin protein ihtiyacı artar ve bu dönemlerde daha yüksek protein tüketmeleri gerekir.",
  },
  {
    header: "Taksit seçeneği neden yok?",
    body: "Yasalar gereği gıda ürünlerine taksit yapılması mümkün değildir. Süpermarketlerde de taksit olmamasının sebebi budur.",
  },
  {
    header: "Siparişimi nasıl iptal edebilirim?",
    body: "Siparişinizi iptal etmek için sipariş numaranızı ve iptal talebinizi belirten mailinizi destek@proteinocean.com adresine iletebilirsiniz. İlgili ekibimiz en kısa sürede sizlere destek olacaktır.",
  },

  {
    header: "Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?",
    body: "Ürünler size açılmadan, kapalı bir şekilde gönderilmektedir. Dış kapağının etrafında açılmadığına dair şeffaf emniyet bandını görebilirsiniz. Kapak altı folyo üretim esnasında ısıl yöntem kullanılarak yapıştırılmaktadır. Bu aşamada herhangi bir kimyasal kullanılmamaktadır. ABD ve Avrupa menşeili birçok markada kapağın altında herhangi bir koruyucu folyo bulunmaması üretim standartları gereği normal bir durumdur. ",
  },
  {
    header: "Sattığınız ürünler ilaç mıdır?",
    body: "İlaç değildir. OJSNUTRITION markalı ürünlerimiz sporcu gıdasıdır ve FLAMINGO markalı ürünlerimiz Tarım Bakanlığı onaylı takviye edici gıdalardır.",
  },
  {
    header: "Siparişimi teslim alırken nelere dikkat etmeliyim ?",
    body: "Siparişinizi teslim alırken koli dışında eziklik, yırtılma ve  hasar olması durumunda kolileri teslim almayarak kargo yetkilisine tutanak tutturmalısınız. Bu sayede kargonuz ile ilgili probleminiz kısa sürede çözümlenecektir",
  },
  {
    header: "Kapıda ödeme hizmetiniz var mı?",
    body: "250 TL ve üzeri alışverişleriniz de kapıda ödeme mevcuttur.",
  },
  {
    header: "Sipariş takibimi nasıl yapabilirim ?",
    body: "Siparişinizin güncel durumunu üyelik sayfanızda siparişlerim sekmesinden takip edebilirsiniz.  Ayrıca kargo takip numaranız ile kargo firmasının web sitesinden kargonuzun durumunu takip edebilirsiniz.",
  },
  {
    header:
      "İptal ve İade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır ?",
    body: "BKM kurallarına göre iade işlemleri, kredi kartları ile yapılan ödemelerde 1-3 iş günü içerisinde, debit (bankamatik) kartlar ile yapılan ödemelerde ise 7-14 iş günü içerisinde kart hesabına yansımaktadır.",
  },
];
export default function General() {
  return (
    <>
      <Accordion>
        {faqItems.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header className="custom-accordion-header">
              {item.header}
            </Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
