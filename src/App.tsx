import Footer, { ProfileLinkProp } from './components/footer/Footer';
import Header from './components/header/Header';
import hackerRankImg from './imgs/hr.png';
import linkedInImg from './imgs/lin.png';
import gitHubImg from './imgs/git.png';
import Content from './components/content/Content';

function App() {
  const profileLinks: ProfileLinkProp[] = [
    { title: 'Hacker Rank', link: 'https://www.hackerrank.com/KrishnaDV', img: hackerRankImg },
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/krishnadvrd', img: linkedInImg },
    { title: 'GitHub', link: 'https://www.github.com/BeastyDSK', img: gitHubImg },
  ];

  return (
    <>
      <Header />
      <Content />
      <Footer profileLinks={profileLinks} />
    </>
  );
}

export default App;
