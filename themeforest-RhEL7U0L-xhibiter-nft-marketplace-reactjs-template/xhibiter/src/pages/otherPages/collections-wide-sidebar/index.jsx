import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Collections from "@/components/pages/collections-wide-sidebar/Collections";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Collcetions Wide Sidebar || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function CollectionWideSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="mt-24">
        <Collections />
      </main>
      <Footer1 />
    </>
  );
}
