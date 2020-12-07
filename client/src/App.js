import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import { Navbar } from "./components/Navbar";
import PageContainer from "./components/PageContainer";

import GoodToKnow from "./pages/GoodToKnow";
import BoxExist from "./pages/BoxExist";
import BoxStart from "./pages/BoxStart";
import SearchResult from "./pages/SearchResult";
import SearchStart from "./pages/SearchStart";
import Home from "./pages/Home";
import BoxNew from "./pages/BoxNew";
import SplashScreen from "./pages/SplashScreen";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => setPage(false), 4000);
  }, []);

  return (
    <>
      <Router>
        <GlobalStyle />
        <PageContainer>
          <Switch>
            <Route exact path="/">
              {page ? <SplashScreen /> : <Home />}
            </Route>
            <Route path="/goodtoknow">
              <GoodToKnow />
            </Route>
            <Route exact path="/box/new">
              <BoxNew />
            </Route>
            <Route path="/box/:title">
              <BoxExist />
            </Route>
            <Route exact path="/box">
              <BoxStart />
            </Route>
            <Route path="/search">
              <SearchStart />
            </Route>
            <Route path="/search/:result">
              <SearchResult />
            </Route>
          </Switch>

          {!page && <Navbar />}
        </PageContainer>
      </Router>
    </>
  );
}

export default App;
