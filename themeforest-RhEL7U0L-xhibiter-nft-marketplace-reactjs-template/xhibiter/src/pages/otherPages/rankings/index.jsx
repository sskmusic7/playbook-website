import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Ranking from "@/components/pages/Ranking";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Rankings || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function RankingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Ranking />
      </main>
      <Footer1 />
    </>
  );
}
