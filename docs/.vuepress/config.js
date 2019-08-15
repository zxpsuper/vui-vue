module.exports = {
    base: '/vui-vue/',
    title: 'VUI',
    description: '一款简单丰富易用的vue前端组件',
    markdown: {
        lineNumbers: false,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#',
        },
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/zxpsuper/vui-vue' },
        ],
        sidebar: [
            {
                title: '文档',
                collapsable: false,
                children: ['/docs/install'],
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/alert',
                    '/components/link',
                    '/components/directive',
                    '/components/radio',
                ],
            },
        ],
    },
    less: {
        javascriptEnabled: true,
    },
};
