import { useEffect, useState } from "react";
import CardBs from "./CardBs";

interface BestSellerProps {
  name: string;
  short_explanation: string;
  price_info: {
    profit: null;
    total_price: number;
    discounted_price: number | null;
    price_per_servings: number;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}

async function fetchBestSeller() {
  const response = await fetch(
    "https://fe1111.projects.academy.onlyjs.com/api/v1/products/best-sellers"
  );
  const jsonData = await response.json();
  return jsonData.data as BestSellerProps[];
}

export default function BestSeller() {
  const [bestSeller, setBestSeller] = useState<BestSellerProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBestSeller();
      setBestSeller(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {bestSeller.map((item, index) => (
        <div key={index} className="col-lg-2 col-md-4 col-6">
          <CardBs
            name={item.name}
            short_explanation={item.short_explanation}
            average_star={item.average_star}
            comment_count={item.comment_count}
            total_price={item.price_info.total_price}
            discounted_price={item.price_info.discounted_price}
            photo_src={item.photo_src}
          />
        </div>
      ))}
    </>
  );
}
