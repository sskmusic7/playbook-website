import Login from "@/components/pages/Login";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Login || Xhibiter | NFT Marketplace Reactjs Template",
};

export default function LoginPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Login />
    </>
  );
}
