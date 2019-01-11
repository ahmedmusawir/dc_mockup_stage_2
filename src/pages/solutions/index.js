import React from 'react';
import { Layout } from 'components/layout';
import {
  H1,
  H4,
  H3,
  Img,
  PageContainer,
  Button,
  Section,
  Block,
  Paragraph,
  SectionBackground,
} from 'components/general';

class Solutions extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Solutions Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgImgLink="/images/solutions-header.jpg">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 light>Advanced Stuff</H1>
                  <H3 light>
                    For operators looking to partner to build cutting edge
                    solutions
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 1 */}
        <SectionBackground bgColor="dimgray">
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
                  <H1 light className="mb-3">
                    Automatic Forecasting
                  </H1>
                  <H3 light>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 2 WITH PARALAX BACKGROUND */}
        <SectionBackground bgImgLink="/images/solution-pg-block-bg.jpg">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <H1 light className="mb-3">
                    Deeper Insights
                  </H1>
                  <H3 light>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat Molestias
                    dolores quia sit harum accusamus quaerat repudiandae.
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
        <SectionBackground bgColor="dimgray">
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
                  <H1 light>Deeper Insights</H1>
                  <H3 light>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat Molestias
                    dolores quia sit harum accusamus quaerat repudiandae.
                    repudiandae.
                  </H3>
                  <Button color="danger" className="btn-lg">
                    Request Demo
                  </Button>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* CUSTOMER QUOTE BLOCK */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 light className="text-center">
                    What Our Customers Say
                  </H1>
                </Paragraph>
              </Block>
            </Section>
            <Section bgColor="grey">
              <Block flexBasis="50">
                <Paragraph>
                  <i className="fa fa-quote-left float-left mr-3 text-warning fa-3x" />

                  <H4 light className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi ex voluptatibus beatae quas ducimus eveniet, quidem
                    perspiciatis sapiente accusantium vitae veritatis
                  </H4>
                  <i className="fa fa-quote-right float-right ml-3 text-warning fa-3x" />

                  <cite className="float-right text-warning">
                    -- Woody Alen
                  </cite>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <i className="fa fa-quote-left float-left mr-3 text-warning fa-3x" />

                  <H4 light className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi ex voluptatibus beatae quas ducimus eveniet, quidem
                    perspiciatis sapiente accusantium vitae veritatis
                  </H4>
                  <i className="fa fa-quote-right float-right ml-3 text-warning fa-3x" />

                  <cite className="float-right text-warning">
                    -- Woody Alen
                  </cite>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default Solutions;
