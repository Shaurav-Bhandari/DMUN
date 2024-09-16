import About from './about';
import Features from './Features';
import ButtonGradient from '../assets/svg/ButtonGradient'

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <About />
      <Features />
      <ButtonGradient />
    </>
  );
};

export default Layout;
