const aboutMeData = {
    name: "Курсков Леонид",
    profession: "Unity developer",
    employment: "full time / part time",
    photoSrc: "Images/photo.png",
    description: `Последние <span class="orange_text">4</span> года занимаюсь разработкой игр. Разрабатывал <span class="orange_text">Hyper-Casual</span> и <span class="orange_text">WebGL</span> игры.
    В настоящее время сосредоточен на создании более крупных, комплексных <span class="orange_text">PC Steam</span> игр.
    <br>
    <br>
    Успешно разрабатывал сложные проекты, согласовывая усилия команды с целями продукта.
    <br>
    Мои навыки охватывают не только <span class="orange_text">Unity</span>, но и <span class="orange_text">Backed-End</span> системы, 
    что значительно расширяет мои возможности при создании <span class="orange_text">многопользовательских</span> игр.
    <br>
    <br>
    Я увлечен проектированием эффективных <span class="orange_text">архитектурных решений</span> и <span class="orange_text">геймплейных</span> механик. 
    Быстро адаптируюсь к новым задачам и легко налаживаю коммуникацию в команде.`,
    links: [
        { title: "Телеграмм", url: "https://t.me/msdGameDev" },
        { title: "Блог", url: "https://t.me/msdBlog" },
        { title: "Почта", url: "mailto:leonidkurskov@gmail.com" },
        { title: "GitHub", url: "https://github.com/MoranSD" }
    ],
    workExperience: [
        {
            company: "GGCraft",
            description: "Разработка мобильных игр на Unity в жанре 'HyperCasual', интеграция сторонних SDK, оптимизация, отладка, доведение до релиза."
        },
        {
            company: "OnlineDuel",
            description: "Запуск отдела разработки с нуля, роль первого и ключевого разработчика в формирующемся стартапе. Разработка WEB игр на Unity, интеграция и общение с сервером."
        },
        {
            company: "404Team",
            description: "Работа над 'SpinBound' - крупной Steam игрой Balatro-like deckbuilder slot machine. Проектирование архитектуры, реализация игровых фич, профилирование, оптимизация, рефакторинг."
        }
    ],
    keySkills: [
        "Unity, C#, Git, Game Programming",
        "SOLID, ООП, ECS",
        "DOTween, Zenject, DI, UniTask",
        "Profiling, Memory Optimization"
    ],
    additionalSkills: [
        "Blender, Photoshop",
        "Notion, Miro, Yougile",
        "Взлом вк страничек",
        "Ремонт микроволновок"
    ]
};

