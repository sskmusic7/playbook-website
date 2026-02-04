import Footer1 from "@/components/footer/Footer1";

import Header3 from "@/components/headers/Header3";
import Auction from "@/components/homes/common/Auction";
import Collections from "@/components/homes/common/Collections";
import Process from "@/components/homes/common/Process";
import Featured from "@/components/homes/common/Featured";
import CoverFlowSlider from "@/components/homes/home-4/CoverFlowSlider";
import Hero from "@/components/homes/home-4/Hero";

import Partners from "@/components/common/Partners";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 4 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePag4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
      <main>
        <Hero />
        <CoverFlowSlider />
        <Collections />
        <Auction />
        <Process />
        <Featured />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
