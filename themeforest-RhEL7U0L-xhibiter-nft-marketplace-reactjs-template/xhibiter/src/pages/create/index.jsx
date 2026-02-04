import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Create from "@/components/create/Create";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Create || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function CreatePage() {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Header1 />
      <main>
        <Create />
      </main>
      <Footer1 />
    </>
  );
}
