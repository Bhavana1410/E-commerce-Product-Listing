import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">E-Commerce</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #282c34;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
