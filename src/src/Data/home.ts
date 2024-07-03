import CardBoard from '@Images/slider/cardboard.jpg';
import Dockyard from '@Images/slider/dockyard.png';
import Container from '@Images/slider/container.jpg';
import Cosmetics from '@Images/slider/cosmetics.png';
import FoodChemicals from '@Images/slider/foodchemicals.png';
import Spices from '@Images/slider/spices.png';
import SpicesBackground from '@Images/slider/spicesbackground.jpg';
import Meadow from '@Images/slider/sunny-meadow-landscape.jpg';
//Images
import RedChilliPowder from '@Images/ProductImages/redchillipowder.png';
import ChholeMasala from '@Images/ProductImages/chholemasala.png';
import MeatMasla from '@Images/ProductImages/meatmasala.png';
import PavBhajiMasala from '@Images/ProductImages/pavbhajimasala.png';
import SambarMasala from '@Images/ProductImages/sambarmasala.png';
import ShahiPanner from '@Images/ProductImages/shahipaneermasala.png';
import TurmericPowder from '@Images/ProductImages/turmericpowder.png'
import CorianderPowder from '@Images/ProductImages/corianderpowder.png';
import SabjiMasala from '@Images/ProductImages/sabjimasala.png';
// import GaramMasala from '@Images/ProductImages/garammasala.png';
// import GaramMasala  from '@Images/ProductImages/GaramMasalaUpdate.png'
import GaramMasala  from '@Images/ProductImages/garammasala.png'


import SliderFour from '@Images/slider/slider-four.jpeg';
import SliderOne from '@Images/slider/slider-one.jpeg';
import SliderTwo from '@Images/slider/slider-two.jpeg';
import SliderThree from '@Images/slider/slider-three.jpeg';
import SliderFive from '@Images/slider/slider-five.jpeg';
import SliderSix from '@Images/slider/slider-six.jpeg'
import VegetableImage from '@Images/home/vegetables.jpeg'
import GrainsImage from '@Images/home/grains.jpeg';
import FruitsImage from '@Images/home/fruits.jpeg';
import FertilizersImage from '@Images/home/fertilizer.jpeg';
import PharmaImage from '@Images/home/pharma.jpeg';
import MasalaImage from '@Images/home/masala.jpeg';
import FoodChemicalImage from '@Images/home/food-chemical.jpeg';

export const productSpices = [
  {
    id: 1,
    ProductName: "Red Chilli Powder",
    ProductImage: RedChilliPowder
  },
  {
    id: 2,
    ProductName: "Chhole Masala",
    ProductImage: ChholeMasala
  },
  {
    id: 3,
    ProductName: "Meat Masala",
    ProductImage: MeatMasla
  },
  {
    id: 4,
    ProductName: "Pav Bhaji Masala",
    ProductImage: PavBhajiMasala
  },
  {
    id: 5,
    ProductName: "Sambar Masala",
    ProductImage: SambarMasala
  },
  {
    id: 6,
    ProductName: "Shahi Paneer Masala",
    ProductImage: ShahiPanner
  },
  {
    id: 7,
    ProductName: "Turmeric Powder",
    ProductImage: TurmericPowder
  },
  {
    id: 8,
    ProductName: "Coriander Powder",
    ProductImage: CorianderPowder
  },
  {
    id: 9,
    ProductName: "Garam Masala",
    ProductImage: GaramMasala
  },
  {
    id: 10,
    ProductName: "Sabji Masala",
    ProductImage: SabjiMasala
  }
];

export const sliderData = [
  {
    id: 1,
    title: "Tendoni: Success with Synergy",
    subtitle: "Pioneering Global Success",
    text: "Discover the essence of global leadership as Tendoni continues to redefine the spice, vegetable, pharmaceutical, and food chemicals trading landscape. From India to international markets, our commitment to excellence is unwavering.",
    image: SliderFour
  },
  {
    id: 2,
    title: "Exporting Excellence, Harvesting Success",
    subtitle: "Synergizing Markets Worldwide",
    text: "Tendoni stands as your trusted partner in exporting a rich spectrum of products - from fresh vegetables and fruits to cutting-edge cosmetics, chemicals, and invigorating beverages. We tailor our offerings to meet the unique demands of diverse markets.",
    image: SliderThree
  },
  {
    id: 3,
    title: "Beyond Borders, Beyond Expectations",
    subtitle: "Quality Delivered Globally",
    text: "At Tendoni, quality is our cornerstone. Every shipment, whether it's vegetables or pharmaceuticals, carries the mark of our commitment to excellence. Join hands with a global leader that prioritizes quality assurance in every transaction.",
    image: SliderOne
  },
  {
    id: 4,
    title: "Tendoni: Your Global Trading Hub",
    subtitle: "Connect, Trade, Prosper",
    text: "Our reach extends far and wide, connecting nations through the trade of spices, vegetables, pharmaceuticals, and food chemicals. Tendoni is not just a brand; it's a global community fostering prosperity through synergistic partnerships.",
    image: SliderTwo
  },
  {
    id: 5,
    title: "Success with Synergy",
    subtitle: "Empowering Growth Together",
    text: "Tendoni's success is built on collaboration and synergy. Join us on this exciting journey where partnerships flourish, markets thrive, and success knows no boundaries. Together, let's achieve excellence and redefine global trade.",
    image: SliderFive
  },
  {
    id: 6,
    title: "Success with Synergy",
    subtitle: "Empowering Growth Together",
    text: "Tendoni's success is built on collaboration and synergy. Join us on this exciting journey where partnerships flourish, markets thrive, and success knows no boundaries. Together, let's achieve excellence and redefine global trade.",
    image: SliderSix
  },
];

