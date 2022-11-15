import { defaultTheme } from 'vuepress'
import { navbar } from "./configs/navbar";
import { sidebar } from "./configs/sidebar";

export default {
    title: 'vuepress',
    description: 'desc',
    dest: 'dist',
    base: '/',
    public: 'src/.vuepress/public',
    theme: defaultTheme({
        navbar,
        sidebar,
        docsDir: 'dist',
        docsRepo: 'https://github.com/tenghui-web/vuepress',
        editLinkPattern: ':repo/edit/:branch/:path',
    }),
}