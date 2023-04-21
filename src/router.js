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
          element: (
            <GoogleInformationPage
              type={1}
              content={{
                title: "Erasing Google information",
                text_1: [
                  "We erase any type of prejuducial information that could",
                  "appear in the search engine and that affect your",
                  "reputation. ¡100% guarantee!",
                ],
                text_2: [
                  "Negative information in Internet is every day easier to detect, everyone who can access the Internet could make a research in Google typing your Name and Surname or your company data and easly obtain every kind of information without any filter or limit.",
                  "The majority of the users do not distinguishbetween fake news or false content generated for anonymous users with the aim of prejudicate your digital reputation or yout company credibility. That’s why World Delete developed know-how that permit us to guarantee our job.",
                ],
              }}
            />
          ),
        },
        {
          path: "/social_networks",
          element: (
            <GoogleInformationPage
              type={2}
              content={{
                title: "Content on social networks",
                text_1: [
                  "Would you like to erase your given name and surname from ",
                  "all social networks (Facebook, Twitter, Instagram, Vk,",
                  "Pinterest and others)?",
                ],
                text_2: [
                  "Has anyone created a profile that defames you or your brand? Do you urgently need to remove all traces of the same?",
                  "If you answered YES to either of these questions then you need us to take care of it. These situations are becoming increasingly common in this age of exponential growth of social networks.",
                  "The Internet is becoming more and more dynamic. Content is generated every second, even creating discrepancies as to which content should be active at any one time. ",
                ],
              }}
            />
          ),
        },
        {
          path: "/blogs_forums",
          element: (
            <GoogleInformationPage
              type={3}
              content={{
                title: "Erasing a post in forums or on blogs",
                text_1: [
                  "Is a comment on a forum or blog causing trouble for you?",
                  "We can achieve 100% effective elimination of any publication on forums and blogs.",
                  "We can achieve 100% effective elimination of any publication on forums and blogs.",
                ],
                text_2: ["   ", " ", " "],
              }}
            />
          ),
        },
        {
          path: "/digital_media",
          element: (
            <GoogleInformationPage
              type={4}
              content={{
                title: "Digital media",
                text_1: [
                  "Has your name or brand been published in one or more",
                  "digital media and you want to erase all traces?",
                ],
                text_2: [
                  "Unfortunately, there are more and more digital media on the Internet every day and the information they share is often provided by news distribution agencies or by automated content aggregating systems. This means that the notices are not filtered by a human monitor to check whether said information is true and accurate or not.",
                  "We believe in free speech as a fundamental principle and respect people’s right to express their opinions. Our Code of Ethics is clear and concise on the question of management or removal of content on digital media. Consequently, we examine all requests for deletion from all our potential customers individually, and will not accept an order that would be inconsistent with our internal protocols. ",
                  "In this case, the World Delete team will act to ensure total, guaranteed deletion of the offending material. We will take your case seriously and erase your trail with all the means at our disposal.",
                ],
              }}
            />
          ),
        },
        {
          path: "/video_photography",
          element: (
            <GoogleInformationPage
              type={5}
              content={{
                title: "Erasing videos and photos",
                text_1: [
                  "We are perfectly well aware of the damage an",
                  "undesirable video or photograph that goes",
                  "viral on the Internet can do.",
                ],
                text_2: [
                  "Social networks and Internet search engines are having a greater impact our lives with every passing day. They enable us to share, send or comment on any video or photograph that turns up on our news feeds in a matter of seconds. ",
                  "We are also aware that this facility, under certain circumstances, can ruin your image on the Internet and make it difficult or impossible for you to find a job or keep the one you have and even damage the reputation of your company and brand, thus creating an unexpected reputational crisis. ",
                  "There are hundreds of social networks: it is almost impossible to make an updated list of them since new social communication platforms are created every day. Nevertheless, our technical team knows and controls the technical tools required to erase all content from all platforms regardless of the language in which it is written or the country of origin.",
                ],
              }}
            />
          ),
        },
        {
          path: "/mentions_comments",
          element: (
            <GoogleInformationPage
              type={6}
              content={{
                title: "Mentions and comments",
                text_1: [
                  "More than 80% of all Internet searches are carried ",
                  "out on Google and in addition, 8 out of 10 users ",
                  "check the reviews before consulting the search",
                  "engine's own results.",
                ],
                text_2: [
                  "Users trust Google because it provides us with accurate information in response to any search term. We know that any comment, regardless of whether it is favourable or antagonistic, can tip the balance to one side or the other. ",
                  "World Delete provides the ability to delete all types of Google reviews and comments. ",
                ],
              }}
            />
          ),
        },
      ],
    },
  ]);

export default router;
