import Footer1 from "@/components/footer/Footer1";
import Header4 from "@/components/headers/Header4";
import Partners from "@/components/common/Partners";
import CharecterSlider from "@/components/homes/home-8/CharecterSlider";
import Features from "@/components/homes/home-8/Features";
import Hero from "@/components/homes/home-8/Hero";
import Intro from "@/components/homes/home-8/Intro";
import NewsLatter from "@/components/homes/home-8/NewsLatter";
import Promo from "@/components/homes/home-8/Promo";
import Statictis from "@/components/homes/home-8/Statictis";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 8 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePage8() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header4 />
      <main className="overflow-x-hidden ">
        <Hero />
        <Intro />
        <CharecterSlider />
        <Statictis />
        <Promo />
        <Features />
        <NewsLatter />
        <div className="dark">
          <Partners />
        </div>
      </main>
      <div className="dark">
        <Footer1 />
      </div>
    </>
  );
}
