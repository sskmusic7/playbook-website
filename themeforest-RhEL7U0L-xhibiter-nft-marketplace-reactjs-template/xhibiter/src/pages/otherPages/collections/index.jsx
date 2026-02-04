import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Collections from "@/components/pages/Collections";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Collcetions || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function CollectionsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Collections />
      </main>
      <Footer1 />
    </>
  );
}
