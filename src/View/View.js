import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { items } from '../Components/index.js';
import Main from './Main.js';
import Sidebar from './Sidebar.js';
import { ViewStyle } from './ViewStyles/index.js';

const View = () => {
  //?Starts as function
  const [MainComp, setMainComp] = useState();
  const [displayComponent, setDisplayComponent] = useState();
  const [selects, setSelects] = useState();
  const [updatedSelects, setUpdatedSelects] = useState({});
  console.log(displayComponent);
  useEffect(() => {
    if (!MainComp) return;
    const defaultProps = { ...MainComp };
    setDisplayComponent(<MainComp {...defaultProps.defaultProps} />);

    if (
      defaultProps?.defaultProps === null ||
      defaultProps?.defaultProps === undefined
    )
      return;

    const arrayDefaultProps = Object.entries(defaultProps.defaultProps);
    if (arrayDefaultProps.length > 0) {
      const selectProperties = arrayDefaultProps
        .filter((item) => {
          if (item[0].includes('_Options')) return true;
          return false;
        })
        .map((item) => {
          item[0] = item[0].split('_')[0];
          return item;
        });
      function handleChange(e) {
        setUpdatedSelects((prev) => {
          const test = { ...prev };
          test[e.target.name] = e.target.value;
          return test;
        });
      }
      const selects = selectProperties.map((select) => {
        return (
          <div key={select[0]}>
            <h3>{select[0]}</h3>
            <select name={select[0]} onChange={handleChange}>
              {select[1].map((option) => {
                return (
                  <option key={select[0] + option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        );
      });
      setSelects(selects);
    }
  }, [MainComp]);
  const testRef = useRef();
  useEffect(() => {
    if (updatedSelects.length === 0) return;
    if (!displayComponent) return;
    if (testRef.current !== updatedSelects) {
      testRef.current = updatedSelects;
      setDisplayComponent(<MainComp {...updatedSelects} />);
    }
  }, [updatedSelects, displayComponent]);

  useEffect(() => {}, []);
  return (
    <ViewStyle>
      <Sidebar
        items={items}
        setMainComp={setMainComp}
        setUpdatedSelects={setUpdatedSelects}
        setSelects={setSelects}
        setDisplayComponent={setDisplayComponent}
      />
      <Main displayComp={displayComponent} selects={selects} />
    </ViewStyle>
  );
};

export default View;
