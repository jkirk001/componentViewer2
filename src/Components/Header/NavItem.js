import styled from 'styled-components';

const NavItemStyle = styled.a`
  text-decoration: none;
  //Color inherited from Nav
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

const NavItem = () => {
  return <NavItemStyle href='/'>test</NavItemStyle>;
};

export default NavItem;
