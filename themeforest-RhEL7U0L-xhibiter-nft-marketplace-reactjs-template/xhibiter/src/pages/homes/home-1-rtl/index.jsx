import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Categories from "@/components/homes/common/Categories";
import Collections from "@/components/homes/common/Collections";
import Hero from "@/components/homes/home-1/Hero";
import Hotbids from "@/components/homes/home-1/Hotbids";
import Process from "@/components/homes/common/Process";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 1 RTL || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePageRtl1() {
  return (
    <div dir="rtl">
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <Hotbids />
        <Collections />
        <Categories />
        <Process />
      </main>
      <Footer1 />
    </div>
  );
}
