


import Header from "./component/Header/header"
import NavbarMenu from "./component/NavbarMenu/NavbarMenu"
import HeroSection from "./component/HeroSection/HeroSection"
import ServiceInfo from "./component/ServiceInfo/ServiceInfo"
import Browser_Category from "./component/BrowserCategory/Browser_Category"
import Product from "./component/product/page"
import Seller from "./component/seller/page"
import Enhance from "./component/Enhance/page"
import FeedBack from "./component/feedback/page"
import Footer from "./component/Footer/page"
import SybscribeBanner from "./component/subscribeBanner/page"
  

export default function Home() {
  return (
    <>
      {/* <Header />

      <NavbarMenu /> */}

      <HeroSection />
      <ServiceInfo />
      <Browser_Category />
      <Product />
      <Seller />

      {/* <Enhance /> */} 

      <FeedBack /> 
      <SybscribeBanner />
      
      {/* <Footer /> */}
      {/* <Offer /> */}


    </>
  );
}