export const menuItems = [
  { label: 'Home', id: 'home', url: '/', childMenu: false },
  { label: 'About Us', id: 'about', url: '/about-us', childMenu: true },
  { label: 'Business Verticals ', id: 'business', url: '/business-verticals', childMenu: true },
  { label: 'Food Division', id: 'food', url: '/food-division/Spices', childMenu: true },
  { label: 'Chemical Division', id: 'chemical', url: '/chemical-Division/pharmaceutical', childMenu: true },
  { label: 'International Trade', id: 'trade', url: '/international-trade', childMenu: false },
  { label: 'Contact Us', id: 'contact', url: '/contact-us', childMenu: false },
  { label: 'Shop Now', id: 'shop', url: '/shop-now', childMenu: false },
  {  icon: 'your-icon-name', id: 'login', url: '/login', childMenu: false },
];

export const childMenuData: any = {
  about: [
    {
      id: 1,
      header: "Tendoni Group",
      data: [

        { label: "Who we are", id: "about", url: '/about-us#whoweare' },
        { label: "Management", id: "management", url: '/about-us#members' },
        { label: "Certifications", id: "certifications", url: '/about-us#certifications' }
      ]
    },
  ],
  business: [
    {
      id: 1,
      header: "Business Verticals",
      data: [
        { label: "Food Division", id: "foodDiv", url: '/business-verticals#food-division' },
        { label: "Chemical Division", id: "chemDiv", url: '/business-verticals#chemical-division' },
        { label: "Pharma Division", id: "pharmaDiv", url: '/business-verticals#pharma-division' },
       //{ label: "Cosmetics", id: "cosmetics", url: '/business-verticals/cosmetics' },
        { label: "International Trade", id: "internationaltrade", url: '/business-verticals#international-trade' },
       // { label: "Distribution", id: "distribution", url: '/business-verticals/distribution' },
      ]
    },
  ],

  food: [
    {
      id: 1,
      header: "Spices",
      data: [
        { label: "Turmeric Powder", id: "turmericPowder", url: '/food-division/Spices#Turmeric' },//
        { label: "Red Chilli Powder", id: "redChilli", url: '/food-division/Spices#RedChilli' },//
        { label: "Coriander Powder", id: "coriander", url: '/food-division/Spices#Coriander' },//
        { label: "Garam Masala", id: "garamMasala", url: '/food-division/Spices#GaramMasala' },//
        { label: "Pav Bhaji Masala", id: "pavbhaji", url: '/food-division/Spices#PavBhaji' },//
        { label: "Chhole Masala", id: "chhole", url: '/food-division/Spices#Chole' }, //
        { label: "Sabji Masala", id: "sabji", url: '/food-division/Spices#Sabji' },//
        { label: "Meat Masala", id: "meat", url: '/food-division/Spices#Meat' }, //
        { label: "Sambar Masala", id: "sambar", url: '/food-division/Spices#Sambar' },//
        { label: "Chaat Masala", id: "chaat", url: '/food-division/Spices#Chaat' },//
        { label: "Chicken Masala", id: "chicken", url: '/food-division/Spices#Chicken' },//
        { label: "Shahi Paneer Masala", id: "shahiPaneer", url: '/food-division/Spices#ShahiPaneer' },//
      ]
    },
    {
      id: 2,
      header: "Vegetables",
      data: [
        { label: "Fresh Fruits & Vegetables", id: "freshFoods ", url: '/food-division/vegetable' },
      ]
    },
    {
      id: 3,
      header: "Grains",
      data: [
        { label: "Click here view our all Grains ", id: "grainsSpices", url: '/food-division/Grains' },
      ]
    },
    // {
    //   id: 4,
    //   header: "Raw Spices",
    //   data: [
    //     { label: "Click here view our all Raw Spices", id: "rawSpices", url: '/food-division/RawSpices' },
    //   ]
    // }
  ],

  chemical: [
    {
      id: 1,
      header: "Chemical Division",
      data: [
        { label: "Pharmaceuticals", id: "pharma", url: '/chemical-Division/pharmaceutical' },
        { label: "Food Chemicals", id: "foodchem", url: '/chemical-Division/foodChemical' },
        { label: "Fertilizers", id: "fertilizers", url: '/chemical-Division/fertilizers' },
      ]
    },
  ],
};

