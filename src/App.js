import {GlobalStyle} from './style/globalStyle';
import Main from "./components/main/Main";
import Portfolio from './components/portfolio/Portfolio';
import Header from './components/header/index'
import Footer from './components/footer/index'
import WhatIsEntry from './components/whatisentry/index'
import History from './components/history/index'
import TeamList from './components/teamList';
import QNA from './components/qna';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <WhatIsEntry/>
      <Portfolio/>
      <History/>
      <TeamList/>
      <QNA/>
      <Footer/>
    </div>
  );
}

export default App;