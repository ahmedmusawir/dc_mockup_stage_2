import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
  H1,
  H2,
  H3,
  A,
  Img,
  GridBlock,
  Container,
  HeroBlockCommon,
  SectionBackground,
} from 'components/general';

class HomePage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - HomePage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <HeroBlockCommon
          backgroundImg="/images/home-header.jpg"
          title="Boost Your Operation"
        />

        {/* TOP TEXT & IMAGE SECTION */}
        <ContentSection bgColor="grey">
          <Container>
            <GridSection>
              <GridBlock>
                <SectionBackground bgColor="white">
                  <H1>
                    Simplify and Automate Through Innovations in Physics and AI
                  </H1>
                  <H3>
                    To help the industrial sector thrive through the application
                    of data-driven processes and cutting-edge AI technologies.
                  </H3>
                </SectionBackground>
              </GridBlock>
              <GridBlock>
                <Img
                  src="/images/home-ai-logo.png"
                  alt=""
                  className="img-fluid"
                />
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* DARK VIDEO SECTION */}
        <ContentSection nopadding bgColor="dark">
          <GridSection gridStart="1200px">
            <GridBlock size="lg">
              <video width="100%" autoPlay loop>
                <source src="/videos/ai-vid.mp4" type="video/mp4" />
              </video>
            </GridBlock>
            <GridBlock>
              <H1 light>Accessibility</H1>
              <H3 light>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dolores quia sit harum accusamus quaerat repudiandae.
              </H3>
            </GridBlock>
          </GridSection>
        </ContentSection>

        {/* DUEL TEXT SECTION */}
        <ContentSection bgColor="grey">
          <Container>
            <H1 className="text-center mb-4">Some Message Goes Here</H1>

            <GridSection>
              <GridBlock className="text-center">
                <SectionBackground bgColor="white">
                  <H1>Product</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </SectionBackground>
              </GridBlock>

              <GridBlock className="text-center">
                <SectionBackground bgColor="white">
                  <H1>Solution</H1>
                  <H3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dolores quia sit harum accusamus quaerat
                    repudiandae.
                  </H3>
                </SectionBackground>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* PARTNER LOGO SECTION */}
        <ContentSection>
          <Container>
            <GridSection>
              <GridBlock>
                <H2 className="text-center mb-4">
                  We Strive for Cutting-Edge Solutions Through our Strategic
                  High-Tech Partnerships
                </H2>
              </GridBlock>
            </GridSection>
            <GridSection>
              <GridBlock nopadding size="xs" className="text-center">
                <A>
                  <Img
                    src="/images/partner-logo-1.jpg"
                    alt="Partner Logo"
                    className="img-fluid"
                  />
                </A>
              </GridBlock>
              <GridBlock nopadding size="xs" className="text-center">
                <A>
                  <Img
                    src="/images/partner-logo-2.jpg"
                    alt="Partner Logo"
                    className="img-fluid"
                  />
                </A>
              </GridBlock>
              <GridBlock nopadding size="xs" className="text-center">
                <A>
                  <Img
                    src="/images/partner-logo-3.jpg"
                    alt="Partner Logo"
                    className="img-fluid"
                  />
                </A>
              </GridBlock>
              <GridBlock nopadding size="xs" className="text-center">
                <A>
                  <Img
                    src="/images/partner-logo-4.jpg"
                    alt="Partner Logo"
                    className="img-fluid"
                  />
                </A>
              </GridBlock>
              <GridBlock nopadding size="xs" className="text-center">
                <A>
                  <Img
                    src="/images/partner-logo-5.jpg"
                    alt="Partner Logo"
                    className="img-fluid"
                  />
                </A>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* FORM SECTION */}
        <ContentSection bgColor="cornflowerblue">
          <Container>
            <GridSection>
              <GridBlock />
            </GridSection>
            <GridSection>
              <GridBlock>
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
              </GridBlock>
              <GridBlock>
                <Img src="/images/home-post-box.png" />
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}
export default HomePage;
