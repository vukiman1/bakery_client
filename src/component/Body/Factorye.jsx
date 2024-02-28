import factory_heading from "../../assets/images/common/tet/factory_heading.png";
import factory_bg from "../../assets/images/common/tet/factory_bg_1.png";
import star_icon from "../../assets/images/common/tet/ico_star.svg";
import productImage from "../../assets/images/common/Product.png";
function Factory() {
  return (
    <section>
      <div class="tet_factory-top">
        <img src={factory_bg} alt="" title="" />
      </div>
      <div class="tet_factory">
        <div class="container">
          <div
            class="tet_heading"
            style={{ backgroundImage: `url(${factory_heading})` }}
          >
            <h2 class="tet_title">BỘ QUÀ BIẾU TẾT DOANH NGHIỆP</h2>
          </div>

          <div class="tet_factory-inner">
            <div class="tet_factory-content">
              <div class="tet_factory-content_inner">
                <h3 class="tet_factory-title">BỘ QUÀ TẾT SUM VẦY</h3>
                <ul class="tet_factory-list">
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Bánh bơ trứng Richy</span>
                  </li>
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Bánh quy LU</span>
                  </li>
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Bánh quy bơ thập cẩm Cosy</span>
                  </li>
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Kẹo KitKat trà xanh</span>
                  </li>
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Kẹo Socola Ferrero</span>
                  </li>
                  <li>
                    <img src={star_icon} alt="" title="" />
                    <span>Rượu vang trắng Đà Lạt</span>
                  </li>
                </ul>
                <div class="tet_factory-price">
                  <p class="tet_factory-price_old">1.820.000</p>
                  <p class="tet_factory-price_new">1.248.000 VND</p>
                </div>
                <div class="tet-action">
                  <a class="pri-btn" href="/" title="" target="_self">
                    Mua ngay
                    <img
                      src="./assets/images/home/ico_arrow_black.svg"
                      alt=""
                      title=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="tet_factory-img">
              <img src={productImage} alt="" title="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Factory;
