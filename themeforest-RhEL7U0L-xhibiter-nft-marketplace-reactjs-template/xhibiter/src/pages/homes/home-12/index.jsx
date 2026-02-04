import Footer1 from "@/components/footer/Footer1";
import Header2 from "@/components/headers/Header2";
import Testimonials from "@/components/homes/common/Testimonials";
import Benefits from "@/components/homes/home-12/Benefits";
import Cta from "@/components/homes/home-12/Cta";
import Faq from "@/components/homes/home-12/Faq";
import Hero from "@/components/homes/home-12/Hero";
import Partners2 from "@/components/homes/home-12/Partners";

import Roadmap from "@/components/homes/home-12/Roadmap";
import Team from "@/components/homes/home-12/Team";

import MetaComponent from "@/components/common/MetaComponent";
import Progress from "@/components/homes/home-12/Progress";
const metadata = {
  title: "Home 12 || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function HomePage12() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <main>
        <Hero />
        <Progress />
        <Partners2 />
        <Faq />
        <Benefits />
        <Team />
        <Roadmap />
        <Testimonials />
        <Cta />
      </main>

      <Footer1 />
    </>
  );
}
