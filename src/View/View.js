import styled from 'styled-components';
import { items } from '../Components/index.js';
import Sidebar from './Sidebar.js';

const ViewStyle = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  background-color: #f8f0e3;
`;
const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  .content {
    background-color: inherit;
  }
`;

const View = () => {
  return (
    <ViewStyle>
      <Sidebar items={items} />
      <MainStyle>
        <div className='content'></div>
        <div className='sidebar'></div>
      </MainStyle>
    </ViewStyle>
  );
};

export default View;
