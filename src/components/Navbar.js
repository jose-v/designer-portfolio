import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

// Instead of using motion with Link directly, let's create a basic component first
const AnimatedLink = ({ to, children, ...props }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
    <Link to={to}>{children}</Link>
  </motion.div>
);

const NavLink = styled(AnimatedLink)`
  text-decoration: none;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo to="/">LOGO</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 