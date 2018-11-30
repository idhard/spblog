import * as React from 'react';
import StartWarsLogo from './assets/img/star-wars-logo.svg';
import AudioSrc from './assets/audio/Star_Wars_original_opening_crawl_1977.mp3';
import { SWIntroStyle } from './style';

interface PropTypes {
  intro: string;
  body?: ReactNode;
}

class SWIntro extends React.Component<PropTypes, any> {
  render() {
    return (
      <div>
        {/* Place in Body where you'd like intro to appear */}
        <div className={`star-wars-intro ${SWIntroStyle}`}>
          {/* Blue Intro Text */}
          <p className={'intro-text'}>{this.props.intro || 'Welcome to the galaxy'}</p>
          {/* Logo Image or Text goes in here */}
          <h2 className="main-logo">
            <img src={StartWarsLogo} />
          </h2>
          {/* All Scrolling Content Goes in here */}
          <div className="main-content">
            <div className="title-content">
              <p className="content-header">
                Episode IV
                <br />A New Hope
              </p>
              <br />
              <div className="content-body">
                {this.props.body ? (
                  this.props.body
                ) : (
                  <React.Fragment>
                    <p>
                      It is a period of civil war. Rebel spaceships, striking from a hidden base,
                      have won their first victory against the evil Galactic Empire. During the
                      battle, Rebel spies managed to steal secret plans to the Empire's ultimate
                      weapon, the DEATH STAR, an armored space station with enough power to destroy
                      an entire planet.
                    </p>
                    <p>
                      Pursued by the Empire's sinister agents, Princess Leia races home aboard her
                      starship, custodian of the stolen plans that can save her people and restore
                      freedom to the galaxy….
                    </p>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* TODO add sound controls */}
        <audio preload="auto" autoPlay>
          <source src={AudioSrc} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default SWIntro;
