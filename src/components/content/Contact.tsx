const ContactPage = () => {
  return (
    <section className="section-contact u-margin-bottom-lg">
      <h3 className="heading-tertiary u-margin-bottom-md">Get In Touch</h3>
      <p className="text centered u-margin-bottom-md">
        Currently, I am working and also looking for exciting opportunities. My inbox is always open. Just ping me, and
        I will try my best to get back to you ASAP!
      </p>
      <div className="contact">
        <a className="cta-btn" href="/resume.pdf" download="krishnaprasanth D V.pdf" aria-label="My Resume">
          My Resume
        </a>
        <a className="cta-btn" href="mailto:dhawansaran14346@gmail.com?subject=Hi" aria-label="Say Hello to me">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