// Данные проектов
const projectsArray = [
    {
        "name": "Sand Box The Game",
        "videoLink": "https://www.youtube.com/embed/juzhNcXmiNM?si=PCUfIvWyGa7RuhxY",
        "description": "Коммерческий проект. Исполнял роль технического директора и ведущего программиста. Разработал систему миссий, механику строительства и прогрессии игрока, интегрировав их с существующим готовым ассетом. Реализовал полный цикл геймплея от создания контента до оптимизации."
    },
    {
        "name": "Brick Battles",
        "videoLink": "https://www.youtube.com/embed/2LQpmJtqwgI?si=yUk-RJktjstb0QAP",
        "description": "Быстрая PvP игра с полностью разрушаемыми кирпичными аренами. В качестве ведущего программиста реализовал механики боя, физику разрушения структур, систему анимаций и визуальных эффектов. Провел оптимизацию для гладкого множественного боя в реальном времени."
    },
    {
        "name": "Climb Race",
        "videoLink": "https://www.youtube.com/embed/qpqYZ4Bq6OI?si=MAQEXdOJxlqBLLFM",
        "description": "Гипер-казуальная гоночная игра на скорость. Разработал пользовательский интерфейс, реализовал интеграцию Facebook SDK и AppsFlyer для аналитики, создал систему анимаций и эффектов. Оптимизировал игру для различных мобильных устройств."
    },
    {
        "name": "Royal Armies",
        "videoLink": "https://www.youtube.com/embed/7T1jF4TgQtw?si=DeHqyTScCfLxa-__",
        "description": "Tower defense игра со стратегическим геймплеем. В качестве основного программиста реализовал механики размещения башен, системы волн врагов и боевые алгоритмы. Создал сложные анимации боевых эффектов и оптимизировал рендеринг для множественных объектов на сцене."
    },
    {
        "name": "Clean Master",
        "videoLink": "https://www.youtube.com/embed/hPCO2y-liII?si=eCJ08erUW8hKJEvj",
        "description": "Casual симулятор уборки. Программировал основные механики сбора мусора, системы таймеров и награды. Разработал набор визуальных эффектов трансформации грязных объектов, создал анимации процесса очистки и оптимизировал производительность для мобильных платформ."
    },
    {
        "name": "Fly Delivery",
        "videoLink": "https://www.youtube.com/embed/L8kiIHOsKHk?si=MD0DbqLm_Y_11Vh8",
        "description": "Авиа-логистическая головоломка. Реализовал механики управления летательным аппаратом, систему маршрутов доставки и обработку столкновений. Создал систему эффектов для посадки и доставки грузов, оптимизировал физику движения."
    },
    {
        "name": "Sword Play",
        "videoLink": "https://www.youtube.com/embed/PeG9oAum0ZE?si=HXr7bbp7Bd60VkZl",
        "description": "Динамичная боевая игра с физикой разрезания объектов. Разработал систему боевых комбо, интегрировал асет Dynamic Mesh Cutter для реалистичной физики отсечения. Реализовал сложные парикулярные эффекты, создал систему обратной связи от удара и провел оптимизацию для высокой частоты кадров."
    },
    {
        "name": "Dino Merge",
        "videoLink": "https://www.youtube.com/embed/HPVIqW95MAk?si=5jqIMN8n_ru9W283",
        "description": "Эволюционная головоломка с мерджем динозавров. Программировал механику слияния существ, систему прогрессии и боевой арены. Создал анимации эволюции, эффекты трансформации и оптимизировал UI для интуитивного взаимодействия с множеством объектов."
    }
];

// Функция для заполнения данных "Обо мне" в десктопной версии
function fillAboutMeDesktop() {
    // Заполняем основную информацию
    const nameEl = document.querySelector('.about_info-main-name');
    const professionEl = document.querySelector('.about_info-main-profession');
    const employmentEl = document.querySelector('.about_info-main-employment');
    const photoEl = document.querySelector('.about_info-photo');
    const descriptionEl = document.querySelector('.about_info-about_text');
    
    if (nameEl) nameEl.textContent = aboutMeData.name;
    if (professionEl) professionEl.textContent = aboutMeData.profession;
    if (employmentEl) employmentEl.textContent = aboutMeData.employment;
    if (photoEl) photoEl.src = aboutMeData.photoSrc;
    if (descriptionEl) descriptionEl.innerHTML = aboutMeData.description;
    
    // Заполняем ссылки
    const linksContainer = document.querySelector('.about_info-links');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        aboutMeData.links.forEach(link => {
            const linkDiv = document.createElement('div');
            linkDiv.className = 'about_info-link';
            linkDiv.innerHTML = `
                <div class="about_info-link_title orange_text">${link.title} -</div>
                <a class="white_text" href="${link.url}" target="_blank">${link.url.replace('mailto:', '')}</a>
            `;
            linksContainer.appendChild(linkDiv);
        });
    }
    
    // Заполняем опыт работы с оранжевым цветом для названий компаний
    const experienceContainer = document.querySelector('.work_expierence-studios');
    if (experienceContainer) {
        experienceContainer.innerHTML = '';
        aboutMeData.workExperience.forEach(exp => {
            const li = document.createElement('li');
            li.textContent = exp.company;
            li.classList.add('orange_text');
            
            const descDiv = document.createElement('div');
            descDiv.className = 'work_expierence-concrete about_info_spacing white_text';
            descDiv.textContent = exp.description;
            
            experienceContainer.appendChild(li);
            experienceContainer.appendChild(descDiv);
        });
    }
    
    // Заполняем ключевые навыки в десктопной версии
    const skillsContainersDesktop = document.querySelectorAll('.about_info .about_info-skills');
    
    if (skillsContainersDesktop.length >= 1) {
        const keySkillsList = skillsContainersDesktop[0].querySelector('.skills-concrete');
        if (keySkillsList) {
            keySkillsList.innerHTML = '';
            aboutMeData.keySkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                keySkillsList.appendChild(li);
            });
        }
    }
    
    if (skillsContainersDesktop.length >= 2) {
        const additionalSkillsList = skillsContainersDesktop[1].querySelector('.skills-concrete');
        if (additionalSkillsList) {
            additionalSkillsList.innerHTML = '';
            aboutMeData.additionalSkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                additionalSkillsList.appendChild(li);
            });
        }
    }
}

