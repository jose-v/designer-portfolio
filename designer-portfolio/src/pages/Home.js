import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  margin-top: -80px;

  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary}99;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

function Home() {
  return (
    <HeroSection>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creative Designer & Developer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting beautiful digital experiences through design and code
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Home;
