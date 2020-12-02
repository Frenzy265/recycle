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
import { I18nContext } from "./context/i18n";
import { useState } from "react";

const localeDicts = {
  de: {
    content: "Hier steht die deutsche Übersetzung",
  },
  en: {
    content:
      "The 3 Rs Reduce, Reuse, Recycle – these three R words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away. Its Really simple! Reduce the amount of waste you produce. Reuse items as much as you can before replacing them. Recycle items wherever possible. Using the 3 Rs also helps to minimise the amount of space needed for landfill sites, where waste materials are disposed of.",
  },
};

function App() {
  const [dict, setDict] = useState(localeDicts.de);

  return (
    <I18nContext.Provider value={dict}>
      <Router>
        <GlobalStyle />
        <PageContainer>
          <Headline />
          <select
            onChange={(event) => setDict(localeDicts[event.target.value])}
          >
            <option value="de">DE</option>
            <option value="en">EN</option>
          </select>
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
    </I18nContext.Provider>
  );
}

export default App;
