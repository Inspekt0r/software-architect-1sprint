import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import EditAvatarPopup from './components';
import EditProfilePopup from './components';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: EditAvatarPopup,
  rootComponent: EditProfilePopup,
  errorBoundary(err, info, props) {
    return <div>Profile application</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
 