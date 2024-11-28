import { ListProps } from "@src/components/List";
import { ComponentType } from "@src/components/RichText";

type RichtextDataType = {
  template: string;
  components: ComponentType[];
  addEmptyLine?: boolean;
};

type AboutDataType = {
  title: string;
  richTextDataArr: RichtextDataType[];
  skillsList: { props: ListProps };
  image: { src: string; alt: string };
};

export const data: AboutDataType = {
  title: "About Me",
  richTextDataArr: [
    {
      template:
        "Hi! My name is Surya, and I love crafting engaging digital experiences that live on the internet. My interest in web development began back in 2017 during my college days when I took on the challenge of recreating our {{1}} wifi portal. What started as a fun experiment taught me the fundamentals of HTML and CSS and sparked my passion for coding.",
      components: [
        {
          type: "link",
          children: "college",
          props: {
            as: "a",
            variant: "ghost-primary",
            href: "https://mvjce.edu.in/",
            className: "about-links",
            target: "_blank",
          },
        },
      ],
    },
    {
      template:
        "Fast forward to today, after honing my skills during a frontend internship at a {{1}}, I'm now building accessible and user-focused frontend applications as part of the talented team at {{2}}, contributing to innovative digital solutions for a variety of clients.",
      components: [
        {
          type: "link",
          children: "start-up",
          props: {
            as: "a",
            variant: "ghost-primary",
            href: "https://icsoln.com/",
            className: "about-links",
            target: "_blank",
          },
        },
        {
          type: "link",
          children: "Accenture",
          props: {
            as: "a",
            variant: "ghost-primary",
            className: "about-links",
            href: "https://www.accenture.com/",
            target: "_blank",
          },
        },
      ],
    },
    {
      template: "Here are a few technologies I've been working with recently:",
      components: [],
      addEmptyLine: false,
    },
  ],
  skillsList: {
    props: {
      isGrid: true,
      gridColumns: 2,
      listItems: [
        "Javascript (ES6+)",
        "Typescript",
        "React.js",
        "Redux.js",
        "Node.js",
        "Sitecore CMS",
      ],
    },
  },
  image: {
    src: "./my-pic.jfif",
    alt: "surya's  image",
  },
};
