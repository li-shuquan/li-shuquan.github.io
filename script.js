const translations = {
    en: {
        homeTitle: "My Personal Website",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        welcomeMessage: "Welcome to My Website",
        introText: "This is an example of a multilingual personal website.",
        footerText: "&copy; 2023 Your Name",
        aboutTitle: "About Me",
        aboutPageTitle: "About Me",
        aboutText: "This is where you can introduce yourself.",
        projectsTitle: "My Projects",
        projectsPageTitle: "My Projects",
        projectsText: "Here is a list of my projects.",
        contactTitle: "Contact Me",
        contactPageTitle: "Contact Me",
        contactText: "Contact me through the following channels."
    },
    zh: {
        homeTitle: "我的个人网站",
        navHome: "首页",
        navAbout: "关于",
        navProjects: "项目",
        navContact: "联系",
        welcomeMessage: "欢迎来到我的网站",
        introText: "这是一个多语言个人网站的示例。",
        footerText: "&copy; 2023 你的名字",
        aboutTitle: "关于我",
        aboutPageTitle: "关于我",
        aboutText: "这里是关于我的介绍。",
        projectsTitle: "我的项目",
        projectsPageTitle: "我的项目",
        projectsText: "这里展示我的项目列表。",
        contactTitle: "联系我",
        contactPageTitle: "联系我",
        contactText: "通过以下方式联系我。"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'zh'; // 默认中文
    setLanguage(savedLang);

    const langZhButton = document.getElementById('lang-zh');
    const langEnButton = document.getElementById('lang-en');

    if (langZhButton) {
        langZhButton.addEventListener('click', () => setLanguage('zh'));
    }
    if (langEnButton) {
        langEnButton.addEventListener('click', () => setLanguage('en'));
    }
});