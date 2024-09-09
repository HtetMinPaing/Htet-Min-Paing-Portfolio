import { faBars, faEnvelope, faGears, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faDropbox, faGithub, faLinkedin, faMedium, faStackOverflow, faFacebook, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export const aboutme = {
  greeting: "こんにちは、私は Htet Min Paing です!",
  bio1: "ソフトウェア開発者で、",
  bio2: "React、Java、Python、JavaScriptを専門としています。"
}

export const socialsData = [
    {
      icon: faEnvelope,
      url: "mailto: ttee62525@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/HtetMinPaing",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/htetminpaing/",
    },
    {
      icon: faMedium,
      url: "https://medium.com/@hmphtetminpaing",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/htetminpaing.htetminpaing.3?mibextid=LQQJ4d",
    },
];

export const educationData = [
    {
        id: 1,
        college: "University of People",
        year: "2024 - present",
        degree: "コンピュータサイエンス学士号",
        isDegree: true,
        imageSrc: "Uopeople.png"
    },
    {
        id: 2,
        college: "Auston University",
        year: "2023 - Present",
        degree: "インフラストラクチャーおよびネットワークの高等国家ディプロマ",
        isDegree: true,
        imageSrc: "Auston.png"
    },
    {
        id: 3,
        college: "University of People",
        year: "2021 - 2023",
        degree: "コンピュータサイエンス準学士号",
        isDegree: true,
        imageSrc: "Uopeople.png"
    },
    {
        id: 4,
        college: "ITPEC (IP)",
        year: "2023",
        degree: "情報処理技術者試験　「ＩＰ」認定書",
        isDegree: false,
        imageSrc: "Itpec.png"
    },
    {
        id: 5,
        college: "JLPT (N2)",
        year: "2023",
        degree: "日本語能力試験認定書「N2」",
        isRight: false,
        imageSrc: "Jlpt.png"
    },
]

export const projectData = [
    {
      title: "不動産 (MERN)",
      description:
        "MERN開発 (MongoDB、Express.js、React.js、Node.js) を使用したフルスタック不動産アプリケーション",
      getImageSrc: () => require("../images/project2.png"),
      languages: ["MongoDB","ExpressJs","ReactJS","NodeJS","TailwindCSS"],
      url: "https://tt-estate.onrender.com/",
      repo: "https://github.com/HtetMinPaing/Real-Estate-MERN.git"
    },
    {
      title: "ファストフードウェブサイト",
      description:
        "オンラインファストフード注文システムのウェブサイト。HTML5、CSS3、JavaScriptを含むウェブ技術を使用",
      getImageSrc: () => require("../images/project1.png"),
      languages: ["HTML5","CSS3","JavaScript","レスポンシブ","FontAwesome"],
      url: "https://tt-dessertshop.pages.dev/",
      repo: "https://github.com/HtetMinPaing/Project-1.1.git"
    },
    {
      title: "レストランのウェブサイト",
      description:
        "レストランのホームページ用ウェブページ、予約システムとメニュー表示機能を備えた",
      getImageSrc: () => require("../images/project5.png"),
      languages: ["ReactJS","SCSS","JavaScript","フロントエンド"],
      url: "https://htetminpaing-little-lemon.pages.dev/",
      repo: "https://github.com/HtetMinPaing/little-lemon.git"
    },
    {
      title: "React タスクリストアプリ",
      description:
        "ローカルストレージを利用して、日々のタスクの追加、削除、編集機能を持つReactJSプロジェクト",
      getImageSrc: () => require("../images/project4.png"),
      languages: ["ReactJS","ReduxJS","SCSS","Framer Motion"],
      url: "https://tt-todo-react.onrender.com/",
      repo: "https://github.com/HtetMinPaing/React-ToDoApp.git"
    },
    {
      title: "Java クイズ アプリ",
      description:
        "Javaの組み込みパッケージjavaxを使用したクイズアプリケーションのJava GUIプロジェクト [ソースコードについてはお問い合わせください]",
      getImageSrc: () => require("../images/project3.png"),
      languages: ["Java","Javax","Object-Orient-Programming","GUI"],
      url: "mailto: hmphtetminpaing@gmail.com",
      repo: "https://github.com/HtetMinPaing/Java-Project.git"
    },
  ];
  
export const tutorialData = [
    {
      title: "Java チュートリアル",
      description:
        "Javaコーディングおよびミニラボプロジェクト (自己学習および訓練目的）。著作権は所有者に帰属します。",
      languages: ["Java","Object-Orient-Programming"],
      repo: "https://github.com/HtetMinPaing/FEJavaClass.git"
    },
    {
      title: "React チュートリアル",
      description:
        "Reactコーディングおよびミニラボプロジェクト (自己学習および訓練目的）。著作権は所有者に帰属します。",
      languages: ["JavaScript","ReactJS","Front-End"],
      repo: "https://github.com/HtetMinPaing/React-Lab.git"
    },
]

export const certificateData = [
    {
      title: "Metaフロントエンド開発者プロフェッショナル認定証",
      orgs: ["Coursera", "Meta"],
      description: "Meta (Facebook) によってCourseraオンラインプラットフォームで発行された、JavaScriptの人気フレームワーク (React)を含むフロントエンドエンジニアリングに関する認定証.",
      url: "https://coursera.org/share/767c02d94d02c3621833a967e00f04c9",
    },
    // {
    //   title: "Meta React Basic and Advanced React Developer Certificate",
    //   orgs: ["Coursera", "Meta"],
    //   description: "Certificate issued by Meta (Facebook) on Courera online platform specified in React and its advanced features such as hooks, router and context",
    //   url: "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74",
    // },
    {
      title: "「PHPマスタークラス」- 完全なPHP開発者コース",
      orgs: ["Udemy"],
      description: "Udemyによって発行された、動的なウェブサイトおよびサーバーサイドのバックエンドを開発するためのPHPプログラミング学習に特化した認定証.",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3325fad6-41a3-4a5e-92b1-c5d60c09ecaa.jpg?v=1723972988000",
    },
    {
      title: "Kaggleの「Pythonによるプログラミング入門」",
      orgs: ["Kaggle"],
      description: "Kaggleによって発行された、機械学習、Pandas、および強化学習の高度な学習を進めるためのPythonに関する認定証",
      url: "https://www.kaggle.com/learn/certification/htetminpaing/python",
    }
];