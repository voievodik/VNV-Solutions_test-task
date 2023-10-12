import { FormattedMessage } from "react-intl";
import { Fade } from "react-awesome-reveal";

import { advantages } from "../../utils/constants";
import { AdvantageItem } from "./AdvantageItem";
import './advantages.scss';

export const Advantages = () => {
  return (
    <section className="advantages" id="advantages">
      <Fade direction="right" triggerOnce>
        <FormattedMessage id="advantages.title" defaultMessage="Why Us?">
          {(message) => (
            <p
              className='advantages__title-main'
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </FormattedMessage>
      </Fade>

      <Fade direction="left" triggerOnce>
        <FormattedMessage 
          id="advantages.description"
          defaultMessage="Your IT solutions in reliable hands"
        >
          {(message) => (
            <p
              className='advantages__description-main'
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </FormattedMessage>
      </Fade>

      <ul className="advantages__list">
        {advantages.map(advantage => (
          <AdvantageItem key={advantage.id} advantage={advantage} />
        ))}
      </ul>

      <Fade direction="up" triggerOnce>
        <button className="advantages__order">
          <FormattedMessage
            id="main-order"
            defaultMessage={"Order"}
          />
          <div className="advantages__order-horizontal"></div>
          <div className="advantages__order-vertical"></div>
        </button>
      </Fade>
    </section>
  );
};
