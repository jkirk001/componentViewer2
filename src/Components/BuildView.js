import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const BuildViewStyle = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const BuildView = () => {
  return (
    <BuildViewStyle>
      <Header />
      <Main />
      <Footer />
    </BuildViewStyle>
  );
};

export default BuildView;
