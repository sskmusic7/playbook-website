/* eslint-disable react/prop-types */
import Partners from "@/components/common/Partners";
import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Testimonials from "@/components/common/Testimonials";
import Approach from "@/components/pages/case-studies/Approach";
import Post from "@/components/pages/case-studies/Post";
import RelatedPost from "@/components/pages/case-studies/RelatedPost";
import Result from "@/components/pages/case-studies/Result";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Case Study Details || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function CaseStudyDetailsPage() {
  let params = useParams();
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Post id={params.id} />
        <Approach />
        <Result />
        <Testimonials />
        <RelatedPost />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
