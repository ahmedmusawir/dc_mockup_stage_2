import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import {
  H1,
  H2,
  H3,
  A,
  PageContainer,
  Section,
  Block,
  Paragraph,
} from 'components/general';

const PageBackground = styled.div`
  display: block;
  background: url('/images/media-page-bg.jpg') fixed;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BlogTile = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 8rem;
  position: relative;

  @media (max-width: 759px) {
    margin-top: 1rem;
  }

  background-image: url(${props => props.bgImg});
  background-size: 100%;
  background-repeat: no-repeat;

  aside {
    position: absolute;
    // background-color: rgba(0, 0, 0, 0.6);
    background: rgba(76, 76, 76, 0);
    background: -moz-linear-gradient(
      top,
      rgba(76, 76, 76, 0) 0%,
      rgba(89, 89, 89, 0.12) 12%,
      rgba(102, 102, 102, 0.25) 25%,
      rgba(71, 71, 71, 0.39) 39%,
      rgba(43, 43, 43, 0.72) 72%,
      rgba(44, 44, 44, 0.77) 77%,
      rgba(28, 28, 28, 0.83) 83%,
      rgba(17, 17, 17, 0.86) 86%,
      rgba(0, 0, 0, 0.93) 93%,
      rgba(19, 19, 19, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, rgba(76, 76, 76, 0)),
      color-stop(12%, rgba(89, 89, 89, 0.12)),
      color-stop(25%, rgba(102, 102, 102, 0.25)),
      color-stop(39%, rgba(71, 71, 71, 0.39)),
      color-stop(72%, rgba(43, 43, 43, 0.72)),
      color-stop(77%, rgba(44, 44, 44, 0.77)),
      color-stop(83%, rgba(28, 28, 28, 0.83)),
      color-stop(86%, rgba(17, 17, 17, 0.86)),
      color-stop(93%, rgba(0, 0, 0, 0.93)),
      color-stop(100%, rgba(19, 19, 19, 1))
    );
    background: -webkit-linear-gradient(
      top,
      rgba(76, 76, 76, 0) 0%,
      rgba(89, 89, 89, 0.12) 12%,
      rgba(102, 102, 102, 0.25) 25%,
      rgba(71, 71, 71, 0.39) 39%,
      rgba(43, 43, 43, 0.72) 72%,
      rgba(44, 44, 44, 0.77) 77%,
      rgba(28, 28, 28, 0.83) 83%,
      rgba(17, 17, 17, 0.86) 86%,
      rgba(0, 0, 0, 0.93) 93%,
      rgba(19, 19, 19, 1) 100%
    );
    background: -o-linear-gradient(
      top,
      rgba(76, 76, 76, 0) 0%,
      rgba(89, 89, 89, 0.12) 12%,
      rgba(102, 102, 102, 0.25) 25%,
      rgba(71, 71, 71, 0.39) 39%,
      rgba(43, 43, 43, 0.72) 72%,
      rgba(44, 44, 44, 0.77) 77%,
      rgba(28, 28, 28, 0.83) 83%,
      rgba(17, 17, 17, 0.86) 86%,
      rgba(0, 0, 0, 0.93) 93%,
      rgba(19, 19, 19, 1) 100%
    );
    background: -ms-linear-gradient(
      top,
      rgba(76, 76, 76, 0) 0%,
      rgba(89, 89, 89, 0.12) 12%,
      rgba(102, 102, 102, 0.25) 25%,
      rgba(71, 71, 71, 0.39) 39%,
      rgba(43, 43, 43, 0.72) 72%,
      rgba(44, 44, 44, 0.77) 77%,
      rgba(28, 28, 28, 0.83) 83%,
      rgba(17, 17, 17, 0.86) 86%,
      rgba(0, 0, 0, 0.93) 93%,
      rgba(19, 19, 19, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(76, 76, 76, 0) 0%,
      rgba(89, 89, 89, 0.12) 12%,
      rgba(102, 102, 102, 0.25) 25%,
      rgba(71, 71, 71, 0.39) 39%,
      rgba(43, 43, 43, 0.72) 72%,
      rgba(44, 44, 44, 0.77) 77%,
      rgba(28, 28, 28, 0.83) 83%,
      rgba(17, 17, 17, 0.86) 86%,
      rgba(0, 0, 0, 0.93) 93%,
      rgba(19, 19, 19, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    &:hover {
      opacity: 0.8;
    }
  }
  h2 {
    position: absolute;
    bottom: 0;
    left: 5%;
    z-index: 200;
  }
  h3 {
    position: absolute;
    bottom: 0;
    left: 5%;
    z-index: 200;
  }
`;

class Media extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Media Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <PageBackground>
          <PageContainer>
            <Section>
              <Block>
                <H1 light>Media</H1>
              </Block>
            </Section>
            <Section type="grid">
              <Block gridSize="lg" nopadding>
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-1.jpg">
                    <Paragraph>
                      <H2 light>This is Post 1 Title</H2>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-2.jpg">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-3.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-4.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-5.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-6.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-7.png">
                    <Paragraph>
                      <H3 light>This is a really really long Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-8.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
              <Block gridSize="sm">
                <A href="!#">
                  <BlogTile bgImg="/images/blog/cover-9.png">
                    <Paragraph>
                      <H3 light>This is Post 2 Title</H3>
                    </Paragraph>
                    <aside />
                  </BlogTile>
                </A>
              </Block>
            </Section>
          </PageContainer>
        </PageBackground>
      </Layout>
    );
  }
}

export default Media;
