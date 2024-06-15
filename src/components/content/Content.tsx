import ContactPage from './Contact';
import Intro from './Intro';
import ProjectPage from './ProjectPage';
import SkillPage from './SkillPage';

const Content = () => {
  return (
    <main className="container">
      <Intro />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
    </main>
  );
};

export default Content;
