import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/pages/user/Banner";
import Collcetions from "@/components/pages/user/Collcetions";
import Profile from "@/components/pages/user/Profile";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "User || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function UserPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Banner />
        <Profile />
        <Collcetions />
      </main>
      <Footer1 />
    </>
  );
}
