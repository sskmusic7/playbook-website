import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import SinglePost from "@/components/resources/SinglePost";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Single Post || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function SinglePostPage() {
  let params = useParams();
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <SinglePost id={params.id} />
      </main>
      <Footer1 />
    </>
  );
}
