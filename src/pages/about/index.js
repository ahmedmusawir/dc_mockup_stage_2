import React from 'react';
import { Layout } from 'components/layout';
import {
  H1,
  H3,
  H4,
  A,
  Img,
  PageContainer,
  Section,
  Block,
  Paragraph,
  SectionBackground,
} from 'components/general';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgColor="gradient">
          <PageContainer>
            <Section>
              <Block flexflexBasis="100" className="text-center">
                <Paragraph>
                  <H1 light>Our Mission</H1>
                  <H3 light>
                    To help the industrial sector thrive through the application
                    of data-driven processes and cutting-edge AI technologies.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEAM MEMBER SECION 1 */}
        <SectionBackground bgColor="light">
          <PageContainer>
            <Section>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEAM MEMBER SECION 2 */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center">
                  <Img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="img-fluid"
                  />
                  <H3>Hector Klie</H3>
                  <H4>CEO, Lead Data Scientist</H4>
                  <A src="!#" target="_blank">
                    <Img src="https://via.placeholder.com/100" alt="LinkedIn" />
                  </A>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}
export default AboutPage;
