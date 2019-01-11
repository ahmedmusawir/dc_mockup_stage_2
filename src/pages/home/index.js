import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Layout } from 'components/layout';
import {
  H1,
  H2,
  H3,
  A,
  Img,
  PageContainer,
  SectionBackground,
  Section,
  Block,
  Paragraph,
} from 'components/general';

class HomePage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - HomePage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgImgLink="/images/home-header.jpg">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 light>Boost Your Operation</H1>
                  <H3 light>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem in corrupti eligendi nulla, rem nobis corporis earum
                    fuga aliquam, ducimus impedit architecto dicta iusto eos non
                    beatae ab modi. Unde.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TOP TEXT & IMAGE SECTION */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50" bgColor="light">
                <Paragraph>
                  <H1>
                    Simplify and Automate Through Innovations in Physics and AI
                  </H1>
                  <H3>
                    To help the industrial sector thrive through the application
                    of data-driven processes and cutting-edge AI technologies.
                  </H3>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Img
                    src="https://via.placeholder.com/600x350"
                    alt=""
                    className="img-fluid"
                  />
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* DARK VIDEO SECTION */}
        <Section gridStart="" bgColor="gradient" type="grid">
          <Block gridSize="lg">
            <video width="100%" autoPlay loop>
              <source src="/videos/ai-vid.mp4" type="video/mp4" />
            </video>
          </Block>
          <Block gridSize="sm">
            <Section>
              <Block>
                <Paragraph>
                  <H1 light>Accessibility</H1>
                  <H3 light>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </Block>
        </Section>

        {/* FLEX DARK VIDEO SECTION */}
        {/* <Section gridStart="" bgColor="gradient" type="flex">
          <Block flexBasis="60">
            <video width="100%" autoPlay loop>
              <source src="/videos/ai-vid.mp4" type="video/mp4" />
            </video>
          </Block>
          <Block flexBasis="40" bgColor="dark">
            <H1 light>Accessibility</H1>
            <H3 light>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias dolores quia sit harum accusamus quaerat repudiandae.
            </H3>
          </Block>
        </Section> */}

        {/* DUEL TEXT SECTION */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H1 className="text-center">Some Message Goes Here</H1>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph bgColor="light">
                  <H1>Product</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </Paragraph>
              </Block>

              <Block flexBasis="50">
                <Paragraph bgColor="light">
                  <H1>Solution</H1>
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

        {/* PARTNER LOGO SECTION */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph>
                  <H2 className="text-center">
                    We Strive for Cutting-Edge Solutions Through our Strategic
                    High-Tech Partnerships
                  </H2>
                </Paragraph>
              </Block>
            </Section>
            <Section>
              <Block flexBasis="20" nopadding size="xs" className="text-center">
                <Paragraph>
                  <A>
                    <Img
                      src="/images/partner-logo-1.jpg"
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="20" nopadding size="xs" className="text-center">
                <Paragraph>
                  <A>
                    <Img
                      src="/images/partner-logo-2.jpg"
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="20" nopadding size="xs" className="text-center">
                <Paragraph>
                  <A>
                    <Img
                      src="/images/partner-logo-3.jpg"
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="20" nopadding size="xs" className="text-center">
                <Paragraph>
                  <A>
                    <Img
                      src="/images/partner-logo-4.jpg"
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="20" nopadding size="xs" className="text-center">
                <Paragraph>
                  <A>
                    <Img
                      src="/images/partner-logo-5.jpg"
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </A>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* FORM SECTION */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <H1 light>More to Come!</H1>
                  <H3 light>
                    Sign up for our newsletter to get the latest product
                    announcements
                  </H3>
                  <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input
                        type="email"
                        name="email"
                        id="email-input"
                        placeholder="Your Email"
                      />
                    </FormGroup>
                    <Button color="danger">Submit</Button>
                  </Form>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Img
                    src="/images/home-post-box.png"
                    alt=""
                    className="img-fluid"
                  />
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}
export default HomePage;
