import { Spacing } from "@src/types";

// Spacing --- 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 --- in px
const getSpacing = (
  type: "m" | "p",
  position: "x" | "y" | "l" | "r" | "t" | "b",
  spacing: Spacing
): string => {
  switch (spacing) {
    case "xxs":
      return type + position + "-0.5"; // 2px
    case "xs":
      return type + position + "-1"; // 4px
    case "sm":
      return type + position + "-2"; // 8px
    case "md":
      return type + position + "-3"; // 12px
    case "lg":
      return type + position + "-4"; // 16px
    case "xl-1":
      return type + position + "-6"; // 24px
    case "xl-2":
      return type + position + "-8"; // 32px
    case "xxl-1":
      return type + position + "-12"; // 48px
    case "xxl-2":
      return type + position + "-16"; // 64px
    case "xxxl":
      return type + position + "-20"; // 80px

    default:
      return type + position + "0";
  }
};

export const getPaddingHorizontal = (spacing: Spacing): string =>
  getSpacing("p", "x", spacing);

export const getPaddingVertical = (spacing: Spacing): string =>
  getSpacing("p", "y", spacing);
