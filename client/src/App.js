import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import SplashPage from "./pages/Startpage";

import GoodToKnow from "./pages/GoodToKnow";
import BoxExist from "./pages/BoxExist";
import BoxNew from "./pages/BoxNew";
import BoxStart from "./pages/BoxStart";
import SearchResult from "./pages/SearchResult";
import SearchStart from "./pages/SearchStart";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Route exact path="/">
          <SplashPage />
        </Route>
        <PageContainer>
          <Header>Recycling</Header>
          <Switch>
            <Route path="/goodtoknow">
              <GoodToKnow />
            </Route>
            <Route path="/boxexist">
              <BoxExist />
            </Route>
            <Route path="/boxnew">
              <BoxNew />
            </Route>
            <Route path="/boxstart">
              <BoxStart />
            </Route>
            <Route path="/searchstart">
              <SearchStart />
            </Route>
            <Route path="/Searchresult">
              <SearchResult />
            </Route>
          </Switch>
          <Navbar />
        </PageContainer>
      </Router>
    </>
  );
}

export default App;
