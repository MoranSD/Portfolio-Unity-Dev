if(document.getElementById('mobileBlock').style.display != 'none'){
    
    const projectsArray = [
        {
          name: 'надувает 300 шариков челлендж',
          links: ['http://127.0.0.1:5500/', 'http://127.0.0.1:55000/'],
          videoLink: 'https://www.youtube.com/embed/ANJaK5KPzn4?si=9HKxaq3eHy3tMA2C',
          description: 'подписывайтесь на мой онлифанс'
        },
        {
          name: 'надувает 300',
          links: ['http://127.0.0.1:5500/', 'http://127.0.0.1:55000/'],
          videoLink: 'https://www.youtube.com/embed/ANJaK5KPzn4?si=9HKxaq3eHy3tMA2C',
          description: 'подписывайтесь на мой онлифанс'
        },
        {
          name: 'надувает 300',
          links: ['http://127.0.0.1:5500/', 'http://127.0.0.1:55000/'],
          videoLink: 'https://www.youtube.com/embed/ANJaK5KPzn4?si=9HKxaq3eHy3tMA2C',
          description: 'подписывайтесь на мой онлифанс'
        },
      ]
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