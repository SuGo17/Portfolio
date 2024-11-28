import { FC } from "react";
import modules from "./index.module.scss";
import Header from "@src/components/Header";
import Section from "@src/components/Section";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import RichText from "@src/components/RichText";
import { data } from "./data";
import List from "@src/components/List";

const About: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Section
      className={getSCSSSelectors("about")}
      width="max-w-screen-lg"
      id="about-me-section"
    >
      <Header className="mb-14 md:mb-10">{data.title}</Header>
      <div className={getSCSSSelectors("content")}>
        <div className={getSCSSSelectors("left")}>
          {data.richTextDataArr.map((richTextData, index) => (
            <RichText
              key={index}
              template={richTextData.template}
              components={richTextData.components}
              getParentCSSSelectors={getSCSSSelectors}
              addEmptyLine={richTextData.addEmptyLine}
            />
          ))}
          <List
            {...data.skillsList.props}
            className={getSCSSSelectors("skills")}
          />
        </div>
        <div className={getSCSSSelectors("right")}>
          <img src={data.image.src} alt={data.image.alt} />
        </div>
      </div>
    </Section>
  );
};

export default About;
