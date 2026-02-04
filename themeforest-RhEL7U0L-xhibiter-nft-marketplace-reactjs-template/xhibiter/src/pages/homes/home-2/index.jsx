import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Collections from "@/components/homes/common/Collections";
import Process from "@/components/homes/common/Process";
import Auction from "@/components/homes/common/Auction";
import Featured from "@/components/homes/common/Featured";
import Hero from "@/components/homes/home-2/Hero";
import Partners from "@/components/common/Partners";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 2 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
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
