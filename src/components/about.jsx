import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constants';
import { GradientLight } from './design/Benefits';

const About = () => {
  return (
    <Section id="About" className="px-4 md:px-6 lg:px-8">
      <div className='container relative z-2'>
        <Heading 
          className="max-w-md sm:max-w-md lg:max-w-2xl pt-6 mx-auto"
          title="Our Objectives"
        />
      </div>
      <div className='grid gap-10 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {benefits.map((item) => (
          <div 
            className='relative bg-no-repeat bg-cover p-0.5 rounded-lg md:max-w-[24rem]' 
            style={{ backgroundImage: `url(${item.backgroundUrl})` }} 
            key={item.id}
          >
            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]'>
              <h5 className='text-xl font-bold mb-5'>{item.title}</h5>
              <p className='text-base mb-6 text-n-3'>{item.text}</p>
              <div className='flex items-center mt-auto'>
                <img src={item.iconUrl} width={48} height={48} alt={item.title} />
              </div>
            </div>
            <GradientLight />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
