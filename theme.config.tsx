import { DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/footer";

const theme: DocsThemeConfig = {
  logo: <span>Rooch</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Rooch",
    };
  },
  project: {
    link: "https://github.com/rooch-network/rooch-network.github.io",
  },
  chat: {
    link: "https://discord.gg/rooch",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
  footer: {
    component: Footer,
  },
};

export default theme;
