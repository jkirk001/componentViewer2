import styled from 'styled-components';
import Testamonial from './Testamonial/Testamonial';

const MainStyle = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  grid-row-gap: 10px;
`;

const Main = () => {
  return (
    <MainStyle>
      <Testamonial />
      <Testamonial />
      <Testamonial />
      <Testamonial />
    </MainStyle>
  );
};

export default Main;