// Функция для заполнения данных "Обо мне" в мобильной версии
function fillAboutMeMobile() {
    // Заполняем основную информацию
    const nameEl = document.getElementById('aboutMeMobileName');
    const professionEl = document.getElementById('aboutMeMobileProfession');
    const employmentEl = document.getElementById('aboutMeMobileEmployment');
    const photoEl = document.getElementById('aboutMeMobilePhoto');
    
    if (nameEl) nameEl.textContent = aboutMeData.name;
    if (professionEl) professionEl.textContent = aboutMeData.profession;
    if (employmentEl) employmentEl.textContent = aboutMeData.employment;
    if (photoEl) photoEl.src = aboutMeData.photoSrc;
    
    // Заполняем описание
    const descriptionDiv = document.querySelector('#aboutMeMobileDesciption > div:first-child');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = aboutMeData.description;
    }
    
    // Заполняем ссылки
    const linksContainer = document.getElementById('aboutMeMobileDesciptionLinks');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        aboutMeData.links.forEach(link => {
            const linkDiv = document.createElement('div');
            linkDiv.className = 'about_info-link';
            linkDiv.innerHTML = `
                <div class="aboutMeMobileDesciptionLinksText orange_text">${link.title} -</div>
                <a class="white_text" href="${link.url}" target="_blank">${link.url.replace('mailto:', '')}</a>
            `;
            linksContainer.appendChild(linkDiv);
        });
    }
    
    // Заполняем опыт работы с оранжевым цветом для названий компаний
    const experienceContainer = document.querySelector('#workExpirience .work_expierence-studios');
    if (experienceContainer) {
        experienceContainer.innerHTML = '';
        aboutMeData.workExperience.forEach(exp => {
            const li = document.createElement('li');
            li.textContent = exp.company;
            li.classList.add('orange_text');
            
            const descDiv = document.createElement('div');
            descDiv.className = 'work_expierence-concrete about_info_spacing white_text';
            descDiv.textContent = exp.description;
            
            experienceContainer.appendChild(li);
            experienceContainer.appendChild(descDiv);
        });
    }
    
    // Заполняем ключевые навыки в мобильной версии
    const skillsContainersMobile = document.querySelectorAll('#aboutMeMobileDesciption .about_info-skills');
    
    if (skillsContainersMobile.length >= 1) {
        const keySkillsList = skillsContainersMobile[0].querySelector('.skills-concrete');
        if (keySkillsList) {
            keySkillsList.innerHTML = '';
            aboutMeData.keySkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                keySkillsList.appendChild(li);
            });
        }
    }
    
    if (skillsContainersMobile.length >= 2) {
        const additionalSkillsList = skillsContainersMobile[1].querySelector('.skills-concrete');
        if (additionalSkillsList) {
            additionalSkillsList.innerHTML = '';
            aboutMeData.additionalSkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                additionalSkillsList.appendChild(li);
            });
        }
    }
}

// Основной код, который выполняется при загрузке
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    
    // Сначала заполняем данные для обеих версий
    fillAboutMeDesktop();
    fillAboutMeMobile();
    
    // Проверяем, какая версия отображается
    const mobileBlock = document.getElementById('mobileBlock');
    const desktopBlock = document.getElementById('desktop');
    
    if (desktopBlock && getComputedStyle(desktopBlock).display !== 'none') {
        console.log("Загружена десктопная версия");
        initDesktopVersion();
    } else if (mobileBlock && getComputedStyle(mobileBlock).display !== 'none') {
        console.log("Загружена мобильная версия");
        initMobileVersion();
    } else {
        console.log("Не удалось определить версию");
    }
});

