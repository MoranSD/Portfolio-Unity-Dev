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
        "description": "Коммерческий проект. Исполнял роль технического директора и ведущего программиста. Разработал систему миссий, механику строительства и прогрессии игрока, интегрировав их с существующим готовым ассетом. Реализовал полный цикл геймплея от создания контента до оптимизации.",
        "links": []
    },
    {
        "name": "Brick Battles",
        "videoLink": "https://www.youtube.com/embed/2LQpmJtqwgI?si=yUk-RJktjstb0QAP",
        "description": "Быстрая PvP игра с полностью разрушаемыми кирпичными аренами. В качестве ведущего программиста реализовал механики боя, физику разрушения структур, систему анимаций и визуальных эффектов. Провел оптимизацию для гладкого множественного боя в реальном времени.",
        "links": []
    },
    {
        "name": "Climb Race",
        "videoLink": "https://www.youtube.com/embed/qpqYZ4Bq6OI?si=MAQEXdOJxlqBLLFM",
        "description": "Гипер-казуальная гоночная игра на скорость. Разработал пользовательский интерфейс, реализовал интеграцию Facebook SDK и AppsFlyer для аналитики, создал систему анимаций и эффектов. Оптимизировал игру для различных мобильных устройств.",
        "links": []
    },
    {
        "name": "Royal Armies",
        "videoLink": "https://www.youtube.com/embed/7T1jF4TgQtw?si=DeHqyTScCfLxa-__",
        "description": "Tower defense игра со стратегическим геймплеем. В качестве основного программиста реализовал механики размещения башен, системы волн врагов и боевые алгоритмы. Создал сложные анимации боевых эффектов и оптимизировал рендеринг для множественных объектов на сцене.",
        "links": []
    },
    {
        "name": "Clean Master",
        "videoLink": "https://www.youtube.com/embed/hPCO2y-liII?si=eCJ08erUW8hKJEvj",
        "description": "Casual симулятор уборки. Программировал основные механики сбора мусора, системы таймеров и награды. Разработал набор визуальных эффектов трансформации грязных объектов, создал анимации процесса очистки и оптимизировал производительность для мобильных платформ.",
        "links": []
    },
    {
        "name": "Fly Delivery",
        "videoLink": "https://www.youtube.com/embed/L8kiIHOsKHk?si=MD0DbqLm_Y_11Vh8",
        "description": "Авиа-логистическая головоломка. Реализовал механики управления летательным аппаратом, систему маршрутов доставки и обработку столкновений. Создал систему эффектов для посадки и доставки грузов, оптимизировал физику движения.",
        "links": []
    },
    {
        "name": "Sword Play",
        "videoLink": "https://www.youtube.com/embed/PeG9oAum0ZE?si=HXr7bbp7Bd60VkZl",
        "description": "Динамичная боевая игра с физикой разрезания объектов. Разработал систему боевых комбо, интегрировал асет Dynamic Mesh Cutter для реалистичной физики отсечения. Реализовал сложные парикулярные эффекты, создал систему обратной связи от удара и провел оптимизацию для высокой частоты кадров.",
        "links": []
    },
    {
        "name": "Dino Merge",
        "videoLink": "https://www.youtube.com/embed/HPVIqW95MAk?si=5jqIMN8n_ru9W283",
        "description": "Эволюционная головоломка с мерджем динозавров. Программировал механику слияния существ, систему прогрессии и боевой арены. Создал анимации эволюции, эффекты трансформации и оптимизировал UI для интуитивного взаимодействия с множеством объектов.",
        "links": []
    }
];

// Функция для заполнения данных "Обо мне" в десктопной версии
function fillAboutMeDesktop() {
    const aboutInfo = document.querySelector('.about_info');
    
    // Заполняем основную информацию
    document.querySelector('.about_info-main-name').textContent = aboutMeData.name;
    document.querySelector('.about_info-main-profession').textContent = aboutMeData.profession;
    document.querySelector('.about_info-main-employment').textContent = aboutMeData.employment;
    document.querySelector('.about_info-photo').src = aboutMeData.photoSrc;
    document.querySelector('.about_info-about_text').innerHTML = aboutMeData.description;
    
    // Заполняем ссылки
    const linksContainer = document.querySelector('.about_info-links');
    linksContainer.innerHTML = '';
    aboutMeData.links.forEach(link => {
        const linkDiv = document.createElement('div');
        linkDiv.className = 'about_info-link';
        linkDiv.innerHTML = `
            <div class="about_info-link_title orange_text">${link.title} -</div>
            <a class="white_text" href="${link.url}">${link.url}</a>
        `;
        linksContainer.appendChild(linkDiv);
    });
    
    // Заполняем опыт работы
    const experienceContainer = document.querySelector('.work_expierence-studios');
    experienceContainer.innerHTML = '';
    aboutMeData.workExperience.forEach(exp => {
        experienceContainer.innerHTML += `
            <li class="orange_text">${exp.company}</li>
            <div class="work_expierence-concrete about_info_spacing white_text">${exp.description}</div>
        `;
    });
    
    // Заполняем ключевые навыки
    const keySkillsContainer = document.querySelector('.about_info-skills:nth-of-type(1) .skills-concrete');
    keySkillsContainer.innerHTML = '';
    aboutMeData.keySkills.forEach(skill => {
        keySkillsContainer.innerHTML += `<li>${skill}</li>`;
    });
    
    // Заполняем дополнительные навыки
    const additionalSkillsContainer = document.querySelector('.about_info-skills:nth-of-type(2) .skills-concrete');
    additionalSkillsContainer.innerHTML = '';
    aboutMeData.additionalSkills.forEach(skill => {
        additionalSkillsContainer.innerHTML += `<li>${skill}</li>`;
    });
}

