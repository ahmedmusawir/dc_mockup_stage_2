import React from 'react';
import { Layout } from 'components/layout';
import {
  H1,
  H3,
  P,
  Img,
  Section,
  Block,
  PageContainer,
  Paragraph,
  SectionBackground,
} from 'components/general';

class Product extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgImgLink="/images/forecast-header.jpg">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 light>Expedite Field Analysis by 100x</H1>
                  <H3 light>
                    Some long subtitle text goes here. It would be a tagline
                    that describes the value of the software
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 1 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Img
                    src="https://via.placeholder.com/600x300"
                    alt=""
                    className="img-fluid"
                  />
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <H1>Automatic Forecasting</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 2 - Img Right */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <H1>Automatic Forecasting</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Img
                    src="https://via.placeholder.com/600x300"
                    alt=""
                    className="img-fluid"
                  />
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 3 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Img
                    src="https://via.placeholder.com/600x300"
                    alt=""
                    className="img-fluid"
                  />
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <H1>Automatic Forecasting</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* PRICING BLOCK  */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 className="text-center">All For a Great Price</H1>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50" className="text-center">
                <Paragraph bgColor="light">
                  <Img
                    src="https://via.placeholder.com/600x300"
                    alt=""
                    className="img-fluid"
                  />
                  <H3 className="mt-5">Starter</H3>
                  <P>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat distinctio voluptates enim{' '}
                  </P>
                  <H1 color="red">$100</H1>

                  <P>First Feature</P>
                  <hr />
                  <P>Second Feature</P>
                  <hr />
                  <P>The Third Feature is Cool!</P>
                </Paragraph>
              </Block>
              <Block flexBasis="50" className="text-center">
                <Paragraph bgColor="light">
                  <Img
                    src="https://via.placeholder.com/600x300"
                    alt=""
                    className="img-fluid"
                  />
                  <H3 className="mt-5">Enterprise</H3>
                  <P>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat distinctio voluptates enim{' '}
                  </P>
                  <H1 color="red">Contact Us</H1>

                  <P>First Feature</P>
                  <hr />
                  <P>Second Feature</P>
                  <hr />
                  <P>The Third Feature is Cool!</P>
                  <hr />
                  <P>The Last Feature is to die for</P>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default Product;
