import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import NewsLetter from "@/components/resources/NewsLetter";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "News Letter || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function NewsLatterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <NewsLetter />
      </main>
      <Footer1 />
    </>
  );
}
