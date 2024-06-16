import ContactPage from './Contact';
import ExperiencePage from './ExperiencePage';
import Intro from './Intro';
import ProjectPage from './ProjectPage';
import SkillPage from './SkillPage';

const Content = () => {
  return (
    <main className="container">
      <Intro />
      <SkillPage />
      <ExperiencePage />
      <ProjectPage />
      <ContactPage />
    </main>
  );
};

export default Content;
