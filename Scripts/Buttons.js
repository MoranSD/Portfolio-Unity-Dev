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
]


/*
  {
    name: 'Fat Jump',
    videoLink: '<https://www.youtube.com/embed/UwzvTpLJN9A',
    description: 'Заказ, исполнял обязанности программиста, написание механик, работа с анимацией/эффектами, оптимизация.'
  },
*/

if(document.getElementById('mobileBlock').style.display == 'none' || document.getElementById('mobileBlock').style.display == ''){
  
  const aboutMeButton = document.getElementById('about-button');

  const projectInfoBlock = document.getElementsByClassName("project_info")[0];
  const aboutMeBlock = document.getElementsByClassName("about_info")[0];

  const projectVideo = document.getElementById('projectVideo');
  const projectName = document.getElementById('projectName');
  const projectDescription = document.getElementById('projectDescription')
  const projectLinks = document.getElementById('projectLinks');

  const projectsButtons = document.getElementById('projectsButtons');

  createProjectsButtons();
  const buttons = document.querySelectorAll('button');

  const projectButtons = Array.from(document.getElementsByClassName('my_projects-buttons-button'));

  aboutMeButton.style.borderColor = 'rgba(94, 94, 94, 0.5)';
  aboutMeButton.style.color = 'rgba(94, 94, 94, 0.5)'

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.style.borderColor = 'rgba(94, 94, 94, 1)';
        btn.style.color = 'rgba(94, 94, 94, 1)'
      });

      button.style.borderColor = 'rgba(94, 94, 94, 0.5)';
      button.style.color = 'rgba(94, 94, 94, 0.5)'
    });
  }

  )

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

      const project = findObjectByName(buttonText)

      const video = document.createElement('iframe');
      video.height = '100%';
      video.width = '100%';
      video.style.border = 'none';
      video.src = project.videoLink;
      projectVideo.appendChild(video);

      projectName.textContent = buttonText;
      projectName.style.textTransform = 'capitalize';
      projectDescription.textContent = project.description;

      const links = project.links

      if(projectLinks.querySelectorAll('a').length == 0){
          links.map(function (link){
          const a = document.createElement('a');
          a.href = link;
          a.textContent = link;
          a.style.textDecoration = 'none'
          projectLinks.appendChild(a);
        })
      }
    });
  });

  aboutMeButton.addEventListener('click', function() {
    aboutMeBlock.style.display = 'flex';
    projectInfoBlock.style.display = 'none';
  })

  function findObjectByName(name) {
    return projectsArray.find(function(object) {
      return object.name === name;
    });
  }

  function createProjectsButtons(){
    projectsArray.map(function (project){
      const button = document.createElement('button');
      button.style.width = '100%';
      button.style.marginBottom = '1vw';
      button.style.padding = '2%'
      button.className = 'my_projects-buttons-button';
      button.style.textTransform = 'uppercase';
      button.style.textWrap = 'nowrap';
      button.style.fontSize = '150%';
      button.textContent = project.name;
      projectsButtons.appendChild(button);
    })
  }

}
if(document.getElementById('mobileBlock').style.display != 'none'){
  
    const selectButtonsArray = []

    projectsArray.forEach(project => {
      const newSelectButton = {name: project.name}
      selectButtonsArray.push(newSelectButton);
    });

  const burgerButton = document.getElementById('burgerButton');
  const navBar = document.getElementById('navBar');
  const navBarTitle = document.getElementById('navBarTitle');
  navBar.style.textTransform = 'capitalize'
  const projectButtons = document.getElementById('mobileProjectsButtons');
  let projectButtonsIsCreate = false;
  navBarTitle.textContent = 'Обо мне';

  const aboutMePage = document.getElementById('aboutMePage');
  const projectInfo = document.getElementById('projectInfoBlock');
  const selectMenu = document.getElementById('selectMenu');

  let currentPage = aboutMePage;
  
  const projectName = document.getElementById('projectInfoTitle');
  const projectLinks = document.getElementById('projectInfoLinks');
  const projectVideo = document.getElementById('mobileProjectVideo');
  const projectDescription = document.getElementById('projectInfoDescription')

  const aboutMeButton = document.getElementById('selectMenuAboutMeButton');
  aboutMeButton.addEventListener('click', () => {
      currentPage.style.display = 'none';
      currentPage = aboutMePage;
      currentPage.style.display = 'flex'
      selectMenu.style.display = 'none';
      navBarTitle.textContent = aboutMeButton.textContent;
      burgerButton.classList.remove('burger_active');
  })

  burgerButton.addEventListener('click', () =>{
      if(selectMenu.style.display == '' || selectMenu.style.display == 'none'){
          currentPage.style.display = 'none';
          selectMenu.style.display = 'flex';
          burgerButton.classList.add('burger_active');
      }
      else{
          selectMenu.style.display = 'none';
          currentPage.style.display = 'flex';
          burgerButton.classList.remove('burger_active');
      }
      if(!projectButtonsIsCreate){
          createProjectsButtons();
      }
  })

  function createProjectsButtons(){
      projectsArray.map(function (project){
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
      })
      projectButtonsIsCreate = true;
      addFunctionInProjectButton();
  }

  function addFunctionInProjectButton(){
      const projectsButtons = Array.from(document.getElementsByClassName('mobileProjectsButtons'));
      projectsButtons.forEach((button) =>{
          button.addEventListener('click', () =>{
              burgerButton.classList.remove('burger_active');
              const project = findObjectByName(button.textContent)
              selectMenu.style.display = 'none';
              currentPage = projectInfo;
              currentPage.style.display = 'flex';
              navBarTitle.textContent = button.textContent;
              navBarTitle.style.textWrap = 'nowrap';

              projectVideo.innerHTML = '';
              projectName.textContent = '';
              projectDescription.textContent = '';
              projectLinks.innerHTML = '';

              const video = document.createElement('iframe');
              video.height = '100%';
              video.width = '100%';
              video.style.border = 'none';
              video.src = project.videoLink;
              projectVideo.appendChild(video);

              projectName.textContent = project.name;
              projectName.style.textTransform = 'capitalize';
              projectDescription.textContent = project.description;

              const links = project.links
              if(projectLinks.querySelectorAll('a').length == 0){
                  links.map(function (link){
                  const a = document.createElement('a');
                  a.href = link;
                  a.textContent = link;
                  a.style.textDecoration = 'none'
                  projectLinks.appendChild(a);
                })
              }


          })
      })
  }
  

  function findObjectByName(name) {
      return projectsArray.find(function(object) {
        return object.name === name;
      });
    }

}