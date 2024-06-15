export type LinkProp = {
  title: string,
  href: string;
  clasName?: string
};

export type NavigationProps = {
  links: LinkProp[]
};

const Navigation = ({links}: NavigationProps) => {
  const linkEl = links.map((link) => {
    const {title, href, clasName} = link;
    return (
      <li className="navigation_item">
        <a className={`navigation_link ${clasName ?? ''}`} href={href} aria-label={`${title} - Link`} key={title}>
          {title}
        </a>
      </li>
    );
  });

  return (
    <nav className="navigation">
      <ul className="navigation_items">
        { linkEl }
      </ul>
    </nav>
  );
};

export default Navigation;
