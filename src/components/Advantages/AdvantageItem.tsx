import { FormattedMessage } from "react-intl";
import { Fade } from "react-awesome-reveal";

import { AdvantageType } from "../../types/AdvantageType";

type Props = {
  advantage: AdvantageType;
}

export const AdvantageItem: React.FC<Props> = ({ advantage }) => {
  return (
    <Fade direction="up" triggerOnce>
      <li className="advantages__item">
        <div className="advantages__item-box">
          <h3 className="advantages__title">
            <FormattedMessage
              id={advantage.title}
              defaultMessage={advantage.title}
            />
          </h3>
          <p className="advantages__description">
            <FormattedMessage
              id={advantage.description}
              defaultMessage={advantage.description}
            />
          </p>
        </div>
      </li>
    </Fade>
  );
};
