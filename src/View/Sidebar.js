import styled from 'styled-components';

const SidebarStyle = styled.div`
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
  }
`;

const Sidebar = ({ items }) => {
  const itemButtons = items.map((component) => {
    return <div className='button'>{component.name}</div>;
  });

  return (
    <SidebarStyle>
      <div className='buttonHolder'>{itemButtons}</div>
      <div className='borderRight'></div>
    </SidebarStyle>
  );
};

export default Sidebar;
