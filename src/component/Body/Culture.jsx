import culture_heading from "../../assets/images/tet/culture_heading.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Culture() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/product").then((res) => {
      const sortProduct = res.data.slice().sort((a, b) => a.id - b.id);
      setProduct(sortProduct);
    });
  }, []);

  console.log(product);

  return (
    <>
      <section>
        <div className="tet-culture">
          <div
            className="tet_heading"
            style={{ backgroundImage: `url(${culture_heading})` }}
          >
            <h2 class="tet_title">
              Quà tết truyền thống <br /> của người việt
            </h2>
          </div>
          <div className="container">
            <ul className="wrapper">
              {product.map((item, index) => {
                return (
                  <li className="swiper-slide">
                    <div className="product-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="product-content">
                      <h2 className="product-name">{item.name}</h2>
                      <div class="tet_culture-price">
                        <span>
                          {item.price.toLocaleString()} <p>VND</p>
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Culture;
