import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Partners from "@/components/common/Partners";
import Blogs from "@/components/homes/home-7/Blogs";
import Cta from "@/components/homes/home-7/Cta";
import Faq from "@/components/homes/home-7/Faq";
import Hero from "@/components/homes/home-7/Hero";
import Promo from "@/components/homes/home-7/Promo";
import Service from "@/components/homes/home-7/Service";
import Testimonials from "@/components/common/Testimonials";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 7 || Xhibiter | NFT Marketplace Reactjs Template",
};
export default function HomePage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <Partners />
        <Service />
        <Promo />
        <Testimonials />
        <Faq />
        <Blogs />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
