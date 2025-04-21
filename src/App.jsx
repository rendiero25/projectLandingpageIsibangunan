import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductMedia from "./components/ProductMedia";
import ProductPrice from "./components/ProductPrice";
import WhySection from "./components/WhySection";
import CompanySection from "./components/CompanySection";
import Testimonial from "./components/Testimonial";
import Bannercta from "./components/BannerCTA";
// import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {
    const sendHeight = () => {
      const height = document.body.scrollHeight;
      window.parent.postMessage({ aiHeight: height }, "*");
    };

    sendHeight();
    window.addEventListener("resize", sendHeight);

    return () => window.removeEventListener("resize", sendHeight);
  }, []);

  return(
    <BrowserRouter>
        <div className="">
          <div className="min-h-screen flex flex-col">
            {/*<Header />*/}
            <Hero />
          </div>
        
          <ProductMedia />
          <ProductPrice />
          <WhySection />
          <CompanySection />
          <Testimonial />
          <Bannercta />
          {/*<Footer />*/}
      </div>
    </BrowserRouter>
    
  )
}

export default App;