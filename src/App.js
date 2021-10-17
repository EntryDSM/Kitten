import { GlobalStyle } from './style/globalStyle';
import Main from "./components/main/Main";
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer';
import WhatisEntry from './components/whatisentry';
import Header from './components/header';
import History from './components/history';
function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Main />
      <WhatisEntry />
      <Portfolio />
      <History />
      <Footer />
    </div>
  );
}

export default App;