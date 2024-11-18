import { FC } from "react";
import modules from "./index.module.scss";
import Header from "@src/components/Header";
import Section from "@src/components/Section";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import RichText from "@src/components/RichText";

const About: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Section className={getSCSSSelectors("about")} width="max-w-screen-xl">
      <Header className="mb-10">About Me</Header>
      <RichText
        template="Hello! My name is Sura and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr {{1}} — turns out hacking together
        a custom reblog button taught me a lot {{2}} HTML & {{3}}."
        components={[
          {
            type: "link",
            children: "First",
            props: {
              as: "a",
              variant: "ghost-secondary",
              href: "https://www.suryakotikiran.in",
            },
          },
          {
            type: "link",
            children: "Second",
            props: {
              as: "a",
              variant: "ghost-secondary",
              href: "https://www.suryakotikiran.in",
            },
          },
          {
            type: "link",
            children: "Third",
            props: {
              as: "a",
              variant: "ghost-secondary",
              href: "https://www.suryakotikiran.in",
            },
          },
        ]}
      />
    </Section>
  );
};

export default About;
