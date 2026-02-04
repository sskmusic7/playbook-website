import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import HelpCenter from "@/components/resources/help-center/HelpCenter";
import PageTitle from "@/components/resources/help-center/PageTitle";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Help Center || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function HelpCenterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <PageTitle />
        <HelpCenter />
      </main>
      <Footer1 />
    </>
  );
}
