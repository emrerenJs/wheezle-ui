import { ReactNode } from "react";

export enum TypographyVariants {
  HEADING_LARGE = "heading-l",
  HEADING_MEDIUM = "heading-m",
  HEADING_SMALL = "heading-s",
  HEADING_XSMALL = "heading-xs",
  BODY_MEDIUM = "body-m",
  BODY_SMALL = "body-s",
}

export type TypographyVariantType = `${TypographyVariants}`;

export interface TypographyProps {
  variant?: TypographyVariantType;
  color?: "primary" | "default";
  children?: ReactNode;
}
