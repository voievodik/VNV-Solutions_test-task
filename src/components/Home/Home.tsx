import { HashLink as Link } from 'react-router-hash-link'
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

import video_bg from '../../assets/bg-main.mp4';
import { Header } from '../Header';
import './home.scss';

export const Home = () => {
  return (
    <section className="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        className='home__video'
      >
        <source src={video_bg} />
      </video>

      <Header />

      <Fade direction='down' triggerOnce>
        <div className="container home__main">
          <div className="home__title-box">
            <FormattedMessage 
              id="home.title"
              defaultMessage="Easy, quality, IT - winning solutions for your business"
            >
              {(message) => (
                <h1 className='home__title' dangerouslySetInnerHTML={{ __html: message }} />
              )}
            </FormattedMessage>
          </div>
            <p className='home__description'>
              <FormattedMessage
                id={"home.description"}
                defaultMessage={"IT company"}
              />
            </p>

          <Link className="scroll-icon ex-3" to="#advantages">
            <span className="wheel"></span>
          </Link>
        </div>
      </Fade>
    </section>
  );
};
