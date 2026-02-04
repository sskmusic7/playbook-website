import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/pages/edit-profile/Banner";
import EditProfile from "@/components/pages/edit-profile/EditProfile";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Edit Profile || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function EditProfilePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Banner />
        <EditProfile />
      </main>
      <Footer1 />
    </>
  );
}
