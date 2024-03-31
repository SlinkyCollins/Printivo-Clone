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
            imageUrl="../src/assets/two-sided.png"
            amount=" ₦15,100"
            quantity={100}
          />
          <Card 
            title="A5 flyers (Single Sided)"
            imageUrl="../src/assets/flyer2.png"
            amount=" ₦25,800"
            quantity={100}
          />
          <Card
            title="Round Stickers (3.5'' Diameter)"
            imageUrl="../src/assets/roundsticker.png"
            amount=" ₦17,000"
            quantity={100} 
          />
          <Card
            title="Simple Mugs"
            imageUrl="../src/assets/mugs.png"
            amount=" ₦4,800"
            quantity={1} 
          />
          <Card
            title="Postcards (A6)"
            imageUrl="../src/assets/postcard.jpg"
            amount=" ₦22,300"
            quantity={50} 
          />
          <Card
            title="Roll Up Banners (Big Base)"
            imageUrl="../src/assets/rollup-banner.png"
            amount=" ₦55,000"
            quantity={1} 
          />
          <Card
            title="A2 Posters"
            imageUrl="../src/assets/drycleaners.png"
            amount=" ₦71,000"
            quantity={100} 
          />
          <Card
            title="Trifold Brochures"
            imageUrl="../src/assets/brochure printing.png"
            amount=" ₦47,500"
            quantity={100} 
          />
          <Card
            title="Landscape ID Cards"
            imageUrl="../src/assets/company name card.png"
            amount=" ₦3,100"
            quantity={1} 
          />
          <Card 
            title="Off White T-shirts"
            imageUrl="../src/assets/white t-shirt.png"
            amount=" ₦6,000"
            quantity={1} 
          />
          <Card
            title="A4 Branded Paper Bags"
            imageUrl="../src/assets/clothing.png"
            amount=" ₦104,800"
            quantity={100} 
          />
          <Card
            title="A4 Courier Bags"
            imageUrl="../src/assets/printivo bag.jpeg"
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
