// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subsribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';
import {
  SocialLinks,
  SiteNavLeft,
  SiteNavRight,
  SubscribeButton,
  HomeNavRaise,
  SiteNavStyles,
  NavStyles,
} from './style';

interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNaveState {
  isOpen: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNaveState> {
  subscribe = React.createRef<SubscribeModal>();

  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  }
  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <nav className={`${isHome ? HomeNavRaise : ''} ${SiteNavStyles}`}>
        <SiteNavLeft>
          {!isHome && <SiteNavLogo />}
          <ul className={`${NavStyles}`} role="menu">
            {/* TODO: mark current nav item - add class nav-current */}
            <li role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/getting-started/">Getting Started</Link>
            </li>
          </ul>
        </SiteNavLeft>
        <SiteNavRight>
          <SocialLinks>
            <a
              className={`${SocialLink}`}
              href={config.facebook}
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
             
            </a>
            <Facebook className="override"  friends={[1,2,3]}>
                <div>This is a child</div>
              </Facebook>
            <a
              className={`${SocialLink}`}
              href={config.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </SocialLinks>
          {config.showSubscribe && (
            <SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>
          )}
          {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
        </SiteNavRight>
      </nav>
    );
  }
}

export default SiteNav;
