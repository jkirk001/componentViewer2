import styled from 'styled-components';

export const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  .content {
    background-color: inherit;
  }
`;
export const ViewStyle = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  background-color: #f8f0e3;
`;

export const SidebarStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px;
  .borderRight {
    width: 10px;
    background-image: url('borderSlice.png');
    background-size: contain;
  }
  .buttonHolder {
    justify-self: center;
  }
  .button {
    border-radius: 2px;
    background-color: salmon;
    margin-top: 5px;
    display: grid;
    justify-content: center;
    padding: 2px;
    cursor: pointer;
    box-shadow: 0 2px 4px 2px grey;
  }
  .button:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 3px 2px grey;
  }
  .button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 1px 1px grey;
  }
`;
