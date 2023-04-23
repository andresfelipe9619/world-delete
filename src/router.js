import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/app-layout/AppLayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/auth/Profile";
import GoogleInformationPage from "./pages/googleInformation/GoogleInformationPage";
import json_data_pages from "./json/dataRoutes.json";

const router = () =>
  createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
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
    },
  ]);

export default router;
