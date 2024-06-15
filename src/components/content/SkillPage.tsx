export type SkillsProps = {
  skills: string[];
  className?: string;
};

export const SkillList = ({ skills, className }: SkillsProps) => {
  const SkillEl = skills.map((skill) => <li className={className}>{skill}</li>);

  return <ul className={`${className}s`}>{SkillEl}</ul>;
};

const SkillPage = () => {
  const skills = [
    'React',
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'Express',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Jest',
    'Python',
    'AWS',
    'Git',
  ];

  return (
    <section className="section-skills u-margin-bottom-hg" id="skills">
      <h3 className="heading-tertiary u-margin-bottom-md">I am Skilled In 🐱‍👤</h3>
      <SkillList skills={skills} className='skill-item' />
    </section>
  );
};

export default SkillPage;
