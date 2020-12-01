import GlobalStyle from "./globalstyle";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
// import GoodToKnow from "./pages/GoodToKnow";
import PageContainer from "./components/PageContainer";
// import BoxExist from "./pages/BoxExist";
// import BoxNew from "./pages/BoxNew";
// import BoxStart from "./pages/BoxStart";
// import SearchResult from "./pages/SearchResult";
// import SearchStart from "./pages/SearchStart";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>Recycling</Header>
      <PageContainer>
        <a href="/storybook">To Storybook</a>
      </PageContainer>

      <Navbar />
    </>
  );
}

export default App;
