import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Section from "@src/components/Section";
import Header from "@src/components/Header";
import Text from "@src/components/Text";
import Button from "@src/components/Button";

const Contact: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Section width="max-w-screen-lg" id="contact-section">
      <div className={getSCSSSelectors("contact-details-container")}>
        <Header className={getSCSSSelectors("heading")}>What's Next?</Header>
        <Header numberedHeading={false} className={getSCSSSelectors("title")}>
          Get In Touch
        </Header>
        <Text className={getSCSSSelectors("message")}>
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email, I'll try my best to get back to you!
        </Text>
        <Button
          as="a"
          href="mailto:kotisurya6@gmail.com"
          variant="contained-primary"
          className={getSCSSSelectors("cta")}
        >
          Say Hello
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
