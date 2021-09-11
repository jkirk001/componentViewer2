import styled from 'styled-components';
import { theme } from '../../theme/theme.js';

const paletteArray = Object.entries(theme.palette);
const colorNames = paletteArray.map((color) => {
  return color[0];
});

const FooterStyle = styled.div`
  background-color: ${(props) => props.details.color};
  height: 100px;
`;

const Footer = ({ bgColor = 'one' }) => {
  let details = {};
  for (let each of paletteArray) {
    if (bgColor === each[0]) {
      details.color = each[1];
    }
  }
  if (details.color === undefined) details.color = 'grey';

  return <FooterStyle details={details}>Footer</FooterStyle>;
};

Footer.defaultProps = {
  bgColor: 'one',
  bgColor_Options: colorNames,
};

export default Footer;
