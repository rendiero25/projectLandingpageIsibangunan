import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import ProductMedia from "./components/ProductMedia";
import ProductPrice from "./components/ProductPrice";
import WhySection from "./components/WhySection";
import CompanySection from "./components/CompanySection";
import Bannercta from "./components/BannerCTA";
import Footer from "./components/Footer";

const App = () => {
  return(
    <BrowserRouter>
        <div className="">
          <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
          </div>
        
          <ProductMedia />
          <ProductPrice />
          <WhySection />
          <CompanySection />
          <Bannercta />
          <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App;