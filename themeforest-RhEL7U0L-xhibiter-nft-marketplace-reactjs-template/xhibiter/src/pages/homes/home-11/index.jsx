import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Partners from "@/components/common/Partners";
import CryptoPrice from "@/components/homes/home-11/CryptoPrice";
import Features from "@/components/homes/home-11/Features";
import Hero from "@/components/homes/home-11/Hero";
import Invest from "@/components/homes/home-11/Invest";
import Process from "@/components/homes/home-11/Process";
import Statictis from "@/components/homes/home-11/Statictis";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 11 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePage11() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <CryptoPrice />
        <Statictis />
        <Features />
        <Invest />
        <Process />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
