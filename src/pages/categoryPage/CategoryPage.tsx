

import ShowMore from './ShowMore';

export default function CategoryPage() {
  const products: string[] = Array(5).fill("");
  return (
    <>
      <div className="container-md mt-5">
        <div className="row">
          <h1 className="text-center py-2 text-uppercase">Kategoriler</h1>
          {products.map((_, index) => (
            <div key={index} className="col-md-4 col-lg-3 col-6 mt-3 d-flex justify-content-center text-center">
              <div className="card border-0">
                <img
                  src="/src/assets/images/categoryDeneme.png"
                  className="card-img-top img-fluid mx-auto"
                  alt="..."
                  style={{ width: "17rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
          <p className="text-center my-5">Toplam {products.length} ürün görüntüleniyor</p>
         <div className="text-center my-5"><ShowMore /></div> 
        </div>
       
      </div>
    </>
  );
}
