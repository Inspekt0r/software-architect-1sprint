import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import InfoTooltip from './components';
import Login from './components';
import ProtectedRoute from './components';
import Register from './components';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: InfoTooltip,
  rootComponent: Login,
  rootComponent: ProtectedRoute,
  rootComponent: Register,
  errorBoundary(err, info, props) {
    return <div>Auth application</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
 