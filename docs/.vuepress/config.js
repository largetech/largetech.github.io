module.exports = {
    themeConfig: {
        lastUpdated: "最后更新时间",
        logo: '/assets/img/hero.png',
        displayAllHeaders: true, // 默认值：false
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                //path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: ['/', '/'],
                collapsable: false, // 可选的, 默认值是 true,
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'about', link: '/about' },
            { text: 'project', link: '/project' },
            { text: 'External', link: 'https://google.com', target: '_blank' },
            {
                text: 'Languages',
                //ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Chinese', items: [
                            { text: 'Chinese1', link: '/language/chinese/' },
                            { text: 'Chinese2', link: '/language/japanese/' }
                        ]
                    },
                    {
                        text: 'Japanese', items: [
                            { text: 'Japanese1', link: '/language/chinese/' },
                            { text: 'Japanese2', link: '/language/japanese/' }
                        ]
                    }
                ]
            }
        ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'largetech/largetech.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'largetech/largetech.github.io',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}