// Функция для заполнения данных "Обо мне" в мобильной версии
function fillAboutMeMobile() {
    // Заполняем основную информацию
    document.getElementById('aboutMeMobileName').textContent = aboutMeData.name;
    document.getElementById('aboutMeMobileProfession').textContent = aboutMeData.profession;
    document.getElementById('aboutMeMobileEmployment').textContent = aboutMeData.employment;
    document.getElementById('aboutMeMobilePhoto').src = aboutMeData.photoSrc;
    document.querySelector('#aboutMeMobileDesciption > div:first-child').innerHTML = aboutMeData.description;
    
    // Заполняем ссылки
    const linksContainer = document.getElementById('aboutMeMobileDesciptionLinks');
    linksContainer.innerHTML = '';
    aboutMeData.links.forEach(link => {
        const linkDiv = document.createElement('div');
        linkDiv.className = 'about_info-link';
        linkDiv.innerHTML = `
            <div class="aboutMeMobileDesciptionLinksText orange_text">${link.title} -</div>
            <a class="white_text" href="${link.url}">${link.url}</a>
        `;
        linksContainer.appendChild(linkDiv);
    });
    
    // Заполняем опыт работы
    const experienceContainer = document.querySelector('#workExpirience .work_expierence-studios');
    experienceContainer.innerHTML = '';
    aboutMeData.workExperience.forEach(exp => {
        experienceContainer.innerHTML += `
            <li class="orange_text">${exp.company}</li>
            <div class="work_expierence-concrete about_info_spacing white_text">${exp.description}</div>
        `;
    });
    
    // Заполняем ключевые навыки
    const keySkillsContainer = document.querySelectorAll('.about_info-skills')[0].querySelector('.skills-concrete');
    keySkillsContainer.innerHTML = '';
    aboutMeData.keySkills.forEach(skill => {
        keySkillsContainer.innerHTML += `<li>${skill}</li>`;
    });
    
    // Заполняем дополнительные навыки
    const additionalSkillsContainer = document.querySelectorAll('.about_info-skills')[1].querySelector('.skills-concrete');
    additionalSkillsContainer.innerHTML = '';
    aboutMeData.additionalSkills.forEach(skill => {
        additionalSkillsContainer.innerHTML += `<li>${skill}</li>`;
    });
}

// Основной код
if(document.getElementById('mobileBlock').style.display == 'none' || document.getElementById('mobileBlock').style.display == ''){
    // Десктопная версия
    const aboutMeButton = document.getElementById('about-button');
    const projectInfoBlock = document.getElementsByClassName("project_info")[0];
    const aboutMeBlock = document.getElementsByClassName("about_info")[0];
    const projectVideo = document.getElementById('projectVideo');
    const projectName = document.getElementById('projectName');
    const projectDescription = document.getElementById('projectDescription');
    const projectLinks = document.getElementById('projectLinks');
    const projectsButtons = document.getElementById('projectsButtons');

    // Заполняем данные "Обо мне"
    fillAboutMeDesktop();

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

    aboutMeButton.style.borderColor = 'rgba(94, 94, 94, 0.5)';
    aboutMeButton.style.color = 'rgba(94, 94, 94, 0.5)';

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

    aboutMeButton.addEventListener('click', function() {
        aboutMeBlock.style.display = 'flex';
        projectInfoBlock.style.display = 'none';
    });
}

if(document.getElementById('mobileBlock').style.display != 'none'){
    // Мобильная версия
    const selectButtonsArray = [];
    projectsArray.forEach(project => {
        selectButtonsArray.push({name: project.name});
    });

    // Заполняем данные "Обо мне"
    fillAboutMeMobile();

    const burgerButton = document.getElementById('burgerButton');
    const navBarTitle = document.getElementById('navBarTitle');
    navBarTitle.textContent = 'Обо мне';
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
    aboutMeButton.addEventListener('click', () => {
        currentPage.style.display = 'none';
        currentPage = aboutMePage;
        currentPage.style.display = 'flex';
        selectMenu.style.display = 'none';
        navBarTitle.textContent = aboutMeButton.textContent;
        burgerButton.classList.remove('burger_active');
    });

    burgerButton.addEventListener('click', () => {
        if(selectMenu.style.display == '' || selectMenu.style.display == 'none'){
            currentPage.style.display = 'none';
            selectMenu.style.display = 'flex';
            burgerButton.classList.add('burger_active');
        } else {
            selectMenu.style.display = 'none';
            currentPage.style.display = 'flex';
            burgerButton.classList.remove('burger_active');
        }
        if(!projectButtonsIsCreate){
            createProjectsButtons();
        }
    });

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
            projectButtons.appendChild(button);
        });
        projectButtonsIsCreate = true;
        addFunctionInProjectButton();
    }

    function addFunctionInProjectButton(){
        const projectsButtons = Array.from(document.getElementsByClassName('mobileProjectsButtons'));
        projectsButtons.forEach((button) => {
            button.addEventListener('click', () => {
                burgerButton.classList.remove('burger_active');
                const project = projectsArray.find(p => p.name === button.textContent);
                selectMenu.style.display = 'none';
                currentPage = projectInfo;
                currentPage.style.display = 'flex';
                navBarTitle.textContent = button.textContent;
                navBarTitle.style.textWrap = 'nowrap';

                projectVideo.innerHTML = '';
                projectName.textContent = '';
                projectDescription.textContent = '';
                projectLinks.innerHTML = '';

                if (project) {
                    const video = document.createElement('iframe');
                    video.height = '100%';
                    video.width = '100%';
                    video.style.border = 'none';
                    video.src = project.videoLink;
                    projectVideo.appendChild(video);

                    projectName.textContent = project.name;
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
    }
}