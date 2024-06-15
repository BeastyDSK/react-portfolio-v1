export type ProfileLinkProp = {
  title: string;
  link: string;
  img: string;
};

export type FooterProps = {
  profileLinks: ProfileLinkProp[];
};

const ProfileLink = ({ title, link, img }: ProfileLinkProp) => {
  return (
    <li className="profile-link-item">
      <a className="profile-link" href={link} aria-label={title} target="_blank" rel="noreferrer">
        <img src={img} alt={`${title}`} />
      </a>
    </li>
  );
};

const Footer = ({ profileLinks }: FooterProps) => {
  const profileLinkEl = profileLinks.map((profileLink) => {
    return <ProfileLink {...profileLink}/>
  });

  return (
    <footer className="footer">
      <p className="footer-text u-margin-bottom-sm">
        Designed & Built by <span>Krishnaprasanth DSK</span>
      </p>
      <div className="profile">
        <ul className="profile-link-items">
          {profileLinkEl}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
