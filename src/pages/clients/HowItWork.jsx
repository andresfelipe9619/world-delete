import React from "react";
import CustomAccordion from "../../components/client/Accordion";
import TimelineExample from "../../components/client/TimeLine";
import FormTriangle from "../home/FormTriangle";
import BannerText from "../googleInformation/BannerText";
import useResponsive from "../../hooks/useResponsive";

// accordion array
const items = [
  {
    id: 1,
    title: "What is Removal of an URL?",
    description:
      "The content is totally deleted from the Internet and its search engines...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 2,
    title: "What is Modification of content?",
    description:
      "Unwanted content is changed. The customer’s or company’s name is ...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 3,
    title: "What is De-indexing of information on the Internet?",
    description:
      "The content is removed from Internet search engines. The search fails to ...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
];

// time line array
const events = [
  {
    title: "Item 1",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ante quis mauris sollicitudin porttitor. Sed elementum dictum lectus, at hendrerit nisi interdum a.",
  },
  {
    title: "Item 2",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum a nibh quis rutrum. Nullam fringilla mauris eget turpis maximus vehicula. Donec rhoncus convallis ex, ut tristique dolor pellentesque ut.",
  },
  {
    title: "Item 3",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet dolor sit amet ipsum congue, vitae feugiat elit volutpat. Suspendisse scelerisque facilisis libero, eu laoreet tellus vestibulum eget.",
  },
  {
    title: "Item 4",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id arcu massa. Sed nec justo sit amet ex vehicula malesuada vel sit amet tortor. Nullam malesuada justo vel tellus bibendum, eu lacinia turpis placerat.",
  },
  {
    title: "Item 5",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet libero ut magna auctor, vel tincidunt mauris gravida. Nullam ut elit nec elit suscipit cursus. Integer eget ligula malesuada, pulvinar felis in, feugiat enim.",
  },
  {
    title: "Item 6",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper ex vel sem euismod, vel auctor neque scelerisque. Praesent congue felis vel ligula hendrerit sagittis. Sed hendrerit eget sapien ac aliquam.",
  },
];

const bannerStyle = {
  title: "How it work",
  text_1: [
    "Here at World Delete we believe that procuring our",
    "services operation of the same should be simple and ",
    "pragmatic.",
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
  triangleVisible: false,
};

const HowItWork = () => {
  const { isSmallScreen } = useResponsive();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <BannerText content={bannerStyle} url={"how-it-works.png"} />
      {!isSmallScreen && <CustomAccordion items={items} />}
      <TimelineExample events={events} />
      <FormTriangle />
    </div>
  );
};

export default HowItWork;
