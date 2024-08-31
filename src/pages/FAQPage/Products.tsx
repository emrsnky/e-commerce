import { Accordion } from "react-bootstrap";


const faqItems = [
    {
      header: "BCAA+ ile BCAA 4:1:1 arasındaki fark nedir?",
      body: "BCAA vücutta üretilemeyen ve besinlerden alınması zorunlu olan Lösin, İzolösin ve Valin aminoasitlerinden oluşur. BCAA ürününde 2:1:1 oranında bu aminoasitler vardır. BCAA 4:1:1'de ise bu oran 4 kat Lösin için 1 er kat İzolösin ve Valin şeklindedir. BCAA+ ek olarak Glutamine ile desteklenmiştir. Ayrıca kramp önleyici ve performans arttırıcı elektrolit içerir.",


    },
    {
      header: "Green Detox ne işe yarar? Ne zaman kullanılmalıdır?",
      body: "Green Detox ürünü sağlıklı sebzelerin tüketimini kolaylaştırmak için üretilmiştir. Günde sadece 1 dakikada besin değeri yönünden en zengin vitamin ve mineral içeren çeşitli gıdaları hazırlama yıkama derdi olmadan tüketmenize yarar. Böylece dengeli beslenmeyi kolaylaştırır, kendinizi daha enerjik ve iyi hissetmenize yardımcı olur.",
    },
    {
      header: "Spora yeni başladım hacim kazanmak ve kas yapmak için ne kullanmalıyım?",
      body: "Kas yapmak için öncelikle harcadığınızdan daha fazla kalori almalısınız. Bunun için yüksek kalorili beslenmek gerekir. Kas yapmak içinse genellikle vücut ağırlığı kilogram başına 1.5-2.5g arası protein tüketmeniz önerilir. Bu yüzden Whey Protein veya benzer protein tozları ürünlerini kullanmanız yüksek protein ihtiyacınızı karşılamak için faydalı olacaktır. Eğer iştahınız çok yoksa ve kalori almakta zorlanıyorsanız, yüksek kalori ve protein içeren Mass Gainer ürünümüzü kullanmanızı öneririz. Bunun haricinde kas yapmak için performansınızı arttıracak ve etkisi kanıtlanmış Creatine kullanmanız faydalıdır. Yorgun hissettiğiniz günlerde spora gitmenize yardımcı olacak ve diğer günlerde ise performansınızı arttırmanıza yarayacak Pre-Workout ürünü kullanabilirsiniz.",
    },
    {
      header: "Ürünlerinizde ölçek bulunuyor mu?",
      body: "Ürünlerimizin hepsinin içinden ölçek çıkmaktadır.",
    },
    {
      header: "Kilo veremiyorum, ne kullanmam lazım?",
      body: "Kilo vermek için öncelikle harcadığınızdan daha az kalori ile beslenmeniz gerekir. Bunun için iştahınızı kapatmaya yardımcı ve daha uzun süre tokluk hissi veren lifli ve proteinli gıdalar tüketmeniz tavsiye edilir.",
    },
    {
      header: "Kilo alamıyorum, ne kullanmam lazım?",
      body: "Kilo yapmak için öncelikle harcadığınızdan daha fazla kalori almalısınız. Bunun için yüksek kalorili beslenmek gerekir. Kilo almaktan kasıt ise daha çok kas yaparak kilo almaktır. Kimse yağlanarak yumuşak bir fiziğe kavuşmak istemez.",
    },
    {
      header: "Mass Gainer kullanarak 1 ayda kaç kilo alırım?",
      body: "Alabileceğiniz kilo miktarı genel olarak beslenmenize de bağlıdır. Yüksek kalorili ve proteinli beslendiğiniz takdirde rahatlıkla kilo alabilirsiniz.",
    },
    {
      header: "Dextrose, Maltodextrin, Mass Gainer arasında ne gibi farklar var?",
      body: "Dextrose ve Maltodextrin karbonhidrat içeren ve hızlıca ihtiyaç duyulan enerjiyi sağlamak için kullanılır. Mass Gainer ise kilo almak isteyenler için özellikle formülize edilmiş yüksek kalite protein ve yüksek kalori içeren bir üründür.",
    },
  
    {
      header: "Pre-workout aldım işe yaramadı, nasıl kullanmalıyım?",
      body: "Pre-Workout ürünümüz açık ara en çok sevilen ve tekrar tekrar kullanılan bir üründür. Günlük hayatında çok yüksek miktarda kahve içen, yeteri kadar uyku uyumamış kişilerin bazılarında etkili olmayabilir. ",
    },
    {
      header: "Preworkout kullandıktan sonra vücudumda neden karıncalamalar oluyor?",
      body: "Pre-Workout Supreme ürünü içeriğinde de belirtildiği gibi Beta Alanine içermektedir ve bu maddenin genel bir özelliği kaşıntı yapmasıdır. Parestezi olarak adlandırılan bu etki, bilimsel sebebi tam olarak bilinmese de sinir yolları üzerindeki bir uyarımdan kaynaklandığı düşünülmektedir.",
    },
    
  ];
export default function Products() {
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
  )
}
