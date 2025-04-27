import React, { useState } from "react";
import "./Trendy.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";
import { Link } from "react-router-dom";
import StoreData from "../../../Data/StoreData";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const Trendy = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("tab1");
  const [wishList, setWishList] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const sortByPrice = (a, b) => a.productPrice - b.productPrice;

  const sortByReviews = (a, b) => {
    const reviewsA = parseInt(
      a.productReviews.replace("k+ reviews", "").replace(",", "")
    );
    const reviewsB = parseInt(
      b.productReviews.replace("k+ reviews", "").replace(",", "")
    );
    return reviewsB - reviewsA;
  };

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached", {
        duration: 2000,
        style: {
          backgroundColor: "#ff4b4b",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ff4b4b",
        },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`Added to cart!`, {
        duration: 2000,
        style: {
          backgroundColor: "#07bc0c",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#07bc0c",
        },
      });
    }
  };

  return (
    <>
      <div className="trendyProducts">
        <h2>
          New <span>Arrivals</span>
        </h2>
        <div className="trendyTabs">
          <div className="trendyMainContainer">
            {StoreData.slice(0, 8).map((product) => (
              <div className="trendyProductContainer" key={product.id}>
                <div className="trendyProductImages">
                  {/* <Link to="/Product" onClick={scrollToTop}> */}
                  <img
                    src={product.frontImg}
                    alt=""
                    className="trendyProduct_front"
                  />
                  <img
                    src={product.backImg}
                    alt=""
                    className="trendyProduct_back"
                  />
                  {/* </Link> */}
                  {/* <h4 onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </h4> */}
                </div>
                {/* <div
                    className="trendyProductImagesCart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus />
                  </div> */}
                <div className="trendyProductInfo">
                  {/* <div className="trendyProductCategoryWishlist">
                        <p>Dresses</p>
                        <FiHeart
                          onClick={() => handleWishlistClick(product.productID)}
                          style={{
                            color: wishList[product.productID]
                              ? "red"
                              : "#767676",
                            cursor: "pointer",
                          }}
                        />
                      </div> */}
                  <div className="trendyProductNameInfo">
                    {/* <Link to="product" onClick={scrollToTop}> */}
                    <h5>{product.productName}</h5>
                    {/* </Link> */}

                    <label>Rs.{product.productPrice}</label>
                    <p>Rs.{product.productDisPrice}</p>
                    {/* <div className="trendyProductRatingReviews">
                          <div className="trendyProductRatingStar">
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                          </div>
                          <span>{product.productReviews}</span>
                        </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <h2>
          Best <span>Seller</span>
        </h2>
        <div className="trendyTabs">
          <div className="trendyTabContent">
            <div className="trendyMainContainer">
              {StoreData.slice(0, 8).map((product) => (
                <div className="trendyProductContainer" key={product.id}>
                  <div className="trendyProductImages">
                    <Link to="/Product" onClick={scrollToTop}>
                      <img
                        src={product.frontImg}
                        alt=""
                        className="trendyProduct_front"
                      />
                      <img
                        src={product.backImg}
                        alt=""
                        className="trendyProduct_back"
                      />
                    </Link>
                    <h4 onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </h4>
                  </div>
                  <div
                    className="trendyProductImagesCart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus />
                  </div>
                  <div className="trendyProductInfo">
                    <div className="trendyProductCategoryWishlist">
                        <p>Dresses</p>
                        <FiHeart
                          onClick={() => handleWishlistClick(product.productID)}
                          style={{
                            color: wishList[product.productID]
                              ? "red"
                              : "#767676",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    <div className="trendyProductNameInfo">
                      <Link to="product" onClick={scrollToTop}>
                        <h5>{product.productName}</h5>
                      </Link>

                      <p>Rs.{product.productPrice}</p>
                      <div className="trendyProductRatingReviews">
                          <div className="trendyProductRatingStar">
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                          </div>
                          <span>{product.productReviews}</span>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* <div className="discoverMore">
          <Link to="/shop" onClick={scrollToTop}>
            <p>Discovdder More</p>
          </Link>
        </div> */}
      </div>
      {/* <div className="trendyProducts">
        <h2>
          Top <span>Rated</span>
        </h2>
        <div className="trendyTabs">
          <div className="trendyTabContent">
            <div className="trendyMainContainer">
              {StoreData.slice(0, 8).map((product) => (
                <div className="trendyProductContainer" key={product.id}>
                  <div className="trendyProductImages">
                    <Link to="/Product" onClick={scrollToTop}>
                      <img
                        src={product.frontImg}
                        alt=""
                        className="trendyProduct_front"
                      />
                      <img
                        src={product.backImg}
                        alt=""
                        className="trendyProduct_back"
                      />
                    </Link>
                    <h4 onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </h4>
                  </div>
                  <div
                    className="trendyProductImagesCart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus />
                  </div>
                  <div className="trendyProductInfo">
                    <div className="trendyProductCategoryWishlist">
                      <p>Dresses</p>
                      <FiHeart
                        onClick={() => handleWishlistClick(product.productID)}
                        style={{
                          color: wishList[product.productID]
                            ? "red"
                            : "#767676",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div className="trendyProductNameInfo">
                      <Link to="product" onClick={scrollToTop}>
                        <h5>{product.productName}</h5>
                      </Link>

                      <p>Rs.{product.productPrice}</p>
                      <div className="trendyProductRatingReviews">
                        <div className="trendyProductRatingStar">
                          <FaStar color="#FEC78A" size={10} />
                          <FaStar color="#FEC78A" size={10} />
                          <FaStar color="#FEC78A" size={10} />
                          <FaStar color="#FEC78A" size={10} />
                          <FaStar color="#FEC78A" size={10} />
                        </div>
                        <span>{product.productReviews}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="discoverMore">
          <Link to="/shop" onClick={scrollToTop}>
            <p>Discovdder More</p>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Trendy;
