import { FormattedMessage } from "react-intl";
import { Fade } from "react-awesome-reveal";

import { FAQContent } from "./FAQContent";
import './faq.scss';

export const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <Fade direction="left" triggerOnce>
        <h1 className="faq__title">
          <FormattedMessage id="faq.title" defaultMessage="Frequently Asked Questions" />
        </h1>
      </Fade>

      <Fade direction="right" triggerOnce>
        <p className="faq__description">
          <FormattedMessage
            id="faq.description"
            defaultMessage="If you still have other questions about the site development, our managers will be happy to advise you personally."
          />
        </p>
      </Fade>

      <FAQContent />
    </section>
  );
};
