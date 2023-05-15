import React from "react";
import BannerText from "../google-Information/BannerText";

const bannerStyle = {
  title: "Monitor everything from your exclusive customer area",
  text_1: [
    "Keep track of how deletion of the links of interest is going from your private customer",
    "area. Every time a link is deleted or modified you will receive an automatic notification on ",
    "your panel and in your email to ensure that you are informed at all times, 24/7. ",
  ],
  text_2: [],
  class_1: "",
  class_2: "",
  class_3: "",
  class_4: "",
  class_5: "",
  class_6: "",
  box_primary: "",
  box_secondary: "",
  triangleVisible: true,
};

const InternetCustomer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        background: "#060505",
      }}
    >
      <BannerText content={bannerStyle} url={"InternetCustomers.png"} />
    </div>
  );
};

export default InternetCustomer;
