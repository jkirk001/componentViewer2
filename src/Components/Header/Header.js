import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import Logo from './Logo';
import Nav from './Nav';

const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.details.color};
  display: grid;
  grid-template-columns: 100px 1fr;
  align-content: center;
`;

const paletteArray = Object.entries(theme.palette);
const colorNames = paletteArray.map((color) => {
  return color[0];
});

const Header = ({ bgColor, colorNav = 'one' }) => {
  let details = {};
  for (let each of paletteArray) {
    if (bgColor === each[0]) {
      details.color = each[1];
    }
  }
  if (details.color === undefined) details.color = 'grey';
  return (
    <HeaderStyle details={details}>
      <Logo />
      <Nav color={colorNav} />
    </HeaderStyle>
  );
};

Header.defaultProps = {
  colorNav: 'one',
  colorNav_Options: colorNames,
  bgColor: 'five',
  bgColor_Options: colorNames,
};

export default Header;
