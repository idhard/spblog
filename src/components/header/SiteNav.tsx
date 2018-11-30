// tslint:disable:no-http-string
import { Link } from 'gatsby';
import React, { createRef } from 'react';

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

const SiteNav: React.SFC<SiteNavProps> = ({ isHome }) => {
  const subscribe = createRef<SubscribeModal>();

  const openModal = () => {
    if (subscribe.current) {
      subscribe.current.open();
    }
  };

  return (
    <nav className={`${isHome ? HomeNavRaise : ''} ${SiteNavStyles}`}>
      <SiteNavLeft>
        {!isHome && <SiteNavLogo />}
        <ul className={NavStyles} role="menu">
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
          {config.facebook && (
            <a
              className={`${SocialLink}`}
              href={config.facebook}
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          )}
          {config.twitter && (
            <a
              className={`${SocialLink}`}
              href={config.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          )}
        </SocialLinks>
        {config.showSubscribe && <SubscribeButton onClick={openModal}>Subscribe</SubscribeButton>}
        {config.showSubscribe && <SubscribeModal ref={subscribe} />}
      </SiteNavRight>

     
    </nav>
  );
};

export default SiteNav;
