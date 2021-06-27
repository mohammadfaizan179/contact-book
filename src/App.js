import './Styles/App.scss';
import Navbar from "./Component/Element/Navbar";
import Contacts from "./Component/Contact/Contacts";
import AddContact from "./Component/Contact/AddContact";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contacts/add" component={AddContact}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