export const testimonials = [
  {
    "id": 1,
    "title": "Exquisite Flavors Delivered!",
    "text": "Tendoni has elevated our culinary experience with their exceptional range of spices and masale. The richness and authenticity of their products have added a new dimension to our recipes. As a chef, I appreciate the quality and diversity Tendoni brings to the table.",
    // "author": "Chef Julia Thompson"
  },
  {
    "id": 2,
    "title": "Unmatched Quality and Service",
    "text": "Working with Tendoni has been a pleasure. Their commitment to delivering high-quality products is evident in every shipment. From prompt communication to reliable deliveries, Tendoni stands out as a trusted partner in the export industry. Looking forward to continued collaboration.",
    // "author": "Rajesh Kapoor, CEO - Global Foods Ltd."
  },
  {
    "id": 3,
    "title": "Aromatic Bliss!",
    "text": "The spices from Tendoni have become a staple in our kitchen. The aroma and flavor they infuse into our dishes are unmatched. It's not just about ingredients; it's about creating an experience, and Tendoni consistently helps us achieve that with their premium spices. Highly recommended!",
    // "author": "Emily Rodriguez, Home Chef"
  },
  {
    "id": 4,
    "title": "Reliable Partner in Cosmetics Export",
    "text": "Tendoni has been our go-to partner for cosmetics export from India. Their commitment to quality extends beyond food products. The consistency in the quality of cosmetic ingredients and the reliability of their services have made Tendoni an indispensable collaborator for our business.",
    // "author": "Dr. Sophia Martinez, Director - Beauty Essentials Inc."
  },
  {
    "id": 5,
    "title": "Global Impact, Local Integrity",
    "text": "Choosing Tendoni goes beyond just sourcing products. It's about supporting a company that values local communities and sustainable practices. Tendoni's global impact is complemented by their commitment to ethical sourcing and fair trade. Proud to be associated with them!",
    // "author": "Alex Johnson, Sustainable Business Advocate"
  },
  {
    "id": 6,
    "title": "Pharmaceutical Excellence",
    "text": "Tendoni's pharmaceutical exports have consistently met and exceeded international standards. The precision in their processes, coupled with a focus on quality assurance, makes Tendoni a reliable supplier in the pharmaceutical industry. Trustworthy and professional!",
    // "author": "Dr. Amit Patel, Pharma Solutions Ltd."
  }
];

