import Navigation, { LinkProp } from '../navigation/Navigation';

const Header = () => {
  const links: LinkProp[] = [
    { title: 'My Skill', href: '#skills' },
    { title: 'About Me', href: '#about-me' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact Me', href: 'mailto:dhawansara14346@gmail.com?subject=Hi%20There', clasName: 'cta-btn' },
  ];

  return (
    <header className="header">
      <a className="header_logo" href="/" aria-label="Home Page - Link">
        <span className="header_logo-text">Portfolio</span>
      </a>
      <div className="menu">
        <input className="menu-box" type="checkbox" id="menu" name="menu" />
        <label className="menu-icon" htmlFor="menu" aria-label="menu">
          <span>&nbsp;</span>
        </label>
      </div>
      <Navigation links={links}/>
    </header>
  );
};

export default Header;
