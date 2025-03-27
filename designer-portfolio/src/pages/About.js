import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---
const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.primary};
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px; /* Placeholder height */
  background-color: #eee; /* Light gray background */
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #aaa; /* Light gray text */
`;

// --- About Component ---
function About() {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>

      <Section>
        <ImagePlaceholder>Profile Image Placeholder</ImagePlaceholder>
        <SectionTitle>Who I Am</SectionTitle>
        <SectionContent>
          Hello! I'm [Your Name], a passionate web and graphic designer with a love for creating beautiful and functional digital experiences. With a background in [Your Background/Field], I strive to blend creativity with technology to bring ideas to life.
        </SectionContent>
      </Section>

      <Section>
        <ImagePlaceholder>Workplace or Project Image Placeholder</ImagePlaceholder>
        <SectionTitle>My Mission</SectionTitle>
        <SectionContent>
          My mission is to empower businesses and individuals through innovative design solutions that not only look great but also drive results. I believe that good design is about more than just aesthetics; it's about solving problems and enhancing user experiences.
        </SectionContent>
      </Section>

      <Section>
        <ImagePlaceholder>Experience Image Placeholder</ImagePlaceholder>
        <SectionTitle>My Journey</SectionTitle>
        <SectionContent>
          With over [X years] of experience in the industry, I've had the privilege of working with diverse clients, from startups to established brands. My expertise includes [list your skills or tools, e.g., HTML, CSS, JavaScript, Adobe Creative Suite, etc.]. I am constantly learning and evolving to stay ahead in this fast-paced digital world.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Let's Connect!</SectionTitle>
        <SectionContent>
          I'm always open to new opportunities and collaborations. Feel free to reach out to me at [Your Email] or connect with me on [Your Social Media Links].
        </SectionContent>
      </Section>
    </AboutContainer>
  );
}

export default About;