import "./index.css";
import "swiper/css";
// import "swiper/css/pagination";
import { MetaMaskProvider } from "metamask-react";
import "tippy.js/dist/tippy.css";
import "react-modal-video/css/modal-video.css";
import BuyModal from "@/components/modals/BuyModal";
import BidModal from "@/components/modals/BidModal";
import PropertiesModal from "@/components/modals/PropertiesModal";
import LevelsModal from "@/components/modals/LevelsModal";
import ModeChanger from "@/components/common/ModeChanger";
import HomePage1 from "./pages/homes/home-1";
import { Route, Routes } from "react-router-dom";
import HomePage2 from "./pages/homes/home-2";
import HomePage3 from "./pages/homes/home-3";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import HomePag4 from "./pages/homes/home-4";
import HomePage5 from "./pages/homes/home-5";
import HomePage6 from "./pages/homes/home-6";
import HomePage7 from "./pages/homes/home-7";
import HomePage8 from "./pages/homes/home-8";
import HomePage9 from "./pages/homes/home-9";
import HomePage10 from "./pages/homes/home-10";
import HomePage11 from "./pages/homes/home-11";
import HomePage12 from "./pages/homes/home-12";
import HomePage13 from "./pages/homes/home-13";
import MaintenancePage from "./pages/otherPages/maintenance";
import CaseStudiesPage from "./pages/otherPages/case-studies";
import CaseStudyDetailsPage from "./pages/otherPages/single-case-study";
import CareerPage from "./pages/otherPages/careers";
import ItemDetailsPage from "./pages/otherPages/item";
import CollectionWideSidebarPage from "./pages/otherPages/collections-wide-sidebar";
import CollectionsPage from "./pages/otherPages/collections";
import CollectionSinglePage from "./pages/otherPages/collection";
import ActivityPage from "./pages/otherPages/activity";
import RankingPage from "./pages/otherPages/rankings";
import UserPage from "./pages/otherPages/user";
import EditProfilePage from "./pages/otherPages/edit-profile";
import AboutPage from "./pages/otherPages/about";
import ContactPage from "./pages/otherPages/contact";
import WalletPage from "./pages/otherPages/wallet";
import LoginPage from "./pages/otherPages/login";
import NotFoundPage from "./pages/otherPages/404";
import TermsPage from "./pages/otherPages/tos";
import HelpCenterPage from "./pages/resources/help-center";
import PlatformStatusPage from "./pages/resources/platform-status";
import PartnersPage from "./pages/resources/partners";
import BlogPage from "./pages/resources/blog";
import SinglePostPage from "./pages/resources/single-post";
import NewsLatterPage from "./pages/resources/newsletter";
import CreatePage from "./pages/create";
import HomePageRtl1 from "./pages/homes/home-1-rtl";
import WalletModal from "./components/modals/WalletModal";
if (typeof window !== "undefined") {
  // Import the script only on the client side
  import("bootstrap/dist/js/bootstrap.esm").then(() => {
    // Module is imported, you can access any exported functionality if
  });
}

function App() {
  return (
    <>
      <ModeChanger />
      <MetaMaskProvider>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage1 />} />
            <Route path="home-1" element={<HomePage1 />} />
            <Route path="home-1-rtl" element={<HomePageRtl1 />} />
            <Route path="home-2" element={<HomePage2 />} />
            <Route path="home-3" element={<HomePage3 />} />
            <Route path="home-4" element={<HomePag4 />} />
            <Route path="home-5" element={<HomePage5 />} />
            <Route path="home-6" element={<HomePage6 />} />
            <Route path="home-7" element={<HomePage7 />} />
            <Route path="home-8" element={<HomePage8 />} />
            <Route path="home-9" element={<HomePage9 />} />
            <Route path="home-10" element={<HomePage10 />} />
            <Route path="home-11" element={<HomePage11 />} />
            <Route path="home-12" element={<HomePage12 />} />
            <Route path="home-13" element={<HomePage13 />} />

            <Route path="maintenance" element={<MaintenancePage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route
              path="single-case-study/:id"
              element={<CaseStudyDetailsPage />}
            />
            <Route path="careers" element={<CareerPage />} />
            <Route path="item/:id" element={<ItemDetailsPage />} />
            <Route
              path="collections-wide-sidebar"
              element={<CollectionWideSidebarPage />}
            />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="collection/:id" element={<CollectionSinglePage />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="rankings" element={<RankingPage />} />
            <Route path="user/:id" element={<UserPage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="tos" element={<TermsPage />} />

            <Route path="help-center" element={<HelpCenterPage />} />
            <Route path="platform-status" element={<PlatformStatusPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="single-post/:id" element={<SinglePostPage />} />
            <Route path="newsletter" element={<NewsLatterPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MetaMaskProvider>
      <WalletModal />
      <BuyModal />
      <BidModal />
      <PropertiesModal />
      <LevelsModal />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
