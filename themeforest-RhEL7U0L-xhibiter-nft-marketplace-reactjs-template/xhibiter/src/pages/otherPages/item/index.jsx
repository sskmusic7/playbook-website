/* eslint-disable react/prop-types */
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import ItemDetails from "@/components/pages/item/ItemDetails";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Item Details || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function ItemDetailsPage() {
  let params = useParams();
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="mt-24">
        <ItemDetails id={params.id} />
      </main>
      <Footer1 />
    </>
  );
}
