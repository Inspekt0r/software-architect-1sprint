import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import AddPlacePopup from './components';
import Card from './components';
import PopupWithForm from './components';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AddPlacePopup,
  rootComponent: Card,
  rootComponent: PopupWithForm,
  errorBoundary(err, info, props) {
    return <div>Cards application</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
 