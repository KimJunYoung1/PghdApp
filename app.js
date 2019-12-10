import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/redux';
// npm run tsc후 './build/navigator/stack-navi.tsx'로 변경해주세요!
import Appcontainer from './src/navigator/stack-navi.tsx';

if (__DEV__) {
  import('./ReactotronConfig').then(() => {return console.log("Reactotron Configured")});
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Appcontainer />
    </Provider>
  );
};

export default App;
