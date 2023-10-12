import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Fade } from 'react-awesome-reveal';

import { services } from '../../utils/constants';
import { ServiceType } from '../../types/ServiceType';

type Props ={
  activeTab: ServiceType;
  onSetActiveTab: (value: ServiceType) => void;
}

export const TabsTitles: React.FC<Props> = ({
  activeTab,
  onSetActiveTab,
}) => {
  return (
    <ul className="services__tabs-titles">
      {services.map(service => {
        const { id, title } = service;

        return (
          <Fade direction='up' triggerOnce>
            <li
              key={id}
              className={classNames('services__tabs-item', {
                'is-active-tab': activeTab.id === id,
              })}
              onClick={() => onSetActiveTab(service)}
            >
              <FormattedMessage id={title} defaultMessage={title} />
            </li>
          </Fade>
        )
      })}
    </ul>
  )
}
