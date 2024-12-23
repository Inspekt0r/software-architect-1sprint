import * as React from 'react';

export default class Root extends React.Component<any,any> {
  render() {
    const message: string = "Auth-app rendered by react";

    return (
        <div style={{marginTop: '100px'}}>
          {message}
        </div>
    );
  }
}