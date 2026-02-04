import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Tos from "@/components/pages/Tos";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Terms of Service || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function TermsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Tos />
      </main>
      <Footer1 />
    </>
  );
}