// Инициализация десктопной версии
function initDesktopVersion() {
    const aboutMeButton = document.getElementById('about-button');
    const projectInfoBlock = document.getElementsByClassName("project_info")[0];
    const aboutMeBlock = document.getElementsByClassName("about_info")[0];
    const projectVideo = document.getElementById('projectVideo');
    const projectName = document.getElementById('projectName');
    const projectDescription = document.getElementById('projectDescription');
    const projectLinks = document.getElementById('projectLinks');
    const projectsButtons = document.getElementById('projectsButtons');

    // Создаем кнопки проектов
    function createProjectsButtons(){
        projectsArray.forEach(function (project){
            const button = document.createElement('button');
            button.style.width = '100%';
            button.style.marginBottom = '1vw';
            button.style.padding = '2%';
            button.className = 'my_projects-buttons-button';
            button.style.textTransform = 'uppercase';
            button.style.textWrap = 'nowrap';
            button.style.fontSize = '150%';
            button.textContent = project.name;
            projectsButtons.appendChild(button);
        });
    }
    
    createProjectsButtons();
    const buttons = document.querySelectorAll('button');
    const projectButtons = Array.from(document.getElementsByClassName('my_projects-buttons-button'));

    if (aboutMeButton) {
        aboutMeButton.style.borderColor = 'rgba(94, 94, 94, 0.5)';
        aboutMeButton.style.color = 'rgba(94, 94, 94, 0.5)';
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.style.borderColor = 'rgba(94, 94, 94, 1)';
                btn.style.color = 'rgba(94, 94, 94, 1)';
            });
            button.style.borderColor = 'rgba(94, 94, 94, 0.5)';
            button.style.color = 'rgba(94, 94, 94, 0.5)';
        });
    });

    projectButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            aboutMeBlock.style.display = 'none';
            projectInfoBlock.style.display = 'flex';
            projectInfoBlock.classList.add('active');
            button.classList.add('active');

            projectVideo.innerHTML = '';
            projectName.textContent = '';
            projectDescription.textContent = '';
            projectLinks.innerHTML = '';

            const project = projectsArray.find(p => p.name === buttonText);

            if (project) {
                const video = document.createElement('iframe');
                video.height = '100%';
                video.width = '100%';
                video.style.border = 'none';
                video.src = project.videoLink;
                video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                video.allowFullscreen = true;
                projectVideo.appendChild(video);

                projectName.textContent = buttonText;
                projectName.style.textTransform = 'capitalize';
                projectDescription.textContent = project.description;

                if (project.links && project.links.length > 0) {
                    project.links.forEach(function (link){
                        const a = document.createElement('a');
                        a.href = link;
                        a.textContent = link;
                        a.style.textDecoration = 'none';
                        projectLinks.appendChild(a);
                    });
                }
            }
        });
    });

    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', function() {
            aboutMeBlock.style.display = 'flex';
            projectInfoBlock.style.display = 'none';
        });
    }
}

