export const sample_products: any[] = [
  {
    id: "1",
    name: "Lenovo IdeaPad 320",
    price: 45125,
    imageUrl: "assets/product-images/Lenovo-ideaPad320-0.jpeg",
    imageUrl1: "assets/product-images/Lenovo-ideaPad320-1.jpeg",
    imageUrl2: "assets/product-images/Lenovo-ideaPad320-2.jpeg",
    imageUrl3: "assets/product-images/Lenovo-ideaPad320-3.jpeg",
    desc: "Lenovo IdeaPad 320 is a Windows 10 laptop with a 15.60-inch display. It is powered by a APU Quad Core A12 processor and it comes with 8GB of RAM. The Lenovo IdeaPad 320 packs 1TB of HDD storage.",
    category: ["Laptop"],
    subcategory: ["Lenovo"],
    seller_name: "Akshay Mandalik",
    seller_mobile: 9922384746,
    seller_address: "San Francisco, USA",
    seller_email: "akshay.22120098@viit.ac.in",
  },
  {
    id: "2",
    name: "Casio 991ES",
    price: 1295,
    imageUrl: "assets/product-images/Casio-991ES-0.jpeg",
    imageUrl1: "assets/product-images/Casio-991ES-1.jpeg",
    imageUrl2: "assets/product-images/Casio-991ES-2.jpeg",
    imageUrl3: "assets/product-images/Casio-991ES-3.jpeg",
    desc: "cientific calculators made by Casio which use Casios Visually Perfect Algebraic Method (V.P.A.M.), Natural Display or Natural V.P.A.M. input methods. V.P.A.M. is an infix system for entering mathematical expressions, used by Casio in most of its current scientific calculators.",
    category: ["Stationary"],
    subcategory: ["Scientific Calculator"],
    seller_name: "Akshay",
    seller_mobile: 9922384746,
    seller_address: "San Francisco, USA",
    seller_email: "akshay.22120098@viit.ac.in",
  },
  {
    id: "3",
    name: "Java:A Complete Reference",
    price: 791,
    imageUrl: "assets/product-images/Java-A-Complete-Reference-0.jpeg",
    imageUrl1: "assets/product-images/Java-A-Complete-Reference-1.jpeg",
    imageUrl2: "assets/product-images/Java-A-Complete-Reference-2.jpeg",
    imageUrl3: "assets/product-images/Java-A-Complete-Reference-3.jpeg",
    desc: 'In general, "Java: The Complete Reference" is a decent reference on Java.09-Jan-2023',
    category: ["Books"],
    subcategory: ["TY"],
    seller_name: "Akshay",
    seller_mobile: 9922384746,
    seller_address: "San Francisco, USA",
    seller_email: "akshay.22120098@viit.ac.in",
  },
  {
    id: "4",
    name: "Iphone 13",
    price: 62990,
    imageUrl: "assets/product-images/Iphone-13-0.jpeg",
    imageUrl1: "assets/product-images/Iphone-13-1.jpeg",
    imageUrl2: "assets/product-images/Iphone-13-2.jpeg",
    imageUrl3: "assets/product-images/Iphone-13-3.jpeg",
    desc: "The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). Both models: HDR display.",
    category: ["SmartPhones"],
    subcategory: ["Apple"],
    seller_name: "Akshay",
    seller_mobile: 9922384746,
    seller_address: "San Francisco, USA",
    seller_email: "akshay.22120098@viit.ac.in",
  },
];

export const sample_categories: any[] = [
  {
    id: 1,
    name: "Laptop",
  },

  {
    id: 2,
    name: "Stationary",
  },
  {
    id: 3,
    name: "Books",
  },
  {
    id: 4,
    name: "SmartPhones",
  },
  {
    id: 5,
    name: "Study Table & Chair",
  },
];

export const sample_subcategories: any[] = [
  {
    parent_category_name: ["Laptop"],
    name: "HP",
  },
  {
    parent_category_name: ["Laptop"],
    name: "Lenovo",
  },
  {
    parent_category_name: ["Stationary"],
    name: "Scientific Calculator",
  },
  {
    name: "TY",
    parent_category_name: ["Books"],
  },
  {
    name: "Apple",
    parent_category_name: ["Laptop", "SmartPhones"],
  },
  {
    name: "Chair",
    parent_category_name: ["Study Table & Chair"],
  },
  {
    parent_category_name: ["Study Table & Chair"],
    name: "Table",
  },
];

export const sample_users: any[] = [
  {
    name: "Akshay Mandalik",
    email: "akshay.22120098@viit.ac.in",
    password: "Akshay@123",
    address: "Davkhar Nagar, Chandwad",
    isAdmin: true,
  },
  {
    name: "Sadanand Nanaware",
    email: "sadanand.22010899@viit.ac.in",
    password: "Sadanand@123",
    address: "ThiurFata, Pune",
    isAdmin: true,
  },
  {
    name: "Payal Deshpande",
    email: "payal.22120113@viit.ac.in",
    password: "Payal@123",
    address: "Kallam Nagar, Osmanabad",
    isAdmin: true,
  },
  {
    name: "Sanket  Mengal",
    email: "sanket.22120016@viit.ac.in",
    password: "Sanket@123",
    address: "Vidya Nagar, Sangamner",
    isAdmin: true,
  },
  {
    name: "Mukta  Chavan",
    email: "mukta.22120010@viit.ac.in",
    password: "Mukta@123",
    address: "Devi Nagar, Baramati",
    isAdmin: true,
  },
];
