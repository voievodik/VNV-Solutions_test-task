import { Home } from '../../components/Home'
import { Advantages } from '../../components/Advantages'
import { Services } from '../../components/Services'
import { Projects } from '../../components/Projects';
import { Social } from '../../components/Social';
import { Contacts } from '../../components/Contacts';
import { FAQ } from '../../components/FAQ';
import { Widget } from '../../components/Widget';


export const HomePage = () => {
  return (
    <>
      <Widget />
      <Home />
      <Advantages/>
      <Services />
      <Projects />
      <Social />
      <Contacts />
      <FAQ />
    </>
  );
};
