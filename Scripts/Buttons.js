if(document.getElementById('mobileBlock').style.display == 'none' || document.getElementById('mobileBlock').style.display == ''){
  
  const aboutMeButton = document.getElementById('about-button');

  const projectInfoBlock = document.getElementsByClassName("project_info")[0];
  const aboutMeBlock = document.getElementsByClassName("about_info")[0];

  const projectVideo = document.getElementById('projectVideo');
  const projectName = document.getElementById('projectName');
  const projectDescription = document.getElementById('projectDescription')
  const projectLinks = document.getElementById('projectLinks');

  const projectsButtons = document.getElementById('projectsButtons');

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

  createProjectsButtons();
  const buttons = document.querySelectorAll('button');

  const projectButtons = Array.from(document.getElementsByClassName('my_projects-buttons-button'));

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
      button.style.width = '95%';
      button.style.marginBottom = '1vw';
      button.className = 'my_projects-buttons-button';
      button.style.textTransform = 'uppercase';
      button.style.textWrap = 'nowrap';
      button.style.fontSize = '160%';
      button.textContent = project.name;
      projectsButtons.appendChild(button);
    })
  }

}