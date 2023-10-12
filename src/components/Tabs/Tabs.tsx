import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { services } from '../../utils/constants';
import { TabsTitles } from './TabsTitles';
import { TabsContent } from './TabsContent';
import { TabsButton } from './TabsButton';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <div className="services__tabs-box">
      <TabsTitles activeTab={activeTab} onSetActiveTab={setActiveTab} />

      <Fade direction='up' triggerOnce>
        <div className="services__tabs-content">
          <TabsContent activeTab={activeTab} />

          <TabsButton />
        </div>
      </Fade>
    </div>
  );
};
