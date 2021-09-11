import Bottom from './Bottom';
import { MainStyle } from './ViewStyles';

const Main = ({ displayComp, selects }) => {
  return (
    <MainStyle>
      <div className='content'>{displayComp && displayComp}</div>
      <Bottom selects={selects} />
    </MainStyle>
  );
};

export default Main;
