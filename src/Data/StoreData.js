// import Product_1 from "../Assets/Products/product_1.jpg";
// import Product_1_1 from "../Assets/Products/product_1-1.jpg";
// import Product_2 from "../Assets/Products/product_2.jpg";
// import Product_2_1 from "../Assets/Products/product_2-1.jpg";
// import Product_3 from "../Assets/Products/product_3.jpg";
// import Product_3_1 from "../Assets/Products/product_3-1.jpg";
// import Product_4 from "../Assets/Products/product_4.jpg";
// import Product_4_1 from "../Assets/Products/product_4-1.jpg";
// import Product_5 from "../Assets/Products/product_5.jpg";
// import Product_5_1 from "../Assets/Products/product_5-1.jpg";
// import Product_6 from "../Assets/Products/product_6.jpg";
// import Product_6_1 from "../Assets/Products/product_6-1.jpg";
// import Product_7 from "../Assets/Products/product_7.jpg";
// import Product_7_1 from "../Assets/Products/product_7-1.jpg";
// import Product_8 from "../Assets/Products/product_8.jpg";
// import Product_8_1 from "../Assets/Products/product_8-1.jpg";


import Product_1 from "../Assets/Products/product_1.png";
import Product_2 from "../Assets/Products/product_2.png";
import Product_3 from "../Assets/Products/product_3.png";
import Product_4 from "../Assets/Products/product_4.png";
import Product_5 from "../Assets/Products/product_5.png";
import Product_6 from "../Assets/Products/product_6.png";
import Product_7 from "../Assets/Products/product_7.png";
import Product_8 from "../Assets/Products/product_8.png";
import Product_9 from "../Assets/Products/product_9.png";
import Product_10 from "../Assets/Products/product_10.png";

import limited1 from "../Assets/LimitedEdition/limited-1.jpg";
import limited2 from "../Assets/LimitedEdition/limited-2.jpg";
import limited3 from "../Assets/LimitedEdition/limited-3.jpg";
import limited4 from "../Assets/LimitedEdition/limited-4.jpg";
import limited5 from "../Assets/LimitedEdition/limited-5.jpg";

let StoreData = [
  {
    productID: 1,
    frontImg: Product_1,
    backImg: Product_1,
    productName: "Sunny Yellow Scrunchie",
    productDesc:"Bright, cheerful yellow for a sunny pop",
    productFabric:"Satin, Velvet",
    productSize:"M, L, XL",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "8k+ reviews",
  },
  {
    productID: 2,
    frontImg: Product_2,
    backImg: Product_2,
    productName: "Champagne Glow Scrunchie",
    productDesc:"Soft champagne-gold, classy and elegant",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "2k+ reviews",
  },
  {
    productID: 3,
    frontImg: Product_3,
    backImg: Product_3,
    productName: "Vintage Sepia Scrunchie",
    productDesc:"Warm brownish sepia, vintage vibes",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "7k+ reviews",
  },
  {
    productID: 4,
    frontImg: Product_9,
    backImg: Product_9,
    productName: "Rainbow Pop Scrunchie",
    productDesc:"Multi-color rainbow burst",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "5k+ reviews",
  },
  {
    productID: 5,
    frontImg: Product_5,
    backImg: Product_5,
    productName: "Baby Blue Cloud Scrunchie",
    productDesc:"Soft pastel blue, gentle and sweet",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "9k+ reviews",
  },
  {
    productID: 6,
    frontImg: Product_10,
    backImg: Product_10,
    productName: "Fiesta Twist Scrunchie",
    productDesc:"Bold multi-color mix",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "1k+ reviews",
  },
  {
    productID: 7,
    frontImg: Product_7,
    backImg: Product_7,
    productName: "Classic White Scrunchie",
    productDesc:"Crisp white, clean and versatile",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "3k+ reviews",
  },
  {
    productID: 8,
    frontImg: Product_8,
    backImg: Product_8,
    productName: "Royal Maroon Scrunchie",
    productDesc:"Rich maroon red",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "4k+ reviews",
  },
  {
    productID: 9,
    frontImg: Product_9,
    productName: "Rainbow Pop Scrunchie",
    productDesc:"Multi-color rainbow burst",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "8k+ reviews",
  },
  {
    productID: 10,
    frontImg: Product_10,
    productName: "Rainbow Pop Scrunchie",
    productDesc:"Multi-color rainbow burst",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "5k+ reviews",
  },
  {
    productID: 11,
    frontImg: Product_7,
    productName: "Classic White Scrunchie",
    productDesc:"Crisp white, clean and versatile",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "1k+ reviews",
  },
  {
    productID: 12,
    frontImg: Product_6,
    productName: "Elegant Sandal Scrunchie",
    productDesc:"Light beige-brown, sandalwood shade",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "7k+ reviews",
  },
  {
    productID: 13,
    frontImg: Product_5,
    productName: "Baby Blue Cloud Scrunchie",
    productDesc:"Soft pastel blue, gentle and sweet",
    productSize:"M, L, XL",
    productFabric:"Satin, Velvet",
    productPrice: 45,
    productDisPrice: 50,
    productReviews: "71+ reviews",
  },
];

export default StoreData;
