import React from "react";

function Cart() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <div className="logo arrange-left wid-25">
            <h1>
              <span>E</span>
              <span>Comm</span>
            </h1>
          </div>
          <div className="product-search arrange-left wid-50">
            <input type="search" placeholder="search for products" />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="selected-product arrange-left wid-25">
            <button className="common-btn">
              <span>
                <i className="fa-solid fa-heart"></i>0
              </span>
            </button>
            <button className="common-btn">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>0
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="shop-header">
        <h1>Your Shopping Detail</h1>
        <h3>-- Cart Details --</h3>
      </div>
      <div className="wrapper next-row">
        <div className="wid-75 arrange-left">
          <div className="cart-details">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="" alt="image" />
                    <span>Colourful Shirt</span>
                  </td>
                  <td>
                    <img src="" alt="image" />
                    <span>$150</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button>-</button>
                      <input type="text" value="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa fa-remove icon custom-delete-button"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="" alt="image" />
                    <span>Colourful Shirt</span>
                  </td>
                  <td>
                    <img src="" alt="image" />
                    <span>$150</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button>-</button>
                      <input type="text" value="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa fa-remove icon custom-delete-button"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="" alt="image" />
                    <span>Colourful Shirt</span>
                  </td>
                  <td>
                    <img src="" alt="image" />
                    <span>$150</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button>-</button>
                      <input type="text" value="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa fa-remove icon custom-delete-button"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="" alt="image" />
                    <span>Colourful Shirt</span>
                  </td>
                  <td>
                    <img src="" alt="image" />
                    <span>$150</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button>-</button>
                      <input type="text" value="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa fa-remove icon custom-delete-button"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="" alt="image" />
                    <span>Colourful Shirt</span>
                  </td>
                  <td>
                    <img src="" alt="image" />
                    <span>$150</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button>-</button>
                      <input type="text" value="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa fa-remove icon custom-delete-button"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="cart-summary-wrapper">
            <div className="coupon-inputs">
              <input type="text" placeholder="enter Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="cart-summary-body">
              <div className="cart-summary-item">
                <h6>Sub Total</h6>
                <h6>$150</h6>
              </div>
              <div className="cart-summary-item-2">
                <h6>shipping</h6>
                <h6>$100</h6>
              </div>
            </div>
            <div className="total-wrapper">
                <div className="total-head">
                  <h4>Total</h4>
                  <h4>$170</h4>
                </div>
                <div className="proceed-input">
                  <button className="proceed-btn">Proceed to checkout</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="footer">
          <div className="wid-25 arrange-left margin-right-5">
            <div className="logo">
              <h1>
                <span>E</span>
                <span>Comm</span>
              </h1>
            </div>
            <p className="footer-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.doloribus
              repellendus quidem repudiandae dicta provident nihil tempore qui
              libero. Nostrum, doloribus autem!
            </p>
            <ul className="contact-list">
              <li>
                <i className="fa fa-map-marker-alt"></i>123 Street , New
                York,USA
              </li>
              <li>
                <i className="fa fa-envelope"></i>info@example.com
              </li>
              <li>
                <i className="fa fa-phone"></i>+91 8765431245
              </li>
            </ul>
          </div>
          <div className="wid-25 quick-links arrange-left">
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="wid-25 quick-links arrange-left">
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  <span>Home</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="wid-25 arrange-left news-letter">
            <h3>News Letter</h3>
            <input
              type="text"
              className="footer-input"
              placeholder="enter name"
            />
            <input
              type="text"
              className="footer-input"
              placeholder="enter email"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
