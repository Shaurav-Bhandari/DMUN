import Section from "./Section";
import Button from "./button";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { Link } from "react-router-dom";
import hero from '../assets/Hero.jpg'; // Background image

const Hero = () => {
  return (
    <Section
      className="pt-0 mt-0"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="Home"
    >
      {/* Background with linear gradient */}
      <div className="Hero bg-cover flex items-center justify-center text-1" 
           style={{backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${hero})`}}>
        <div className="container relative">
          <div className="relative lg:h1 z-1 max-w-[62rem] flex flex-col mx-auto text-center items-center justify-center h-screen mb-[4rem] md:mb-20 lg:mb-[6rem] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[60px] font-semibold">Deerwalk <span className="text-blue-500">Institute</span>
                    <br/> Model United Nations</h1>
                <p className="text-3xl mb-6">Empowering Voices, Shaping Futures</p>
            <Link to="/login">
              <Button className={`mb-8`} white>
                {"Register now"}
              </Button>
            </Link>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            
            <BackgroundCircles />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
