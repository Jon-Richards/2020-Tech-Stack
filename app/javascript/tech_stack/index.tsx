import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { STORE } from './store';
import { Page } from './views/scaffolding/page';

const containerId = 'client_side_app';

if (document.querySelector(`#${containerId}`) !== undefined) {
  ReactDOM.render(
    <Provider store={STORE}>
      <Page />
    </Provider>,
    document.getElementById(containerId)
  );
}