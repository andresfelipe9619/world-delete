import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/app-layout/AppLayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import BannerText from "./pages/googleInformation/BannerText";
import json_data_pages from "./json/dataRoutes.json";
import AboutUs from "./pages/our_company/AboutUs";
import LegalNotice from "./pages/legal-page/LegalNotice";
import CookiesPolicy from "./pages/legal-page/CookiesPolicy";
import GDPR from "./pages/legal-page/GDPR";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Confidentially from "./pages/clients/Confidentially";
import JoinToTeams from "./pages/jointToTeams/JoinToTeams";
import ReputationCrisis from "./pages/clients/ReputationCrisis";
import ContactUs from "./pages/contact/ContactUs";
import FinancialCompilance from "./pages/finacial_data/FinancialCompilance";
import GoogleInformation from "./pages/deletingData/GoogleInformation";
import SocialNetwork from "./pages/deletingData/SocialNetwork";
import BlogsForums from "./pages/deletingData/BlogsForums";
import DigitalMedia from "./pages/deletingData/DigitalMedia";
import VideoPhotography from "./pages/deletingData/VideoPhotography";
import MentionsComments from "./pages/deletingData/MentionsComments";


export const Routes = {
  "Our company": [
    {
      path: "/",
      label: "Main Page",
      element: <HomePage />,
    },
    {
      path: "/about-us",
      label: "About us",
      element: <AboutUs json={json_data_pages} />,
    },
    {
      path: "/join-team",
      label: "Join The Team",
      element: <JoinToTeams />,
    },
  ],
  "Deleting data": [
    {
      path: "/google_information",
      label: "Google Information",
      element: <GoogleInformation 
                        json={json_data_pages['google_information']} 
               />,
    },
    {
      path: "/social_networks",
      label: "Social Networks",
      element: <SocialNetwork
                    json={json_data_pages["social_networks"]}
              />,
    },
    {
      path: "/blogs_forums",
      label: "Blog Forums",
      element: <BlogsForums
              json={json_data_pages["blogs_forums"]}
        />,
    },
    {
      path: "/digital_media",
      label: "Digital Media",
      element: (
        <DigitalMedia
          json={json_data_pages["digital_media"]}
        />
      ),
    },
    {
      path: "/video_photography",
      label: "Video Photography",
      element: (
        <VideoPhotography
          json={json_data_pages["video_photography"]}
        />
      ),
    },
    {
      path: "/mentions_comments",
      label: "Mentions / Comments",
      element: (
        <MentionsComments
          json={json_data_pages["mentions_comments"]}
        />
      ),
    },
  ],
  "Financial data": [
    {
      path: "/introduction",
      label: "introduction",
      element: <HomePage />,
    },
    {
      path: "/delete-records",
      label: "Delete Records",
      element: <HomePage />,
    },
    {
      path: "/financial-compliance",
      label: "Financial Compliance",
      element: <FinancialCompilance 
                      type={1}      
                      json={json_data_pages} 
                      url={'FinancialCompilance.png'}
      />,
    },
  ],
  Clients: [
    {
      path: "/confidentially",
      label: "Confidentially",
      element: <Confidentially />,
    },
    {
      path: "/reputation-crisis",
      label: "Reputation crisis",
      element: <ReputationCrisis />,
    },
    {
      path: "/faq",
      label: "FAQ",
      element: <HomePage />,
    },
    {
      path: "/how-it-work",
      label: "How it work",
      element: <HomePage />,
    },
    {
      path: "/internet-customers",
      label: "Internet customers",
      element: <HomePage />,
    },
  ],
  "Private policy": [
    {
      path: "/legal-notice",
      label: "Legal notice",
      element: <LegalNotice />,
    },
    {
      path: "/cookies-policy",
      label: "Cookies policy",
      element: <CookiesPolicy />,
    },
    {
      path: "/gdpr",
      label: "GDPR",
      element: <GDPR />,
    },
  ],
};

const AuthRoutes = [
  {
    path: "/sign-up",
    label: "Sign Up",
    element: <SignUp />,
  },
  {
    path: "/contact-us",
    label: "Contact us",
    element: <ContactUs />,
  },
  {
    path: "/sign-in",
    label: "Sign In",
    element: <SignIn />,
  },
];

const Router = () =>
  createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: AuthRoutes.concat(Object.values(Routes).flatMap((v) => v)),
    },
  ]);

export default Router;
