import { HashLink as Link } from 'react-router-hash-link';
import { FormattedMessage } from "react-intl";
import { Fade } from 'react-awesome-reveal';
import classNames from "classnames";

import { menu } from "../../utils/constants";

type Props = {
  isMenuOpen: boolean;
  onMenuHide: () => void;
}

export const Menu: React.FC<Props> = ({ isMenuOpen, onMenuHide }) => {
  return (
    <nav
      className={classNames('header__menu', 'menu', {
        'is-menu-active': isMenuOpen,
      })}
    >
      <Fade direction='down' triggerOnce>
        {menu.map(item => {
          const { id, title } = item;

          return (
          <Link
            className="menu__link"
            to={`#${title}`}
            key={id}
            onClick={onMenuHide}
          >
            <FormattedMessage
              id={id}
              defaultMessage={title}
            />
          </Link>
          );
        })}
      </Fade>
    </nav>
  )
}
