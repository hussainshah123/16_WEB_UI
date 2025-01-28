import { MdOutlineStarRate } from "react-icons/md";
import './App.css';
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";
import Categories from "./components/Categories.jsx";
import CategoriesGrid from "./components/CategoriesGrid.jsx";
import CardSlider from "./components/cardslider.jsx";
import Footer from "./components/footer.jsx";
function App() {

  return (
    <>

      <Navbar />
      <Home />
       <Card />
       <Categories/>
       <CategoriesGrid/>
<CardSlider/>
<Footer/>
    </>
  )
}

export default App
