import { useCallback } from "react";

function useGetStyleSelectors<T extends Record<string, string>>(modules: T) {
  const getSCSSSelectors = useCallback(
    (...selectors: (keyof T)[]) => {
      return selectors
        .map((selector) => modules[selector] || selector)
        .join(" ");
    },
    [modules]
  );
  return getSCSSSelectors;
}

export default useGetStyleSelectors;
