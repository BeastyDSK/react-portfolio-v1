const Content = () => {
  return (
    <main className="container">
      <section className="section-heading u-margin-bottom-hg">
        <h1 className="heading-primary">Hi There, Welcome</h1>
        <h2 className="heading-secondary u-margin-bottom-hg heading-h2">
          I am <span className="heading-special">Krishnaprasanth</span>
        </h2>
        <a className="special-btn" href="#skills" aria-label="Lets Begin!">
          Let's Begin!
        </a>
      </section>
      <section className="section-skills u-margin-bottom-hg" id="skills">
        <h3 className="heading-tertiary u-margin-bottom-md">I am Skilled In 🐱‍👤</h3>
        <div className="skill-items">
          <p className="skill-item">HTML5 &amp; CSS3</p>
          <p className="skill-item">AWS</p>
          <p className="skill-item">JavaScript</p>
          <p className="skill-item">NodeJS</p>
          <p className="skill-item">SASS</p>
          <p className="skill-item">PostgreSQL</p>
          <p className="skill-item">MySQL</p>
          <p className="skill-item">MongoDB</p>
          <p className="skill-item">GIT</p>
          <p className="skill-item">Heroku</p>
          <p className="skill-item">Python</p>
          <p className="skill-item">Expres</p>
          <p className="skill-item">TypeScript</p>
          <p className="skill-item">React</p>
          <p className="skill-item">Jest</p>
        </div>
      </section>
      <section className="section-about u-margin-bottom-hg" id="about-me">
        <h3 className="heading-tertiary u-margin-bottom-md">Who Am I ? 🤔</h3>
        <p className="text u-margin-bottom-sm">
          Hi There! My name is <span className="highlight">Krishnaprasanth</span>
          <span>.I am a Full-stack Web developer. </span>
        </p>
        <p className="text u-margin-bottom-sm">
          I started my career in 2020. Currently I am working in
          <a
            className="highlight"
            href="https://www.iresponsivesolutions.com/"
            target="_blank"
            aria-label="iResponsive solutions home page"
          >
            {' '}
            iResponsive Solutions{' '}
          </a>
          <span>
            (MERN stack Developer). I am responsible for creating API's, getting the client requirement, Servers, DB
            operations etc.
          </span>
        </p>
        <p className="text">My Hobbies are writing stories, watching anime, cricket and football.</p>
      </section>
      <section className="section-projects u-margin-bottom-hg" id="projects">
        <h3 className="heading-tertiary u-margin-bottom-md">Recent projects</h3>
        <div className="cards">
          <div className="card">
            <p className="card-title">Coffee Time</p>
            <div className="card-description">
              <p className="card-text">
                Coffee Time application is based on web scrapping. When someone searches a news related topic, in the
                back-end it will fetch the related news and will send back as a response.
              </p>
            </div>
            <div className="card-tech">
              <ul className="card-tech-items">
                <li className="card-tech-item">Python</li>
                <li className="card-tech-item">Flask </li>
                <li className="card-tech-item">SASS</li>
                <li className="card-tech-item">HTML5</li>
                <li className="card-tech-item">CSS3</li>
              </ul>
            </div>
            <div className="card-links">
              {' '}
              <a
                className="git-link"
                href="https://github.com/BeastyDSK/Python-News-App"
                target="_blank"
                aria-label="Python news app Github link"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                  <path d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                </svg>
              </a>
              <a
                className="open-link"
                href="https://dsk-news-app.herokuapp.com"
                target="_blank"
                aria-label="Open Coffee Time app"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                  <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <p className="card-title">WeatherIO</p>
            <div className="card-description">
              <p className="card-text">
                Weather IO application is a realtime weather application that uses API to fetch the weather data. This
                Application also includes one GET API.
              </p>
            </div>
            <div className="card-tech">
              <ul className="card-tech-items">
                <li className="card-tech-item">JavaScript</li>
                <li className="card-tech-item">NodeJS</li>
                <li className="card-tech-item">Rest API</li>
                <li className="card-tech-item">HTML5</li>
                <li className="card-tech-item">CSS3</li>
              </ul>
            </div>
            <div className="card-links">
              {' '}
              <a
                className="git-link"
                href="https://github.com/BeastyDSK/node-weather-app"
                target="_blank"
                aria-label="Node weather app Github link"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                  <path d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                </svg>
              </a>
              <a
                className="open-link"
                href="https://dsk-weather-io.herokuapp.com"
                target="_blank"
                aria-label="Open WeatherIO app"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                  <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <p className="card-title">ClassFinder GUI</p>
            <div className="card-description">
              <p className="card-text">
                Java Class Finder GUI is a simple utility to search class files inside a jar package. This desktop
                software is created by using JavaFX 1.8. It supports both normal and RegEx expression.
              </p>
            </div>
            <div className="card-tech">
              <ul className="card-tech-items">
                <li className="card-tech-item">Java</li>
                <li className="card-tech-item">JavaFX</li>
                <li className="card-tech-item">FXML</li>
                <li className="card-tech-item">CSS</li>
              </ul>
            </div>
            <div className="card-links">
              {' '}
              <a
                className="git-link"
                href="https://github.com/BeastyDSK/JarClassFinder"
                target="_blank"
                aria-label="Class Finder Github link"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                  <path d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                </svg>
              </a>
              <a
                className="open-link"
                href="https://github.com/BeastyDSK/JarClassFinder/blob/main/ClassFinderGUI.jar"
                target="_blank"
                aria-label="Open Class Finder app"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                  <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <p className="card-title">NumberIO</p>
            <div className="card-description">
              <p className="card-text">
                NumberIO is a fun application. Using this application you can check whether a given number is an
                Armstrong, Prime , Perfect, Happy or Fibonnaci Number.
              </p>
            </div>
            <div className="card-tech">
              <ul className="card-tech-items">
                <li className="card-tech-item">Python</li>
                <li className="card-tech-item">Flask</li>
                <li className="card-tech-item">REST API</li>
                <li className="card-tech-item">HTML5</li>
                <li className="card-tech-item">CSS3</li>
              </ul>
            </div>
            <div className="card-links">
              {' '}
              <a
                className="git-link"
                href="https://github.com/BeastyDSK/Python-Flask-NumberIO"
                target="_blank"
                aria-label="Python NumberIO app Github link"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                  <path d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                </svg>
              </a>
              <a
                className="open-link"
                href="https://numberio.herokuapp.com/"
                target="_blank"
                aria-label="Open NumberIO app"
              >
                <svg fill="#FD7E14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                  <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-contact u-margin-bottom-lg">
        <h3 className="heading-tertiary u-margin-bottom-md">Get In Touch</h3>
        <p className="text centered u-margin-bottom-md">
          Currently I am working and also looking for exciting Opportunities. My inbox is always open. Just ping me, I
          will try my best to get back to you ASAP!
        </p>
        <div className="contact">
          <a className="cta-btn" href="/resume.pdf" download="krishnaprasanth D V.pdf" aria-label="My Resume">
            My Resume{' '}
          </a>
          <a className="cta-btn" href="mailto:dhawansaran14346@gmail.com?subject=Hi" aria-label="Say Hello to me">
            Say Hello
          </a>
        </div>
      </section>
    </main>
  );
};

export default Content;
