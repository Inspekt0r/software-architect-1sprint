import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Header from './components';
import Footer from './components';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  rootComponent: Footer,
  errorBoundary(err, info, props) {
    return <div>navigation bar </div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
 