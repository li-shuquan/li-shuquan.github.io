// 语言配置
const translations = {
    zh: {
        homeTitle: '我的个人网站',
        aboutTitle: '关于我',
        projectsTitle: '我的项目',
        contactTitle: '联系我',
        navHome: '首页',
        navAbout: '关于',
        navProjects: '项目',
        navContact: '联系',
        welcomeMessage: '欢迎来到我的网站',
        introText: '这是一个展示我的作品和经历的个人网站',
        aboutText: '这里是关于我的介绍...',
        project1Title: '项目1',
        project1Desc: '项目1描述...',
        formName: '姓名：',
        formEmail: '邮箱：',
        formMessage: '留言：',
        formSubmit: '发送',
        footerText: '© 2023 你的名字'
    },
    en: {
        homeTitle: 'My Personal Website',
        aboutTitle: 'About Me',
        projectsTitle: 'My Projects',
        contactTitle: 'Contact Me',
        navHome: 'Home',
        navAbout: 'About',
        navProjects: 'Projects',
        navContact: 'Contact',
        welcomeMessage: 'Welcome to My Website',
        introText: 'This is a personal website showcasing my work and experience',
        aboutText: 'Here is my introduction...',
        project1Title: 'Project 1',
        project1Desc: 'Project 1 description...',
        formName: 'Name:',
        formEmail: 'Email:',
        formMessage: 'Message:',
        formSubmit: 'Send',
        footerText: '© 2023 Your Name'
    }
};

// 设置语言
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferredLanguage', lang);
}

// 语言切换按钮事件监听
document.getElementById('lang-zh').addEventListener('click', () => setLanguage('zh'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

// 页面加载时设置语言
document.addEventListener('DOMContentLoaded', () => {
    // 获取用户之前的语言选择，如果没有则默认使用中文
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'zh';
    setLanguage(preferredLanguage);
});