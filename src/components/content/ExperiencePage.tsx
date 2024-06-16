const ExperiencePage = () => {
  return (
    <section className="section-about u-margin-bottom-hg" id="about-me">
      <h3 className="heading-tertiary u-margin-bottom-md">Who Am I ? 🤔</h3>
      <p className="text u-margin-bottom-sm">
        Hi There! I am <span className="highlight">Krishnaprasanth</span>
        <span>. I am a MERN stack developer with 3+ years of experience. </span>
      </p>
      <p className="text u-margin-bottom-sm">
        I started my career in 2020 at <a
          className="highlight"
          href="https://www.tcs.com/"
          target="_blank"
          aria-label="Tata consultancy services home page"
          rel="noreferrer"
        >Tata Consultancy Services
        </a>. Currently, I am working at
        <a
          className="highlight"
          href="https://www.iresponsivesolutions.com/"
          target="_blank"
          aria-label="iResponsive solutions home page"
          rel="noreferrer"
        >
          {' '}
          iResponsive Solutions{' '}
        </a>.
      </p>
      <p className="text">In my free time, I write stories, watch anime, and practice writing with both hands😅.</p>
    </section>
  );
};

export default ExperiencePage;
