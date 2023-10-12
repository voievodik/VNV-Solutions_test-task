import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

import Slider from '../Slider/Slider';
import './projects.scss';

export const Projects = () => {
  return (
    <section className='projects' id="projects">
      <Fade direction='right' triggerOnce>
        <h2 className='projects__title'>
          <FormattedMessage id="projects.title" defaultMessage="Our portfolio" />
        </h2>
      </Fade>

      <Fade direction='left' triggerOnce>
        <p className='projects__description'>
          <FormattedMessage 
            id="projects.description" 
            defaultMessage="Each site is created by a team of professionals who have extensive experience in the field of design and web development." 
          />
        </p>
      </Fade>
      
      <Slider />
    </section>
  );
};
