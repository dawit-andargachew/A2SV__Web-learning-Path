import React from 'react';
import { Provider } from "react-redux";
import { Home } from './components/Home';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>

    <div className="">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
