import { SkillList } from './SkillPage';

export type ProjectCardProp = {
  title: string;
  content: string;
  techStack: string[];
  repository: string;
  websiteLink: string;
};

export type ProjectPageProps = {
  skills: ProjectCardProp[];
};

const ProjectCard = ({ title, content, techStack, repository, websiteLink }: ProjectCardProp) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <div className="card-description">
        <p className="card-text">{content}</p>
      </div>
      <div className="card-tech">
        <SkillList skills={techStack} className="card-tech-item" />
      </div>
      <div className="card-links">
        {' '}
        <a
          className="git-link"
          href={`https://github.com/BeastyDSK/${repository}`}
          target="_blank"
          aria-label={`${title} app Github link`}
          rel="noreferrer"
        >
          <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
          </svg>
        </a>
        <a className="open-link" href={websiteLink} target="_blank" aria-label={`Open ${title} app`} rel="noreferrer">
          <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const projects: ProjectCardProp[] = [
    {
      title: 'Coffee Time',
      content:
        'The Coffee Time application is based on web scraping. When someone searches a news-related topic, in the back-end, it will fetch the related news and send back a response.',
      repository: 'Python-News-App',
      techStack: ['Python', 'Flask', 'Rest API'],
      websiteLink: 'https://dsk-coffee-time.herokuapp.com',
    },
    {
      title: 'WeatherIO',
      content:
        'The Weather IO application is a real-time weather application that uses an API to fetch the weather data. This application also includes one GET API.',
      repository: 'node-weather-app',
      techStack: ['NodeJS', 'Rest API', 'PUG'],
      websiteLink: 'https://dsk-weather-io.herokuapp.com',
    },
    {
      title: 'ClassFinder GUI',
      content:
        'Java Class Finder GUI is a simple utility to search class files inside a jar package. This desktop software was created using JavaFX 1.8. It supports both normal and RegEx expressions.',
      repository: 'JarClassFinder',
      techStack: ['Java', 'JavaFX', 'FXML'],
      websiteLink: 'https://github.com/BeastyDSK/JarClassFinder/blob/main/ClassFinderGUI.jar',
    },
    {
      title: 'NumberIO',
      content:
        'NumberIO is a fun application. Using this application, you can check whether a given number is an Armstrong, Prime, Perfect, Happy, or Fibonacci number.',
      repository: 'Python-Flask-NumberIO',
      techStack: ['Python', 'Flask', 'Rest API'],
      websiteLink: 'https://numberio.herokuapp.com/',
    },
  ];

  const projectCards = projects.map((project, index) => <ProjectCard {...project} key={index} />);
  return (
    <section className="section-projects u-margin-bottom-hg" id="projects">
      <h3 className="heading-tertiary u-margin-bottom-md">Recent projects</h3>
      <div className="cards">{projectCards}</div>
    </section>
  );
};

export default ProjectPage;
