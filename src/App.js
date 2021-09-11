import BuildView from './Components/BuildView';
import View from './View/View';
const { REACT_APP_MODE } = process.env;

function App() {
  if (REACT_APP_MODE === 'view') {
    return <View />;
  }
  // ! Starts component viewer run dev
  if (REACT_APP_MODE === 'dev') {
    return <BuildView />;
  }
}

export default App;
