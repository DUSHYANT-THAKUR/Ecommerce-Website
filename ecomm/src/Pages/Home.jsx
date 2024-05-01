import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../Images/banner.avif";
import man1 from "../Images/man-dress-img1.avif";
import man2 from "../Images/man-dress-img2v.avif";
import man3 from "../Images/man-dress-img3v.avif";
import offer1 from "../Images/offer-2.avif";
import offer2 from "../Images/offer-1.jpeg";
import product1 from "../Images/product-1.avif";
import product2 from "../Images/product-4.avif";
import product3 from "../Images/product-2.avif";
import product4 from "../Images/product-3.avif";
import comlogo1 from "../Images/com-logo-5.png";
import comlogo2 from "../Images/com-logo-1.png";
import comlogo3 from "../Images/com-logo-2.png";
import comlogo4 from "../Images/com-logo-3.png";
import comlogo5 from "../Images/com-logo-4.png";
import axios from "axios";
function Home() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  const [product_name, setProductName] = useState('');
  const [actual_price, setActualPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [total, setTotal] = useState('120');

  async function categories() {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      let result = await axios.post(
        `http://localhost:9240/allCategories`,
        config
      );
      console.log(result.data.result);
      setCategory(result.data.result);
    } catch (error) {
      console.log(error);
      console.error("Error during signup:", error);
    }
  }
  async function products() {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      let result = await axios.post(`http://localhost:9240/product`, config);
      console.log(result.data.result);
      setProduct(result.data.result);
    } catch (error) {
      console.log(error);
      console.error("Error during signup:", error);
    }
  }
  async function productSubmit(e) {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('producted', product_name);
      formData.append('actual_price', actual_price);
      formData.append('quantity', quantity);
      formData.append('total', total);
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
  
      // Send POST request to the server
      let result = await axios.post(
        `http://localhost:9240/cart`,
        formData,
        config
      );
      console.log(result);
    } catch (error) {
      // Handle errors
      console.error("Error submitting product:", error);
    }
  }
  
  


  useEffect(() => {
    categories();
    products();
  }, []);
  return (
    <>
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
      <div className="full-banner-wrapper">
        <div className="wrapper next-row">
          <div className="banner-area category-list arrange-left wid-25">
            <div className="list-header">
              <h4>Categories</h4>
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>

            <ul>
              {category.map((item) => (
                <li key={item.id}>
                  <a href="">{item.categories_name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="wid-75 arrange-left">
            <div className="shop-menu">
              <ul className="left-menu-list">
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Shop">Shop</Link>
                </li>
                <li className="drowdown-head">
                  <span>
                    Product Details<i className="fa-solid fa-angle-down"></i>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <Link to="/Cart">Cart</Link>
                    </li>
                    <li>
                      <a href="">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
              <ul className="right-menu-list">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
              </ul>
            </div>
            <div className="banner">
              <img src={banner} alt="banner" />
              <div className="banner-text">
                <h4>10% off your first order</h4>
                <h3>Fashionable dress</h3>
                <a href="" className="show-now">
                  Show Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-check"></i>
              <span>Quality Product</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-truck-fast"></i>
              <span>Free Shipping</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-exchange-alt"></i>
              <span>14 days return</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-phone-volume"></i>
              <span>24/7 Support</span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="wid-33 arrange-left">
          <div className="category-item">
            <div className="product-count">20 products</div>
            <div className="category-img">
              <img src={man1} alt="image" />
            </div>
            <div className="category-type">
              <h5>Men's Dress</h5>
            </div>
          </div>
        </div>
        <div className="wid-33 ml-2 arrange-left">
          <div className="category-item">
            <div className="product-count">20 products</div>
            <div className="category-img">
              <img src={man2} alt="image" />
            </div>
            <div className="category-type">
              <h5>Men's Dress</h5>
            </div>
          </div>
        </div>
        <div className="wid-33 ml-2 arrange-left">
          <div className="category-item">
            <div className="product-count">20 products</div>
            <div className="category-img">
              <img src={man3} alt="image" />
            </div>
            <div className="category-type">
              <h5>Men's Dress</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="wid-50 arrange-left">
          <div className="offer-banner">
            <img src={offer1} alt="image" />
            <div className="offer-text">
              <h2>20% off the all order</h2>
              <h3>Spring Collection</h3>
              <button className="show-more">Show Now</button>
            </div>
          </div>
        </div>
        <div className="wid-50 arrange-left">
          <div className="offer-banner">
            <img src={offer2} alt="image" />
            <div className="offer-text">
              <h2>20% off the all order</h2>
              <h3>Spring Collection</h3>
              <button className="show-more">Show Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        {product.map((item, index) => 
          ( 
          <div key={index} className="wid-25 arrange-left">
            <div className="cart">
              <div className="product-img">
                <img
                  src={`http://localhost:9240/images/${item.product_image}`}
                  alt="image"
                />
              </div>
              <div className="cart-details">
                <h6 className="name-head">
                <input
                      type="text"
                      placeholder={item.product_name}
                      value={item.product_name}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                </h6>
                <div className="cart-price">
                  <h6 className="current">
                  <input
                      type="text"
                      placeholder={item.product_total_price}
                      value={actual_price}
                      onChange={(e) => setActualPrice(e.target.value)}
                    />
                  </h6>
                  <h6 className="last">{item.product_actual_price}</h6>
                </div>
              </div>
              <div className="cart-footer">
                <a href="##">
                  <i className="fa-regular fa-eye"></i>View Details
                </a>
                <a href="##">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                  <button className="add-to-cart" onClick={productSubmit}>
                    Add to cart
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="wid-25 arrange-left">
          <div className="cart">
            <div className="product-img">
              <img src={product2} alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">
                <input type="text" placeholder="Shirt" />
              </h6>
              <div className="cart-price">
                <h6 className="current">
                  <input type="text" placeholder="$124.00" />
                </h6>
                <h6 className="last">$150.00</h6>
              </div>
            </div>
            <div className="cart-footer">
              <a href="##">
                <i className="fa-regular fa-eye"></i>View Details
              </a>
              <a href="##">
                <i className="fa-solid fa-cart-arrow-down"></i>Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="cart">
            <div className="product-img">
              <img src={product3} alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">
                <input type="text" placeholder="Shirt" />
              </h6>
              <div className="cart-price">
                <h6 className="current">
                  <input type="text" placeholder="$124.00" />
                </h6>
                <h6 className="last">$150.00</h6>
              </div>
            </div>
            <div className="cart-footer">
              <a href="##">
                <i className="fa-regular fa-eye"></i>View Details
              </a>
              <a href="##">
                <i className="fa-solid fa-cart-arrow-down"></i>Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="cart">
            <div className="product-img">
              <img src={product4} alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">
                <input type="text" placeholder="Shirt" />
              </h6>
              <div className="cart-price">
                <h6 className="current">
                  <input type="text" placeholder="$124.00" />
                </h6>
                <h6 className="last">$150.00</h6>
              </div>
            </div>
            <div className="cart-footer">
              <a href="##">
                <i className="fa-regular fa-eye"></i>View Details
              </a>
              <a href="##">
                <i className="fa-solid fa-cart-arrow-down"></i>Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="stay-updated">
          <h1>Stay Updated</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit molestias ea
            obcaecati, ut earum.
          </p>
          <div className="updated-inputs">
            <input type="text" placeholder="email goes here" />
            <button className="email-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="vendor-list">
        <img src={comlogo1} alt="image" />
        <img src={comlogo2} alt="image" />
        <img src={comlogo3} alt="image" />
        <img src={comlogo4} alt="image" />
        <img src={comlogo5} alt="image" />
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
    </>
  );
}

export default Home;
