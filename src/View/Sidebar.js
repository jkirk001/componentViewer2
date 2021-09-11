import React from 'react';
import { SidebarStyle } from './ViewStyles';

const Sidebar = ({
  items,
  setMainComp,
  setUpdatedSelects,
  setSelects,
  setDisplayComponent,
}) => {
  const itemButtons = items.map((component) => {
    const clickHandler = () => {
      setUpdatedSelects({});
      setSelects();
      setDisplayComponent();
      setMainComp(() => component);
    };
    return (
      <div onClick={clickHandler} key={component.name} className='button'>
        {component.name}
      </div>
    );
  });

  return (
    <SidebarStyle>
      <div className='buttonHolder'>{itemButtons}</div>
      <div className='borderRight'></div>
    </SidebarStyle>
  );
};

export default React.memo(Sidebar);
