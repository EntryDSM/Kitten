import {GlobalStyle} from './style/globalStyle';
import Main from "./components/main/Main";
import Portfolio from './components/portfolio/Portfolio';
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Main/>
      <Portfolio/>
    </div>
  );
}

export default App;
