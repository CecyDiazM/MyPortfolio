const translations = {
    es: {
        nav_home: "Inicio",
        nav_skills: "Skills",
        nav_projects: "Proyectos",
        nav_projects_web: "Web",
        nav_contact: "Contacto",
        hero_subtitle: "Ingeniera BackEnd Especializada en Python, IA y Automatizaciones",
        hero_desc: "Especializada en transformar problemas complejos en soluciones de software elegantes con Python, FastAPI, Node y React.",
        btn_projects: "Ver Más Proyectos",
        video_title_excel_to_word: "Excel a Word",
        video_desc_excel_to_word: "Los datos en Excel solían copiarse manualmente en Word para imprimir múltiples plantillas donde solo cambiaba la información de las personas; solía tomar horas, pero con esta app, toma segundos. Se puede adaptar a cualquier tipo documentos o programas que uses..",
        video_title_dashboard: "Dashboard Interactivo",
        video_desc_dashboard: "Dashboard interactivo para cualquier tipo de negocio que necesite hacer seguimiento y analizar datos",
        video_title_gemini_flash: "Gemini Flash",
        video_desc_gemini_flash: "Desarrollé una app de escritura inteligente integrando la API de Gemini 3.1. Superé desafíos de conectividad y alta demanda usando algoritmos de reintento en JavaScript, resultando en una herramienta robusta con una elegante interfaz Dark Mode que es 100% responsive. Esta app puede adaptarse de forma gratuita y local usando Gemini Nano, pero se requiere una computadora de alto rendimiento.",
        video_title_chatbot_streamlit: "Chatbot con Streamlit",
        video_desc_chatbot_streamlit: "Desarrollé un chatbot usando Streamlit, integrándolo con un modelo de procesamiento de lenguaje natural para brindar una experiencia de usuario interactiva y atractiva.",
        video_title_amatista: "Web de Eventos Infantiles",
        video_desc_amatista: "Un sitio web responsivo para eventos infantiles, con un diseño atractivo y fácil navegación.",
        video_title_portafolio: "Web Portafolio",
        video_desc_portafolio: "Un sitio web responsivo para mostrar mis proyectos y habilidades.",
        video_title_personal: "Web Personal",
        video_desc_personal: "Un sitio web personal que construí en un curso de diseño web.",
        video_title_store: "Tienda Online Personal",
        video_desc_store: "Proyecto personal para una tienda exclusiva.",
        video_title_psico: "Web Psicologa Online",
        video_desc_psico: "Un sitio web para una psicóloga, con un diseño atractivo y fácil navegación.",
        skills_title: "Stack Tecnológico",
        skills_title_projects: "Proyectos",
        backend: "Backend",
        frontend: "Frontend",
        video_text: "Automatización de documentos excel a reportes en word en segundos",
        video_text2: "Dashboard interactivo para análisis de datos",
        dtb: "Bases De Datos",
        tech: "Tech",
        auto: "Automatizaciones",
        info: "Sé usar la IA como programadora e integrarla en mis proyectos, además de usar las herramientas de IA adaptándome sin perder el control de los proyectos",
        info2: "Estudiando y preparándome con AWS y la nube",
        stack_ia: "IA Integrativa",
        footer_text: "¿Listo para construir el futuro?",
        copy: " 2026 Cecilia Díaz | Ingeniera Software"
    },
    en: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_projects_web: "Web",
        nav_contact: "Contact",
        hero_subtitle: "Backend Engineer Specializing in Python, AI, and Automation",
        hero_desc: "Specializing in turning complex problems into elegant software solutions using Python, FastAPI, Node, and React.",
        btn_projects: "View More Projects",
        video_title_excel_to_word: "Excel to Word",
        video_desc_excel_to_word: "Data in Excel used to be copied manually into Word to print multiple templates where only the personal information changed; it used to take hours, but with this app, it takes seconds. It can be adapted to any type of document or program you use.",
        video_title_dashboard: "Interactive Dashboard",
        video_desc_dashboard: "Interactive dashboard for any type of business that needs to track progress and analyze data",
        video_title_gemini_flash: "Gemini Flash",
        video_desc_gemini_flash: "I developed a smart writing app by integrating the Gemini 3.1 API. I overcame connectivity and high-demand challenges using retry algorithms in JavaScript, resulting in a robust tool with an elegant Dark Mode interface that is 100% responsive. This app can be adapted for free and locally using Gemini Nano, but a high-performance computer is required.",
        video_title_chatbot_streamlit: "Chatbot with Streamlit",
        video_desc_chatbot_streamlit: "I developed a chatbot using Streamlit, integrating it with a natural language processing model to provide an interactive and engaging user experience.",
        video_title_amatista: "Children's Events Website",
        video_desc_amatista: "A responsive website for children's events, featuring an engaging design and easy navigation.",
        video_title_portafolio: "Portfolio Website",
        video_desc_portafolio: "A responsive portfolio website showcasing my projects and skills.",
        video_title_personal: "Personal Website",
        video_desc_personal: "A personal website I built in a web design course.",
        video_title_store: "Personal Eccomerce",
        video_desc_store: "Personal website for a exclusive store",
        video_title_psico: "Online Psychologist",
        video_desc_psico: "A website for a psychologist, featuring an engaging design and easy navigation.",
        skills_title_projects: "Projects",
        skills_title: "Tech Stack",
        backend: "Backend Development",
        frontend: "Frontend Development",
        video_text: "Automation of excel documents to word reports in seconds",
        video_text2: "Interactive dashboard for data analysis",
        dtb: "Data Bases",
        tech: "Tech",
        auto: "Automation",
        info: "As a programmer, I know how to use AI and integrate it into my projects, as well as adapt to AI tools without losing control of the projects",
        info2: "Studying and preparing with AWS and the cloud",
        stack_ia: "Integrative AI",
        footer_text: "Ready to build the future?",
        copy: " 2026 Cecilia Díaz | Software Engineer"
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle de Idioma (Mejorado para no borrar íconos)
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        langToggle.innerText = currentLang === 'en' ? 'ES' : 'EN';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
    });

    // 2. Galería Desktop
    const desktopVids = document.querySelectorAll('.gallery-desktop .vid');
    const mainVideoDesktop = document.querySelector('.gallery-desktop .main-video video');
    const mainTitleDesktop = document.querySelector('.gallery-desktop .main-video .title');
    const infoPanel = document.getElementById('video-info-panel');
    const panelText = document.getElementById('panel-text');

    desktopVids.forEach(vid => {
        vid.addEventListener('click', (e) => {
            // Si se hace clic en el botón de info, no cambiar el video aquí
            if (e.target.classList.contains('info-btn')) return;

            desktopVids.forEach(v => v.classList.remove('active'));
            vid.classList.add('active');
            
            const videoSrc = vid.getAttribute('data-video');
            const titleKey = vid.getAttribute('data-title');
            
            mainVideoDesktop.src = videoSrc;
            mainVideoDesktop.play();
            mainTitleDesktop.setAttribute('data-i18n', titleKey);
            mainTitleDesktop.innerText = translations[currentLang][titleKey];
            
            infoPanel.classList.remove('open'); // Cerrar panel al cambiar video
        });

        const btnInfo = vid.querySelector('.info-btn');
        btnInfo.addEventListener('click', (e) => {
            e.stopPropagation();
            const descKey = vid.getAttribute('data-desc');
            panelText.innerText = translations[currentLang][descKey];
            infoPanel.classList.toggle('open');
        });
    });

    // 3. Galería Móvil
    const mobileVids = document.querySelectorAll('.vid-mobile');
    const mainVideoMobile = document.querySelector('.gallery-mobile .main-video video');
    const mainTitleMobile = document.querySelector('.gallery-mobile .main-video .title');
    const modal = document.getElementById('mobile-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close-modal');

    mobileVids.forEach(vid => {
        vid.addEventListener('click', (e) => {
            if (e.target.classList.contains('info-btn')) return;

            mobileVids.forEach(v => v.classList.remove('active'));
            vid.classList.add('active');
            
            const videoSrc = vid.getAttribute('data-video');
            const titleKey = vid.getAttribute('data-title');
            
            mainVideoMobile.src = videoSrc;
            mainVideoMobile.play();
            mainTitleMobile.setAttribute('data-i18n', titleKey);
            mainTitleMobile.innerText = translations[currentLang][titleKey];
        });

        vid.querySelector('.info-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const titleKey = vid.getAttribute('data-title');
            const descKey = vid.getAttribute('data-desc');
            
            modalTitle.innerText = translations[currentLang][titleKey];
            modalDesc.innerText = translations[currentLang][descKey];
            modal.style.display = "block";
        });
    });

    closeModal.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

    // 4. Observer para animaciones
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});