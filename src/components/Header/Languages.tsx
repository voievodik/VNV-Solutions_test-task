import classNames from "classnames";
import { Fade } from "react-awesome-reveal";

import { languages } from "../../utils/constants";
import { useLanguage } from "../../hooks/useLanguage";

export const Languages = () => {
  const { locale, selectedLang } = useLanguage();

  return (
    <div className="header__languages languages">
        {languages.map(language => {
          const { id, title } = language;

          return (
            <button
              key={id}
              className={classNames('languages__button', {
                'is-lang-active': locale === id,
              })}
              onClick={() => selectedLang(id)}
            >
              <Fade direction='down' triggerOnce>
                {title}
              </Fade>
            </button>
          );
        })}
    </div>
  );
};
