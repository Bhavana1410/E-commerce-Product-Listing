import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 E-Commerce. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #282c34;
  color: #fff;
`;

export default Footer;
