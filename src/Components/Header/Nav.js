import styled from 'styled-components';
import NavItem from './NavItem';
import { theme } from '../../theme/theme';

const NavStyle = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 5px;
  margin-right: 20px;
  justify-self: flex-end;
  display: grid;
  justify-items: flex-end;
  align-items: center;
  font-size: 2.5rem;
  color: ${(props) => props.details.color};
`;

const paletteArray = Object.entries(theme.palette);
const colorNames = paletteArray.map((color) => {
  return color[0];
});

const Nav = ({ color = 'one' }) => {
  let details = {};
  for (let each of paletteArray) {
    if (color === each[0]) {
      details.color = each[1];
    }
  }
  if (details.color === undefined) details.color = 'grey';

  return (
    <NavStyle details={details}>
      <NavItem />
      <NavItem />
      <NavItem />
    </NavStyle>
  );
};

Nav.defaultProps = {
  color: 'one',
  color_Options: colorNames,
};

export default Nav;
