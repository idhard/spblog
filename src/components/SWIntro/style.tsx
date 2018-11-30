import styled, { css, keyframes } from 'react-emotion';
import starsBg from './assets/img/stars-bg.jpg';
import StarJedi from './assets/fonts/Starjedi.ttf';
import StarJhol from './assets/fonts/StarJhol.ttf';

const scroll = keyframes`
  0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
`;

const logo = keyframes`
  0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(0.1);
      opacity: 0;
    }
`;

const intro = keyframes`
 0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
    `;

export const SWIntroStyle = css`

  @font-face {
     font-family: 'StarJedi';
     src: url(${StarJedi});
  }

  @font-face {
     font-family: 'StarJhol';
     src: url(${StarJhol});
  }

  background: url(${starsBg}) center center;
  width: 100%;
  height: 100%;
  font-family: 'Droid Sans', arial, verdana, sans-serif;
  font-weight: 700;
  color: #ebd71c;
  background-color: #000;
  overflow: hidden;
  position: relative;
  p {
    line-height: 1em;
  }
  p.intro-text {
    position: relative;
    max-width: 16em;
    font-size: 200%;
    font-weight: 400;
    margin: 30% auto;
    color: #4ee;
    opacity: 0;
    z-index: 1;
    text-align: center;
    animation: ${intro} 2s ease-out;
  }

  .main-content {
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    z-index: 3;
    width: 98%;
    height: 50em;
    bottom: 0;
    font-size: 80px;
    font-weight: bold;
    text-align: justify;
    overflow: hidden;
    transform-origin: 50% 100%;
    transform: perspective(350px) rotateX(25deg);
  }

  .main-content:after {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
    pointer-events: none;
  }

  .space-button {
    color: #ebd71c;
    border: 12px solid #ebd71c;
    padding: 20px;
    background: transparent;
    text-decoration: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }
  .space-button:hover {
    background-color: #d2be03;
    border-color: #d2be03;
    color: black;
  }

  .space-button:active,
  .space-button:focus {
    background-color: #b8a40a;
    border-color: #b8a40a;
    color: black;
  }

  .title-content {
    position: absolute;
    top: 100%;
    animation: ${scroll} 120s linear 4s forwards;
  }

  .title-content > .content-header {
    text-align: center;
  }

  .logo{
    text-shadow: -2px -2px 0 #ffd54e, -2px -1px 0 #ffd54e, -2px 0 0 #ffd54e, -2px 1px 0 #ffd54e, -2px 2px 0 #ffd54e, -1px -2px 0 #ffd54e, -1px -1px 0 #ffd54e, -1px 0 0 #ffd54e, -1px 1px 0 #ffd54e, -1px 2px 0 #ffd54e, 0 -2px 0 #ffd54e, 0 -1px 0 #ffd54e, 0 0 0 #ffd54e, 0 1px 0 #ffd54e, 0 2px 0 #ffd54e, 1px -2px 0 #ffd54e, 1px -1px 0 #ffd54e, 1px 0 0 #ffd54e, 1px 1px 0 #ffd54e, 1px 2px 0 #ffd54e, 2px -2px 0 #ffd54e, 2px -1px 0 #ffd54e, 2px 0 0 #ffd54e, 2px 1px 0 #ffd54e, 2px 2px 0 #ffd54e;
    font-size: 50px;
    font-family: StarJhol;
    line-height: 86%;
    caret-color: #ffd54e;
    letter-spacing: normal;
  }

  .main-logo {
      /* text-shadow: -2px -2px 0 #ffd54e, -2px -1px 0 #ffd54e, -2px 0 0 #ffd54e, -2px 1px 0 #ffd54e, -2px 2px 0 #ffd54e, -1px -2px 0 #ffd54e, -1px -1px 0 #ffd54e, -1px 0 0 #ffd54e, -1px 1px 0 #ffd54e, -1px 2px 0 #ffd54e, 0 -2px 0 #ffd54e, 0 -1px 0 #ffd54e, 0 0 0 #ffd54e, 0 1px 0 #ffd54e, 0 2px 0 #ffd54e, 1px -2px 0 #ffd54e, 1px -1px 0 #ffd54e, 1px 0 0 #ffd54e, 1px 1px 0 #ffd54e, 1px 2px 0 #ffd54e, 2px -2px 0 #ffd54e, 2px -1px 0 #ffd54e, 2px 0 0 #ffd54e, 2px 1px 0 #ffd54e, 2px 2px 0 #ffd54e; */
    font-size: 50px;
    font-family: StarJhol;
    line-height: 86%;
    /* caret-color: #ffd54e; */
    letter-spacing: normal;

    position: absolute;
    width: 2.6em;
    left: 50%;
    top: 20vh;
    font-size: 10em;
    text-align: center;
    margin-left: -1.3em;
    line-height: 0.8em;
    letter-spacing: -0.05em;
    color: #ebd71c;
    /* text-shadow: -2px -2px 0 #ebd71c, 2px -2px 0 #ebd71c, -2px 2px 0 #ebd71c, 2px 2px 0 #ebd71c; */
    opacity: 0;
    z-index: 1;
    animation: ${logo} 5s ease-out 2.5s;
  }
  .main-logo > img {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    .star-wars-intro .main-content {
      font-size: 35px;
    }
    .star-wars-intro .title-content {
      position: absolute;
      top: 100%;
      animation: ${scroll} 100s linear 4s forwards;
    }
  }
`;
