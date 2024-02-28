import banner from "../../assets/images/common/tet/banner_1.jpg";
import arrow from "../../assets/images/common/arrow-detail.svg";
function Banner() {
  return (
    <section class="banner banner_tet">
      <div class="swiper-slide" role="group" aria-label="1 / 4">
        <div class="slide-bg">
          <img src={banner} alt="" loading="lazy" />
        </div>
        <div class="slide">
          <div class="wrapper">
            <div class="content-box">
              <h1 class="slide-title">QUÀ TẾT MANG TẾT VỀ MỌI NHÀ</h1>
              <p class="slide-des">
                Tại đây, chúng tôi cung cấp các loại bánh kẹo và quà tết chất
                lượng, được sản xuất bởi các nhà cung cấp hàng đầu Việt nam,
                được phân phôi rộng rãi trong nước và ngoài nước.
              </p>
              <div class="btn-action btn-box">
                <a class="pri-btn" href="/" title="" target="_self">
                  <p>Khám phá ngay</p>
                  <img src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
