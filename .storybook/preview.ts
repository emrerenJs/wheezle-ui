import "../lib/globals.scss";
import type { Preview } from "@storybook/react";
import { createElement } from "react";
import { Theme } from "../components/Theme";

const preview: Preview = {
  decorators: [
    (Story) => {
      return createElement(Theme, {
        children: createElement(Story),
        defaultTheme: "dark",
      });
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
