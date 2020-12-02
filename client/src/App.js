import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import Headline from "./components/Header";
import { Navbar } from "./components/Navbar";
import PageContainer from "./components/PageContainer";

import GoodToKnow from "./pages/GoodToKnow";
import BoxExist from "./pages/BoxExist";
import BoxNew from "./pages/BoxNew";
import BoxStart from "./pages/BoxStart";
import SearchResult from "./pages/SearchResult";
import SearchStart from "./pages/SearchStart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <PageContainer>
          <Headline />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/goodtoknow">
              <GoodToKnow />
            </Route>
            <Route path="/box/content">
              <BoxExist />
            </Route>
            <Route path="/box/new">
              <BoxNew />
            </Route>
            <Route path="/box">
              <BoxStart />
            </Route>
            <Route path="/search">
              <SearchStart />
            </Route>
            <Route path="/search/result">
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
