import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/app-layout/AppLayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import GoogleInformationPage from "./pages/googleInformation/GoogleInformationPage";
import json_data_pages from "./json/dataRoutes.json";

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
      element: <HomePage />,
    },
    {
      path: "/join-team",
      label: "Join The Team",
      element: <HomePage />,
    },
  ],
  "Deleting data": [
    {
      path: "/google_information",

      element: <GoogleInformationPage type={1} 
                                      url="bannerGoogleInformation.png"
                                      content={json_data_pages['google_information']} 
      />,
    },
    {
      path: "/social_networks",
      element: <GoogleInformationPage type={2} 
                                      url="socialNetwork.png"
                                      content={json_data_pages['social_networks']}
      />,
    },
    {
      path: "/blogs_forums",
      element: <GoogleInformationPage type={3} 
                                      url="blogsForums.png"
                                      content={json_data_pages['blogs_forums']}
      />,
    },
    {
      path: "/digital_media",
      element: <GoogleInformationPage type={4} 
                                      url="digitalMedia.png"
                                      content={json_data_pages['digital_media']}
      />,
    },
    {
      path: "/video_photography",
      element: <GoogleInformationPage type={5} 
                                      url="videosPhotografias.png"
                                      content={json_data_pages['video_photography']}
      />,
    },
    {
      path: "/mentions_comments",
      element: <GoogleInformationPage type={6} 
                                      url="mentionsComments.png"
                                      content={json_data_pages['mentions_comments']}
      />,
    }
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
      element: <HomePage />,
    },
  ],
  Clients: [
    {
      path: "/confidentially",
      label: "Confidentially",
      element: <HomePage />,
    },
    {
      path: "/reputation-crisis",
      label: "Reputation crisis",
      element: <HomePage />,
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
      element: <HomePage />,
    },
    {
      path: "/cookies-policy",
      label: "Cookies policy",
      element: <HomePage />,
    },
    {
      path: "/gdpr",
      label: "GDPR",
      element: <HomePage />,
    },
  ],
};

const Router = () =>
  createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: Object.values(Routes).flatMap((v) => v),
    },
  ]);

export default Router;
