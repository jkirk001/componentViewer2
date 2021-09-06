import styled from 'styled-components';

const NavStyle = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 3px solid black;
  border-radius: 5px;
`;

const Nav = () => {
  return (
    <NavStyle>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </NavStyle>
  );
};

export default Nav;
