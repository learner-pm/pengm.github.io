const { path } = require("@vuepress/utils");

module.exports = {
  host: "localhost",
  port: "8888",
  title: "网站学习",
  base: "/",
  description: "PM的个人学习博客",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/css/index.css" }],
  ],
  theme: "@vuepress/theme-default",
  themeConfig: {
    navbar: [
      {
        text: "前端",
        children: [
          {
            text: "基础",
            link: "/frontEnd/basic/",
          },
          {
            text: "提升",
            link: "/frontEnd/frame/vueReact/",
          },
        ],
      },
      {
        text: "数据结构和算法",
        link: "/dataStructure/algorithm/",
      },
      {
        text: "项目",
        link: "/project/",
      },
      {
        text: "CICD",
        link: "/cicd/",
      },
      {
        text: "记录",
        link: "/learn/",
      },
      { text: "GitHub", link: "https://github.com/learner-pm" },
    ],
    sidebar: {
      "/frontEnd/basic/": [
        {
          text: "ECMAScript",
          children: [
            "/frontEnd/basic/ecmaScript/type",
            "/frontEnd/basic/ecmaScript/function",
            "/frontEnd/basic/ecmaScript/proto",
            "/frontEnd/basic/ecmaScript/this",
            "/frontEnd/basic/ecmaScript/async",
            "/frontEnd/basic/ecmaScript/module",
          ],
        },
        {
          text: "浏览器",
          children: [
            "/frontEnd/basic/borwser/draw",
            "/frontEnd/basic/borwser/storage",
            "/frontEnd/basic/borwser/network",
            "/frontEnd/basic/borwser/across",
            "/frontEnd/basic/borwser/security",
            "/frontEnd/basic/borwser/performance",
          ],
        },
      ],
      "/frontEnd/frame/": [
        {
          text: "Frame",
          children: [
            "/frontEnd/frame/vueReact/",
            "/frontEnd/frame/vueReact/one",
            "/frontEnd/frame/vueReact/react",
          ],
        },
        {
          text: "Mvvm",
          children: ["/frontEnd/frame/mvvm/"],
        },
      ],
      "/learn/": [
        {
          children: ["/learn/result.md"],
        },
      ],
      "/dataStructure/algorithm/": [
        {
          text: "算法",
          children: [
            "/dataStructure/algorithm/",
            "/dataStructure/algorithm/commonType.md",
            "/dataStructure/algorithm/tree.md",
            "/dataStructure/algorithm/designPatterns.md",
          ],
        },
        // {
        //   text: "设计模式",
        //   children: [
        //     "/dataStructure/algorithm/designPatterns/factory.md",
        //     "/dataStructure/algorithm/designPatterns/singleton.md",
        //     "/dataStructure/algorithm/designPatterns/observer.md",
        //     "/dataStructure/algorithm/designPatterns/strategy.md",
        //     "/dataStructure/algorithm/designPatterns/decorate.md",
        //     "/dataStructure/algorithm/designPatterns/proxy.md",
        //     "/dataStructure/algorithm/designPatterns/adaptation.md",
        //   ],
        // },
      ],
      "/project/": [
        {
          text: "项目",
          children: [
            "/project/",
            "/project/one.md",
            "/project/thesis.md",
            "/project/vaios.md",
          ],
        },
      ],
      "/cicd/": [
        {
          text: "自动构建",
          children: [
            "/cicd/"
          ]
        }
      ]
    },
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
    [
      "@vuepress/docsearch",
      {
        appId: "UWD3TP0HJ3",
        apiKey: "648fdc4c61e72866f6f638b7dacfd0bf",
        indexName: "pmthank",
        locales: {
          "/": {
            placeholder: "Search",
            translations: {
              button: {
                buttonText: "Search",
              },
            },
          },
        },
      },
    ],
  ],
};
