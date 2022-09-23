
import Home from '../pages/Home';
import MainMenu from '../widgets/MainMenu';

import { StyledAppContainer } from './styles';

const App = () => (
  <div className="App" css={StyledAppContainer()}>
    <MainMenu />
    <Home />
  </div>
);

export default App;
