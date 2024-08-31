import Card from "react-bootstrap/Card";

function ReviewCard() {
  return (
    <Card className="border-0" style={{ width: "15rem" }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted fs-6 fst-italic">
        <sup>25.07.2024</sup>  
        </Card.Subtitle>
        <Card.Title>E. Yıldız</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Ürünler Harika
        </Card.Subtitle>
        <Card.Text>Kargom çok kısa bir sürede geldi. Cok iyi.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
