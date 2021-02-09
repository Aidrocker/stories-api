import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import createStore from 'src/store';
import LoginPage from './containers/LoginPage';
import MainAppPage  from './containers/MainAppPage';

const {store} = createStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistore}> */}
          <Switch>
            {/* <Route path="/" exact>
              <LoginPage />
            </Route> */}
            <Route path="/">
              <MainAppPage />
            </Route>
          </Switch>
        {/* </PersistGate> */}
      </Provider>
    </Router>
  );
}

export default App;
