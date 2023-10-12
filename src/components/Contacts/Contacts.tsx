import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

import { Form } from '../Form';
import { brief } from '../../assets/images';
import './contacts.scss';

export const Contacts = () => {
  const [hasFormSent, setHasFormSent] = useState(false);

  return (
    <section className='contacts' id="contacts">
      <Fade direction='left' triggerOnce>
        <h2 className='contacts__title'>
          <FormattedMessage id="contacts.title" defaultMessage="Have an idea? Tell us about it" />
        </h2>
      </Fade>

      <div className="contacts__content container">
        <>
          <Form onFormSent={setHasFormSent} />

          {hasFormSent && (
            <div className='contacts__success'>
              <FormattedMessage id="contacts.success" defaultMessage="Thank you!" /></div>
          )}
        </>

        <Fade direction='right' triggerOnce>
          <Link className="contacts__brief-link" to="/">
            <img className='contacts__brief-img' src={brief} alt="brief" />
            To fill in the brief for web site development
          </Link>
        </Fade>
      </div>
    </section>
  );
};
