import { FormattedMessage } from 'react-intl';
import { HashLink as Link} from 'react-router-hash-link';
import { Fade } from 'react-awesome-reveal';
import classNames from "classnames";

type Props = {
  isMenuOpen: boolean;
}

export const OrderButton: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <Link
      className={classNames('header__order', 'order', {
        'is-menu-active': isMenuOpen,
      })}
      to="#social"
    >
      <Fade direction='right' triggerOnce>
        <button className="order__button">
          <FormattedMessage id="home.order" defaultMessage={"Order service"} />
        </button>
      </Fade>
    </Link>
  );
};
