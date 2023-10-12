import { Fade } from 'react-awesome-reveal';
import { FormattedMessage } from 'react-intl';
import { HashLink as Link} from 'react-router-hash-link';

export const TabsButton = () => {
  return (
    <Fade direction='up' triggerOnce>
      <Link to="#brief">
        <button className="services__tabs-order-button">
          <span className='services__tabs-order-button-text'>
            <FormattedMessage id="main-order" defaultMessage={"Order"} />
          </span>

          <svg
            className='services__tabs-order-button-arrow'
            width="13px"
            height="10px"
            viewBox="0 0 13 10"
          >
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Link>
    </Fade>
  )
}
