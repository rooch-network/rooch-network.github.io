import { Footer } from "./components/Footer";

export default {
    logo: <span>Rooch</span>,
    project: {
        link: 'https://github.com/rooch-network/rooch-network.github.io',
    },
    chat: {
        link: 'https://discord.gg/rooch',
    },
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'zh-CN', text: '简体中文' },
    ],
    footer: {
        component: Footer,
    },
    sidebar: {
        defaultMenuCollapseLevel: 1
    }
};