export const portfolioItems = {
  All: [
    {
      category: "card",
      title: "",
      imgSrc: "images/spoonMasala.avif",
      lightboxTitle: "Card 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "App 3",
    },
    {
      category: "web",
      title: "",
      imgSrc: "images/veg.avif",
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: "images/veg.avif",
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: "images/veg.avif",
      lightboxTitle: "Web 2",
    },
    // Add more items for 'All' category if needed
  ],
  Spices: [
    {
      category: "web",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "Web 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "Card 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "App 3",
    },
    {
      category: "card",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "Card 2",
    },
    // Add more items for 'Card' category if needed
  ],

  RawSpices: [
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    // Add more items for 'Card' category if needed
  ],
  Vegetables: [
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },

    // Add more items for 'Web' category if needed
  ],
  Greens: [
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },

    // Add more items for 'Web' category if needed
  ],
  Pharmaceutical: [
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",

    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "card",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Card 2",
    },
    {
      category: "web",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "Web 2",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },
    {
      category: "app",
      title: "",
      imgSrc: RedChilliPowder,
      lightboxTitle: "App 3",
    },

    // Add more items for 'Web' category if needed
  ],
};
export const anotherCategoryPhotos = {
  Pharmaceuticals: [
    {
      category: "card",
      title: "Vegetables",
      imgSrc: VegetableImage,
      lightboxTitle: "Vegetables",
      link:"/food-division/vegetable"
    },
    {
      category: "card",
      title: "Fruits",
      imgSrc: FruitsImage,
      lightboxTitle: "Fruits",
      link:"/food-division/vegetable"
    },
    {
      category: "app",
      title: "Grains",
      imgSrc: GrainsImage,
      lightboxTitle: "Grains",
      link:"/food-division/Grains"
    },
    {
      category: "web",
      title: "Masala",
      imgSrc: MasalaImage,
      lightboxTitle: "Masala",
      link:"/food-division/Spices"
    },
    {
      category: "card",
      title: "Fertilizers",
      imgSrc: FertilizersImage,
      lightboxTitle: "Fertilizers",
      link:"/chemical-Division/fertilizers"
    },
    {
      category: "web",
      title: "Pharmaceuticals",
      imgSrc: PharmaImage,
      lightboxTitle: "Pharmaceuticals",
      link:"/chemical-Division/pharmaceutical"
    },
    {
      category: "card",
      title: "Food Chemical",
      imgSrc: FoodChemicalImage,
      lightboxTitle: "Food Chemical",
      link:"/chemical-Division/foodChemical"
    },
    {
      category: "web",
      title: "",
      imgSrc: Spices,
      lightboxTitle: "Web 2",
      link:""
    },
    // Add more items for 'All' category if needed
  ]

};
export const anotherItemsMenu = [
  { label: 'Food Division ', id: 'Food', subHeader: 'Food Division', backgroundImg: 'https://i.pinimg.com/originals/b3/ac/93/b3ac935f556fe254403a688d36fff3c0.jpg', url: '/', childMenu: false, labelBody1: 'At Tendoni Group, we take pride in being a leading player in the food industry, dedicated to exporting a diverse range of high-quality products across the globe. With a commitment to excellence and a passion for delivering the finest, freshest, and most flavorful produce, masala, fruits, and vegetables. spices, and grains, we have established ourselves as a trusted partner for customers worldwide.',heading:"Our Product Portfolio:", dataArray:["1.	Fruits and Vegetables","2.	Masala and Spices ","3.	Grains: "]},
  { label: 'Chemical Division', id: 'Chemical', subHeader: 'Chemical Division', backgroundImg: 'https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=', url: '/about-us', childMenu: true, labelBody1: 'TENDONI GROUP is a renowned trading, exporting, research and development company that deals in a variety of product such as fruits and vegetables ,grains,beverages,cosmetics & chemicals.We operate with a prime objective of providing solutions to optimize farm productivity, focusing on total quality control, innovation and responsive care towards the environment to our global consumers across the world.', heading:"Our Specialized Product Range:", dataArray:["1.	Preservatives and Additives and Antioxidants","2.	Emulsifiers and Stabilizers ","3.	Acidulants and pH Adjusters"]},
  { label: 'Pharma Division', id: 'Pharma', subHeader: 'Pharma Division', backgroundImg: 'https://i.pinimg.com/originals/b3/ac/93/b3ac935f556fe254403a688d36fff3c0.jpg', url: '', childMenu: true, labelBody1: "The Company is one of the most diversified and highly regarded export business houses in Middle East. It takes pride in its past and looks to the future with confidence and a renewed commitment to maintain and enhance the services across the globe .. One Earth Distribution Policy.",heading:"Our Comprehensive Pharmaceutical Portfolio:", dataArray:["1.	Life-Saving Medications","2.	Generic Pharmaceuticals","3.	Specialty Medicines","4.	Vaccines and Immunizations"]},
  // { label: 'Cosmetics', id: 'Cosmetics', subHeader: 'Cosmetics', backgroundImg: 'https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=', url: '', childMenu: true,  labelBody1: 'We at Tendoni Group provide export services and engage to connecting suppliers, farmers and users across India and International market',heading:"Our Comprehensive Pharmaceutical Portfolio:", dataArray:["1.	Life-Saving Medications","2.	Generic Pharmaceuticals","3.	Specialty Medicines","4.	Vaccines and Immunizations"] },
  { label: 'International Trade', id: 'International', subHeader: 'International Trade', backgroundImg: 'https://i.pinimg.com/originals/b3/ac/93/b3ac935f556fe254403a688d36fff3c0.jpg', url: '', childMenu: true,labelBody1: "The Company is one of the most diversified and highly regarded export business houses in Middle East. It takes pride in its past and looks to the future with confidence and a renewed commitment to maintain and enhance the services across the globe .. One Earth Distribution Policy.",heading:"Our Global Export Portfolio:", dataArray:["1.	Fruits and Vegetables","2.	Masala and Spices","3.	Pharmaceutical","4. Grains"] },
  { label: 'Distribution', id: 'Distribution', subHeader: 'Distribution', backgroundImg: 'https://i.pinimg.com/originals/b3/ac/93/b3ac935f556fe254403a688d36fff3c0.jpg', url: '', childMenu: true,labelBody1: "The Company is one of the most diversified and highly regarded export business houses in Middle East. It takes pride in its past and looks to the future with confidence and a renewed commitment to maintain and enhance the services across the globe .. One Earth Distribution Policy.",heading:"Our Global Export Portfolio:", dataArray:["1.	Fruits and Vegetables","2.	Masala and Spices","3.	Pharmaceutical","4. Grains"] },

  // { label: 'International Trade', id: 'trade', url: '/international-trade', childMenu: false },
  // { label: 'Contact Us', id: 'contact', url: '/contact-us', childMenu: false },
];