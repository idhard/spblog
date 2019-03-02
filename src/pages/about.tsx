import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import PostContent,{ PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import SWIntro from '../components/SWIntro';
import { graphql, Link } from 'gatsby';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.SFC = (props) => {
return(
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>
          {/* TODO this would be great to have it as markup also  */}
          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Hey, welcome to Sidepro! of course this is another site under construction like all of
                our side projects.
              </p>
              <p>
                Join me on the adventure of completing some of my countless side projects.
                Here you will find , ideas , technical reviews , new trends and hopfully motivation
                to complete some of your own side projects.
              </p>

              <blockquote>
                <p>
                  If you'd g to set up a site like this for yourself, head over to{' '}
                  <a href="https://github.com/scttcper/gatsby-casper">Gatsby-casper</a>
                </p>
              </blockquote>
              <p>
                Images for the post are taken from : <a href="https://unsplash.com">Unsplash</a>
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);
}
export default About;


export const query = graphql`
  query($slug: String, $primaryTag: String) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      excerpt
      timeToRead
      frontmatter {
        title
        userDate: date(formatString: "D MMMM YYYY")
        date
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$primaryTag] }, draft: { ne: true } } }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
