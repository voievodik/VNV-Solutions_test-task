import { Fade } from "react-awesome-reveal";

import { questions } from "../../utils/constants";
import { faq } from "../../assets/images";
import { FAQItem } from "./FAQItem";

export const FAQContent = () => {
  return (
    <div className="container faq__content">
      <Fade direction="left" triggerOnce>
        <ul className="faq__list">
          {questions.map(question => (
            <FAQItem question={question} />
          ))}
        </ul>
      </Fade>

      <div className="faq__img-box">
        <Fade direction="right" triggerOnce>
          <img className="faq__img" src={faq} alt="faq" />
        </Fade>
      </div>
    </div>
  );
};
