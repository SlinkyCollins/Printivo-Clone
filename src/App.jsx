import './App.css'
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Product from './components/Product.jsx';
import Card from './components/Card.jsx';
import Category from './components/Category.jsx';
import Logo from './components/Logo.jsx';
import Review from './components/Review.jsx';
import Feature from './components/Feature.jsx';
import Notices from './components/Notices.jsx';
import Footer from './components/Footer.jsx';

import twosided from "../src/assets/two-sided.png"
import flyer2 from "../src/assets/flyer2.png"
import roundsticker from "../src/assets/roundsticker.png"
import mugs from "../src/assets/mugs.png"
import postcard from "../src/assets/postcard.jpg"
import rollupbanner from "../src/assets/rollup-banner.png"
import drycleaners from "../src/assets/drycleaners.png"
import brochureprinting from "../src/assets/brochure printing.png"
import companynamecard from "../src/assets/company name card.png"
import whitetshirt from "../src/assets/white t-shirt.png"
import clothing from "../src/assets/clothing.png"
import printivobag from "../src/assets/printivo bag.jpeg"

function App() {

  return (
    <div>
      <Navbar/>
      <Main/>
      <Product/>
        <div className="product"
          style= {{
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gridGap: "5px", 
            margin: "0px 40px 0px 40px"
          }}>
          <Card
            title="Two-sided Business Cards"
            imageUrl={twosided}
            amount=" ₦15,100"
            quantity={100}
          />
          <Card 
            title="A5 flyers (Single Sided)"
            imageUrl={flyer2}
            amount=" ₦25,800"
            quantity={100}
          />
          <Card
            title="Round Stickers (3.5'' Diameter)"
            imageUrl={roundsticker}
            amount=" ₦17,000"
            quantity={100} 
          />
          <Card
            title="Simple Mugs"
            imageUrl={mugs}
            amount=" ₦4,800"
            quantity={1} 
          />
          <Card
            title="Postcards (A6)"
            imageUrl={postcard}
            amount=" ₦22,300"
            quantity={50} 
          />
          <Card
            title="Roll Up Banners (Big Base)"
            imageUrl={rollupbanner}
            amount=" ₦55,000"
            quantity={1} 
          />
          <Card
            title="A2 Posters"
            imageUrl={drycleaners}
            amount=" ₦71,000"
            quantity={100} 
          />
          <Card
            title="Trifold Brochures"
            imageUrl={brochureprinting}
            amount=" ₦47,500"
            quantity={100} 
          />
          <Card
            title="Landscape ID Cards"
            imageUrl={companynamecard}
            amount=" ₦3,100"
            quantity={1} 
          />
          <Card 
            title="Off White T-shirts"
            imageUrl={whitetshirt}
            amount=" ₦6,000"
            quantity={1} 
          />
          <Card
            title="A4 Branded Paper Bags"
            imageUrl={clothing}
            amount=" ₦104,800"
            quantity={100} 
          />
          <Card
            title="A4 Courier Bags"
            imageUrl={printivobag}
            amount=" ₦27,500"
            quantity={100} 
          />
        </div>
      <Category />
        <div className="category"
          style= {{
              display: "flex",
              gap: "10px",
              margin: "0px 0px 0px 40px",
              flexWrap: "wrap",
          }}>
          <Card
            title="Greeting Cards"
            imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png"
            amount=" ₦29,800"
            quantity={50} 
          />
          <Card
            title="Stickers"
            imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png"
            amount=" ₦5,400"
            quantity={75} 
          />
        </div>
      <Logo/>
      <Review/>
      <Feature/>
      <Notices/>
      <Footer/>
    </div>
  )
}

export default App
