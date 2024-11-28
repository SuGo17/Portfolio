import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Section from "@src/components/Section";
import Header from "@src/components/Header";
import Button from "@src/components/Button";
import List from "@src/components/List";
import { data } from "./data";

const Experiance: FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<HTMLElement[]>([]);

  const getSCSSSelectors = useGetStyleSelectors(modules);
  const containerStyleProps = {
    "--selected-tab": activeTabId,
  } as CSSProperties;

  const focusTab = () => {
    if (tabFocus === null) return;
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (tabFocus === null) return;
    switch (e.key) {
      case "ArrowUp": {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case "ArrowDown": {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  const onClick = (index: number) => {
    setActiveTabId(index);
    setTabFocus(index);
  };

  return (
    <Section width="max-w-screen-lg" id="experience-section">
      <Header className="mb-14 md:mb-10">Experiance</Header>

      <div
        className={getSCSSSelectors("jobs-container")}
        style={containerStyleProps}
      >
        <div
          className={getSCSSSelectors("tab-list")}
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          {data.map((company, index) => (
            <button
              key={index}
              ref={(el: HTMLButtonElement) => (tabs.current[index] = el)}
              className={getSCSSSelectors(
                "tab-button",
                activeTabId === index ? "tab-active" : ""
              )}
              id={`tab-${index}`}
              role="tab"
              onClick={() => {
                onClick(index);
              }}
              tabIndex={activeTabId === index ? 0 : -1}
              aria-selected={activeTabId === index ? true : false}
              aria-controls={`panel-${index}`}
            >
              {company?.shortName ?? company?.name}
            </button>
          ))}

          <div className={getSCSSSelectors("tab-select-highlight")} />
        </div>
        <div className={getSCSSSelectors("tab-panel-container")}>
          {data.map((company, index) => {
            const { role, name, href, range, description } = company;
            return (
              <div
                className={getSCSSSelectors("tab-panel")}
                key={index}
                role="tabpanel"
                tabIndex={activeTabId === index ? 0 : -1}
                aria-labelledby={`tab-${index}`}
                aria-hidden={activeTabId !== index}
                hidden={activeTabId !== index}
              >
                <h3>
                  <span>{role}</span>
                  <span className={getSCSSSelectors("company")}>
                    &nbsp; &mdash; &nbsp;
                    <Button as="a" variant="ghost-primary" href={href}>
                      {name}
                    </Button>
                  </span>
                </h3>
                <p className={getSCSSSelectors("range")}>
                  {range?.from} &ndash; {range?.to}
                </p>
                <List listItems={description} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experiance;
