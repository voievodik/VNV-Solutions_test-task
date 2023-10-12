import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './widget.scss';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export const Widget = () => {
  const [hasWidgetShown, setHasWidgetShown] = useState(true);

  return (
    <div className='widget'>
      {hasWidgetShown && (
        <Fade direction='up' triggerOnce>
          <div className='widget__content'>
            <AiOutlineClose
              className="widget__icon-close"
              onClick={() => setHasWidgetShown(false)}
            />

            <h2 className='widget__title'>
              <FormattedMessage id="widget.title" defaultMessage="Discount on first order" />
            </h2>

            <FormattedMessage id="widget.description" defaultMessage="Get 10% off your first order!">
              {(message) => (
                <p
                  className='widget__description'
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
            </FormattedMessage>

            <Link to="/" className="widget__button">
              <svg>
                <rect x="0" y="0" fill="none" />
              </svg>

              <FormattedMessage id="widget.button" defaultMessage="Get a discount" />
            </Link>
          </div>
        </Fade>
      )}
    </div>
  )
}


