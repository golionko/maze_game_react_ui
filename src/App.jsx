import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import store from './store/store';
import MainView from './pages/MainView/MainView'

class App extends React.Component {

  render() {
    return (
      <ReduxProvider store={store}>
        <MainView />
      </ReduxProvider>
    );
  }
}

export default App;
