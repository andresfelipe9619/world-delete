import React from "react";
import FormTriangle from "../home/FormTriangle";
import CustomAccordion from "../../components/client/Accordion";

// accordion array
const items = [
  {
    id: 1,
    title: "What is World Delete?",
    description:
      "The Division that focusses on the protection of the on-line reputation...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 2,
    title: "Are World Delete services confidential?",
    description:
      "Yes. With World Delete you can be sure: World Delete signs a Non-Disclosu...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 3,
    title: "How does  World Delete work?",
    description:
      "World Delete’s service consists of making unwanted contents “invisible” in...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 4,
    title: "Can I eliminate an article from a news Website on the Internet?",
    description:
      "Yes, with World Delete it is possible to delete any information that is...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 5,
    title: "Does World Delete delete content from Google?",
    description:
      "World Delete’s service consists of making unwanted contents “ removed”...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 6,
    title: "What happens if I am not satisfied with the results?",
    description:
      "If the content is erased or modified, which happens 99% of the time...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
    showIcon: true,
  },
  {
    id: 7,
    title: "Can I eliminate an article from a news Website on the Internet?",
    description:
      "Yes, with World Delete it is possible to delete any information that is...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 8,
    title:
      "How long does World Delete take to eliminate information from the Internet?",
    description:
      "Depending on the case, the number of links, the content of the link and...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 9,
    title: "Who can use World Delete's services?",
    description:
      "Private Companies, Individuals and Governments who want to remove...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 10,
    title:
      "Can World Delete delete any information in any language from the Internet?",
    description: "Yes, In any language and from any part of the world.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 11,
    title:
      "Once World Delete has deleted the content is it possible for it to reappear?",
    description:
      "No. Once removed, the same link and the same page cannot be...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 12,
    title: "How much does it cost to delete my information from the Internet?",
    description:
      "It depends on the case, the number of links and the page where the...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
  {
    id: 13,
    title: "How can I see when a link or some information has been deleted?",
    description: "We offer exclusive intranet access for clients.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend feugiat semper. Nunc feugiat erat id dui hendrerit pretium. Praesent ut elit arcu. Duis vehicula, sapien ut consequat sodales, odio quam bibendum elit, eu ultrices nisi neque vitae sapien. Praesent laoreet mi vel velit bibendum lacinia. Nullam convallis dolor vel risus fermentum molestie. Sed quis diam quam. Aliquam erat volutpat. Sed viverra congue nunc at tristique. Duis sit amet lacinia dolor. Nunc non mauris id arcu malesuada sagittis sed in nunc. Vivamus at sapien lacinia, gravida nibh sed, faucibus velit. Sed volutpat, sapien eget blandit porttitor, libero justo tristique nisi, a pulvinar nisl purus non metus.",
  },
];

const Faq = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        background: "#060505",
      }}
    >
      <CustomAccordion items={items} />
      <FormTriangle />
    </div>
  );
};

export default Faq;
