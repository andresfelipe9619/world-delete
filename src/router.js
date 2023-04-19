import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/app-layout/AppLayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/auth/Profile";
import GoogleInformationPage from "./pages/googleInformation/GoogleInformationPage";

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
          element: <GoogleInformationPage />,
        }
      ],
    },
  ]);

export default router;
