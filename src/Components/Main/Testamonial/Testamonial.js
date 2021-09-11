import styled from 'styled-components';

const TestamonialStyle = styled.div`
  font-size: 2rem;
  width: 300px;
  border: 3px solid yellow;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  .testa {
    width: 70%;
    padding: 20px;
  }
  .auth {
    justify-self: flex-end;
    font-size: 1.7rem;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;

const Testamonial = () => {
  return (
    <TestamonialStyle>
      <div className='testa'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
        laborum doloremque ipsa earum expedita laboriosam repellendus explicabo
        ipsum suscipit, quod molestiae culpa eos, asperiores ducimus saepe sint
        rem excepturi.
      </div>
      <div className='auth'>
        <span> -- Jonathan kirkpatrick</span>
      </div>
    </TestamonialStyle>
  );
};

export default Testamonial;
