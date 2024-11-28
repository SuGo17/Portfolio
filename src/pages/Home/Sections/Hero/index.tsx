import { FC } from "react";
import Section from "@components/Section";
import { data } from "./data";
import useGetStyleSelectors from "@Hooks/useGetStyleSelectors";
import modules from "./index.module.scss";
import Button from "@components/Button";

const Hero: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Section
      className={getSCSSSelectors("hero")}
      width="max-w-screen-lg"
      paddingVerticle={["py-[104px]"]}
    >
      <h1 className={getSCSSSelectors("name")}>
        {data.name.firstname}{" "}
        <span className="inline-block">{data.name.lastname}</span>
      </h1>
      <h2 className={getSCSSSelectors("title")}>{data.title}</h2>
      <p className={getSCSSSelectors("job-details")}>
        {data.company.role} at{" "}
        <Button
          as="a"
          variant="ghost-primary"
          href={data.company.href}
          className={getSCSSSelectors("company-name")}
        >
          {data.company.title}
        </Button>
        .
      </p>
      <Button
        as="a"
        variant="contained-primary"
        href={data.cta.href}
        className={getSCSSSelectors("cta")}
      >
        {data.cta.text}
      </Button>
    </Section>
  );
};

export default Hero;
