import search_icon from "../../assets/images/common/ico_search.svg";
import user_icon from "../../assets/images/common/ico_user.svg";
import card_icon from "../../assets/images/common/ico_cart.svg";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul className="nav">
          <li className="nav-search">
            <form>
              <input
                class="form-input"
                type="text"
                placeholder="Tìm kiếm sản phẩm"
              />
              <button type="submit">
                <img src={search_icon} alt="" />
              </button>
            </form>
          </li>
          <li className="nav-setting">
            <div className="nav-user">
              <img src={user_icon} alt="" />
              <div className="dropdown">
                <ul className="dropdown-menu">
                  <li className="menu-item">Tài khoản của tôi</li>
                  <li className="menu-item">Đơn mua</li>
                  <li className="menu-item">Đăng xuất</li>
                </ul>
              </div>
            </div>
            <div className="nav-card">
              <img src={card_icon} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
