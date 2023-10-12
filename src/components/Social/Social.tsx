import { Fade } from 'react-awesome-reveal';

import { socials } from '../../utils/constants';
import './social.scss';

export const Social = () => {
  return (
    <section className="social" id="social">
      <ul className='social__list'>
        {socials.map(social => (
          <Fade direction='right' triggerOnce>
            <li key={social.id} className='social__item'>
              <a href={social.link} className='social__link' target='_blank'>
                <social.icon className="social__icon" />
              </a>
            </li>
          </Fade>
        ))}
      </ul>
    </section>
  );
};