// Инициализация мобильной версии
function initMobileVersion() {
    const burgerButton = document.getElementById('burgerButton');
    const navBarTitle = document.getElementById('navBarTitle');
    const projectButtons = document.getElementById('mobileProjectsButtons');
    let projectButtonsIsCreate = false;

    const aboutMePage = document.getElementById('aboutMePage');
    const projectInfo = document.getElementById('projectInfoBlock');
    const selectMenu = document.getElementById('selectMenu');
    let currentPage = aboutMePage;
    
    const projectName = document.getElementById('projectInfoTitle');
    const projectLinks = document.getElementById('projectInfoLinks');
    const projectVideo = document.getElementById('mobileProjectVideo');
    const projectDescription = document.getElementById('projectInfoDescription');

    const aboutMeButton = document.getElementById('selectMenuAboutMeButton');
    
    // Устанавливаем начальное состояние
    if (navBarTitle) navBarTitle.textContent = 'Обо мне';
    
    // Скрываем меню выбора при загрузке
    if (selectMenu) selectMenu.style.display = 'none';
    
    // Показываем страницу "Обо мне"
    if (aboutMePage) aboutMePage.style.display = 'flex';
    if (projectInfo) projectInfo.style.display = 'none';
    
    // Добавляем обработчики только если элементы существуют
    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', () => {
            if (currentPage) currentPage.style.display = 'none';
            currentPage = aboutMePage;
            if (currentPage) currentPage.style.display = 'flex';
            if (selectMenu) selectMenu.style.display = 'none';
            if (navBarTitle) navBarTitle.textContent = 'Обо мне';
            if (burgerButton) burgerButton.classList.remove('burger_active');
        });
    }

    if (burgerButton) {
        console.log("Burger button найден");
        burgerButton.addEventListener('click', () => {
            console.log("Burger button clicked");
            if (selectMenu.style.display === 'none' || selectMenu.style.display === '') {
                if (currentPage) currentPage.style.display = 'none';
                if (selectMenu) selectMenu.style.display = 'flex';
                burgerButton.classList.add('burger_active');
            } else {
                if (selectMenu) selectMenu.style.display = 'none';
                if (currentPage) currentPage.style.display = 'flex';
                burgerButton.classList.remove('burger_active');
            }
            if (!projectButtonsIsCreate) {
                createProjectsButtons();
            }
        });
    } else {
        console.log("Burger button не найден!");
    }

    function createProjectsButtons(){
        projectsArray.forEach(function (project){
            const button = document.createElement('button');
            button.style.width = '80%';
            button.style.marginBottom = '1vw';
            button.className = 'my_projects-buttons-button mobileProjectsButtons';
            button.style.textTransform = 'uppercase';
            button.style.fontSize = '580%';
            button.textContent = project.name;
            button.style.color = 'rgba(94, 94, 94, 1)';
            button.style.border = '1px solid rgba(94, 94, 94, 1)';
            button.style.borderRadius = '6px';
            button.style.margin = '0 auto';
            button.style.marginTop = '5%';
            if (projectButtons) {
                projectButtons.appendChild(button);
            }
        });
        projectButtonsIsCreate = true;
        addFunctionInProjectButton();
    }

    function addFunctionInProjectButton(){
        const projectsButtons = Array.from(document.getElementsByClassName('mobileProjectsButtons'));
        projectsButtons.forEach((button) => {
            button.addEventListener('click', () => {
                if (burgerButton) burgerButton.classList.remove('burger_active');
                const project = projectsArray.find(p => p.name === button.textContent);
                if (selectMenu) selectMenu.style.display = 'none';
                currentPage = projectInfo;
                if (currentPage) currentPage.style.display = 'flex';
                if (navBarTitle) {
                    navBarTitle.textContent = button.textContent;
                    navBarTitle.style.textWrap = 'nowrap';
                }

                if (projectVideo) projectVideo.innerHTML = '';
                if (projectName) projectName.textContent = '';
                if (projectDescription) projectDescription.textContent = '';
                if (projectLinks) projectLinks.innerHTML = '';

                if (project) {
                    if (projectVideo) {
                        const video = document.createElement('iframe');
                        video.height = '100%';
                        video.width = '100%';
                        video.style.border = 'none';
                        video.src = project.videoLink;
                        video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                        video.allowFullscreen = true;
                        projectVideo.appendChild(video);
                    }

                    if (projectName) {
                        projectName.textContent = project.name;
                        projectName.style.textTransform = 'capitalize';
                    }
                    
                    if (projectDescription) projectDescription.textContent = project.description;

                    if (projectLinks && project.links && project.links.length > 0) {
                        project.links.forEach(function (link){
                            const a = document.createElement('a');
                            a.href = link;
                            a.textContent = link;
                            a.style.textDecoration = 'none';
                            projectLinks.appendChild(a);
                        });
                    }
                }
            });
        });
    }
}