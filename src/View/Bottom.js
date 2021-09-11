import styled from 'styled-components';

const BottomStyle = styled.div`
  display: grid;
  grid-template-rows: 10px 1fr;
  .borderTop {
    height: 10px;
    background-image: url('borderSliceTop.png');
    background-size: contain;
  }
`;

const Bottom = ({ selects }) => {
  return (
    <BottomStyle>
      <div className='borderTop'></div>
      <div>{selects && selects}</div>
    </BottomStyle>
  );
};

export default Bottom;
