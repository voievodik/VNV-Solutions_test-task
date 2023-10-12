import { Fade } from 'react-awesome-reveal';
import { FormattedMessage } from 'react-intl';

import { Tabs } from '../Tabs';
import './services.scss';

export const Services = () => {
  return (
    <section className='services' id="services">
      <div className="container">
        <Fade direction='down' triggerOnce>
          <h2 className='services__title'>
            <FormattedMessage id="services.title" defaultMessage="Our services" />
          </h2>
        </Fade>

        <Tabs />
      </div>
    </section>
  );
};
