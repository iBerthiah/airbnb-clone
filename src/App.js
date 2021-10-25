import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer/>
      </Router>
      
      {/* Home*/}
        {/*Header */}
        {/*Banner */}
          {/*Search */}
        {/* Cards*/}
      {/* Footer*/}
      {/* */}
    </>
  );
}

export default App;
