import Partners from "@/components/common/Partners";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import CaseStudies from "@/components/pages/case-studies";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Case Studies || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function CaseStudiesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <CaseStudies />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
