import React from 'react'
import product1 from "../Images/product-1.avif";
import product2 from "../Images/product-4.avif";
import product3 from "../Images/product-2.avif";
import product4 from "../Images/product-3.avif";
function Shop() {
  return (
    <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="logo arrange-left wid-25">
          <h1><span>E</span><span>Comm</span></h1>
        </div>
        <div class="product-search arrange-left wid-50">
          <input type="search" placeholder="search for products" />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="selected-product arrange-left wid-25">
          <button class="common-btn">
            <span><i class="fa-solid fa-heart"></i>0</span>
          </button>
          <button class="common-btn">
            <span><i class="fa-solid fa-cart-shopping"></i>0</span>
          </button>
        </div>
      </div>
    </div>
    <div class="shop-header">
      <h1>Women Dress Collection</h1>
      <h3>-- Our Shop --</h3>
    </div>
    <div class="wrapper next-row">
      <div class="sort-options">
        <select>
          <option value="">Select</option>
          <option value="1">By Name</option>
          <option value="1">By Rating</option>
          <option value="1">By Latest</option>
        </select>
      </div>
      <div class="wid-25 arrange-left">
        <h1>Filter</h1>
        <div class="custom-control-check">
          <input type="checkbox" class="custom-control-input" id="price-all" />
          <label for="price-all" class="custom-control-label">$0 - $100</label>
        </div>
      </div>
      <div class="wid-75 arrange-left">
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
                <img src={product1} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product2} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product3} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product4} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product1} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product2} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product3} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product4} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
        <div class="wid-33 arrange-left">
          <div class="cart">
            <div class="product-img">
            <img src={product1} alt="image" />
            </div>
            <div class="cart-details">
                <h6 class="name-head">Colored Stylish Shirt</h6>
                <div class="cart-price">
                    <h6 class="current">$123.00</h6>
                    <h6 class="last">$150.00</h6>
                </div>
            </div>
            <div class="cart-footer">
                <a href="##"><i class="fa-regular fa-eye"></i>View Details</a>
                <a href="##"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper next-row">
      <div class="footer">
        <div class="wid-25 arrange-left margin-right-5">
          <div class="logo">
            <h1><span>E</span><span>Comm</span></h1>
          </div>
          <p class="footer-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.doloribus
            repellendus quidem repudiandae dicta provident nihil tempore qui
            libero. Nostrum, doloribus autem!
          </p>
          <ul class="contact-list">
            <li>
              <i class="fa fa-map-marker-alt"></i>123 Street , New York,USA
            </li>
            <li><i class="fa fa-envelope"></i>info@example.com</li>
            <li><i class="fa fa-phone"></i>+91 8765431245</li>
          </ul>
        </div>
        <div class="wid-25 quick-links arrange-left">
          <h3>Quick links</h3>
          <ul>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
          </ul>
        </div>
        <div class="wid-25 quick-links arrange-left">
          <h3>Quick links</h3>
          <ul>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-right"></i><span>Home</span></a
              >
            </li>
          </ul>
        </div>
        <div class="wid-25 arrange-left news-letter">
          <h3>News Letter</h3>
          <input type="text" class="footer-input" placeholder="enter name" />
          <input type="text" class="footer-input" placeholder="enter email" />
          <button class="footer-btn">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Shop