import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

import { ServiceType } from '../../types/ServiceType';
import { arrow_item } from '../../assets/images';

type Props = {
  activeTab: ServiceType,
}

export const TabsContent: React.FC<Props> = ({ activeTab }) => {
  return (
    <div className="services__tabs-content-box">
      <div className="services__tabs-content-box-left">
        <Fade direction='left' triggerOnce>
          <img
            className='services__tabs-img'
            src={activeTab.imgUrl}
            alt={activeTab.title}
          />
        </Fade>
      </div>

      <div className="services__tabs-content-box-right">
        <Fade direction='right' triggerOnce>
          <p className='services__tabs-content-description'>
            <FormattedMessage id={activeTab.description} defaultMessage={activeTab.description} />
          </p>

          <ul className='services__tabs-content-list'>
            {activeTab.list.map(item => (
              <li className='services__tabs-content-item' key={item}>
                <img src={arrow_item} />

                <FormattedMessage id={item} defaultMessage={item} />
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </div>
  );
};
