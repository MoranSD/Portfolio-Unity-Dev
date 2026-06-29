const aboutMeData = {
    name: "Курсков Леонид",
    profession: "Unity developer",
    employment: "full time / part time",
    photoSrc: "Images/photo.png",
    description: `Последние <span class="orange_text">4 года</span> разрабатываю игры — от Hyper‑Casual и WebGL до <span class="orange_text">PC Steam</span> проектов.
<br><br>
Моя зона ответственности — <span class="orange_text">полный цикл разработки</span>: от написания логики до получения готового, стабильного продукта.
<br><br>
Увлечён проектированием надёжных <span class="orange_text">архитектурных решений</span>, которые упрощают разработку и масштабирование. Нацелен на создание стабильных игровых систем и эффективную работу в команде.
<br><br>
Способен <span class="orange_text">самостоятельно</span> вести проект от идеи до релиза, принимая решения без постоянного надзора.`,
    links: [
        { title: "Телеграмм", url: "https://t.me/msdGameDev" },
        { title: "Блог", url: "https://t.me/msdBlog" },
        { title: "Почта", url: "mailto:leonidkurskov@gmail.com" },
        { title: "GitHub", url: "https://github.com/MoranSD" },
        { title: "linkedin", url: "https://www.linkedin.com/in/leonid-kurskov-2a0b86254/" }
    ],
    workExperience: [
        {
            company: "GGCraft",
            description: "Разработка мобильных игр на Unity в жанре 'HyperCasual', интеграция сторонних SDK, оптимизация, отладка, доведение до релиза."
        },
        {
            company: "OnlineDuel",
            description: "Роль первого и ключевого разработчика в формирующемся стартапе. Разработка WEB игр на Unity, интеграция и общение с сервером."
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

// Данные проектов (обновлены: добавлено поле links)
const projectsArray = [
    {
        "name": "SpinBound",
        "videoLink": "https://www.youtube.com/embed/lKWPlhaGi8o",
        "description": "Roguelike deckbuilder игра основанная на слот машине. Отвечал полностью за техническую часть и сборку проекта. Успешно реализовал сложную ивент-ориентированную архитектуру с MVC‑паттерном для UI и контролем игрового потока, это позволило гибко управлять десятками сущностей без потери производительности.",
        "links": [
            { "title": "Steam", "url": "https://store.steampowered.com/app/4403320/SpinBound/" }
        ]
    },
    {
        "name": "Sand Box The Game",
        "videoLink": "https://www.youtube.com/embed/juzhNcXmiNM?si=PCUfIvWyGa7RuhxY",
        "description": "Коммерческий проект. Исполнял роль тим лида. Разработал систему миссий, механику строительства и прогрессии игрока, интегрировав их с существующим готовым ассетом. Реализовал полный цикл геймплея от создания контента до оптимизации.",
        "links": []
    },
    {
        "name": "Harvest Hill Farm",
        "videoLink": "https://www.youtube.com/embed/r4C-Ig_HR24",
        "description": "Кози игра про ферму с прогрессией. Разрабатывалась на заказ.",
        "links": [
            { "title": "Официальный трейлер", "url": "https://www.youtube.com/watch?v=cwKmUr2dzoU" }
            // { "title": "Google play", "url": "https://play.google.com/store/apps/details?id=com.BrexitMan.HarvestHillFarm" }
        ]
    },
    {
        "name": "Brick Battles",
        "videoLink": "https://www.youtube.com/embed/2LQpmJtqwgI?si=yUk-RJktjstb0QAP",
        "description": "Игра про прогрессию с волнами врагов, прокачкой базы и прогрессией построенной вокруг полностью разрушаемых кирпичных стен. Полная разработка геймплейного цикла.",
        "links": []
    },
    {
        "name": "Climb Race",
        "videoLink": "https://www.youtube.com/embed/qpqYZ4Bq6OI?si=MAQEXdOJxlqBLLFM",
        "description": "Гипер-казуальная игра на скорость против ботов. Разработал ИИ и пользовательский интерфейс, реализовал интеграцию Facebook SDK и AppsFlyer для аналитики. Оптимизировал игру для различных мобильных устройств, удалось добиться не более 1% вылетов на устройствах.",
        "links": []
    },
    {
        "name": "Royal Armies",
        "videoLink": "https://www.youtube.com/embed/7T1jF4TgQtw?si=DeHqyTScCfLxa-__",
        "description": "Tower defense casual игра о противостоянии двух армий. Помимо полной реализации игры, сделал продвинутое поведение юнитов в ближнем бою.",
        "links": []
    },
    {
        "name": "Clean Master",
        "videoLink": "https://www.youtube.com/embed/hPCO2y-liII?si=eCJ08erUW8hKJEvj",
        "description": "Hyper-Casual симулятор уборки. Программировал все основные механики, полный цикл разработки проекта. Оптимизировал производительность для мобильных платформ.",
        "links": []
    },
    {
        "name": "Fly Delivery",
        "videoLink": "https://www.youtube.com/embed/L8kiIHOsKHk?si=MD0DbqLm_Y_11Vh8",
        "description": "Раннер казуалка с летающим перосонажем. Реализовал механики движения и полета.",
        "links": []
    },
    {
        "name": "Sword Play",
        "videoLink": "https://www.youtube.com/embed/PeG9oAum0ZE?si=HXr7bbp7Bd60VkZl",
        "description": "Рельсовая игры про разрезание врагов. Полный цикл разработки и сборки проекта, интегрировал асет Dynamic Mesh Cutter для реалистичной физики отсечения. Провел оптимизацию для высокой частоты кадров.",
        "links": []
    },
    {
        "name": "Dino Merge",
        "videoLink": "https://www.youtube.com/embed/HPVIqW95MAk?si=5jqIMN8n_ru9W283",
        "description": "Эволюционная головоломка с мерджем динозавров. Программировал механику слияния существ, систему прогрессии и боевой арены.",
        "links": []
    }
];

// Функция для заполнения данных "Обо мне" в десктопной версии
function fillAboutMeDesktop() {
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
    const nameEl = document.getElementById('aboutMeMobileName');
    const professionEl = document.getElementById('aboutMeMobileProfession');
    const employmentEl = document.getElementById('aboutMeMobileEmployment');
    const photoEl = document.getElementById('aboutMeMobilePhoto');
    
    if (nameEl) nameEl.textContent = aboutMeData.name;
    if (professionEl) professionEl.textContent = aboutMeData.profession;
    if (employmentEl) employmentEl.textContent = aboutMeData.employment;
    if (photoEl) photoEl.src = aboutMeData.photoSrc;
    
    const descriptionDiv = document.querySelector('#aboutMeMobileDesciption > div:first-child');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = aboutMeData.description;
    }
    
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
    fillAboutMeDesktop();
    fillAboutMeMobile();
    
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

function initDesktopVersion() {
    const aboutMeButton = document.getElementById('about-button');
    const projectInfoBlock = document.getElementsByClassName("project_info")[0];
    const aboutMeBlock = document.getElementsByClassName("about_info")[0];
    const projectVideo = document.getElementById('projectVideo');
    const projectName = document.getElementById('projectName');
    const projectDescription = document.getElementById('projectDescription');
    const projectLinks = document.getElementById('projectLinks');
    const projectsButtons = document.getElementById('projectsButtons');

    function createProjectsButtons() {
        projectsArray.forEach(function (project) {
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
        button.addEventListener('click', function () {
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

                // ---- ССЫЛКИ (с отступом и оранжевым цветом) ----
                if (project.links && project.links.length > 0) {
                    // Добавляем отступ сверху для блока ссылок
                    projectLinks.style.marginTop = '12px';

                    project.links.forEach(function (linkObj) {
                        const linkDiv = document.createElement('div');
                        linkDiv.className = 'project_link_item';
                        linkDiv.innerHTML = `
                            <span class="white_text">• </span>
                            <a style="color: #de764c; font-weight: bold;" href="${linkObj.url}" target="_blank">${linkObj.title}</a>
                        `;
                        projectLinks.appendChild(linkDiv);
                    });
                }

                // Перемещаем ссылки после описания
                if (projectDescription.nextSibling !== projectLinks) {
                    projectDescription.parentNode.insertBefore(projectLinks, projectDescription.nextSibling);
                }
            }
        });
    });

    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', function () {
            aboutMeBlock.style.display = 'flex';
            projectInfoBlock.style.display = 'none';
        });
    }
}

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

    if (navBarTitle) navBarTitle.textContent = 'Обо мне';
    if (selectMenu) selectMenu.style.display = 'none';
    if (aboutMePage) aboutMePage.style.display = 'flex';
    if (projectInfo) projectInfo.style.display = 'none';

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
        burgerButton.addEventListener('click', () => {
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
    }

    function createProjectsButtons() {
        projectsArray.forEach(function (project) {
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

    function addFunctionInProjectButton() {
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

                    if (projectDescription) {
                        projectDescription.textContent = project.description;
                    }

                    // ---- ССЫЛКИ (с отступом и оранжевым цветом) ----
                    if (projectLinks && project.links && project.links.length > 0) {
                        // Добавляем отступ сверху для блока ссылок
                        projectLinks.style.marginTop = '12px';

                        project.links.forEach(function (linkObj) {
                            const linkDiv = document.createElement('div');
                            linkDiv.className = 'project_link_item';
                            linkDiv.innerHTML = `
                                <span class="white_text">• </span>
                                <a style="color: #de764c; font-weight: bold;" href="${linkObj.url}" target="_blank">${linkObj.title}</a>
                            `;
                            projectLinks.appendChild(linkDiv);
                        });
                    }

                    // Перемещаем ссылки после описания
                    if (projectDescription && projectLinks) {
                        if (projectDescription.nextSibling !== projectLinks) {
                            projectDescription.parentNode.insertBefore(projectLinks, projectDescription.nextSibling);
                        }
                    }
                }
            });
        });
    }
}