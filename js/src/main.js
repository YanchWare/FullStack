import Title from './components/Title';
import AppHomeRoute from './routes/AppHomeRoute';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
);

ReactDOM.render(
  <Relay.RootContainer
    Component={Title}
    route={new AppHomeRoute()}
  />,
  document.getElementById('example')
);
