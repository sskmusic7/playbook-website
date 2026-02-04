import Footer1 from "@/components/footer/Footer1";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/pages/maintenance/Hero";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Maintenance || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function MaintenancePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <main>
        <Hero />
      </main>
      <Footer1 />
    </>
  );
}
