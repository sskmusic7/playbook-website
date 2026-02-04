import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";

import Hero from "@/components/homes/home-6/Hero";

import Collections2 from "@/components/homes/common/Collections2";
import Auction from "@/components/homes/common/Auction";
import Categories from "@/components/homes/home-6/Categories";
import Partners from "@/components/common/Partners";
import Cta from "@/components/homes/common/Cta";
import Hotbids from "@/components/homes/home-6/HotBids";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 6 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Hero />
        <Hotbids />
        <Collections2 />
        <Auction />
        <Categories />
        <Partners />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
