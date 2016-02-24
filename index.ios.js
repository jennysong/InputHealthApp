'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';

import Route from './Route'

class InputHealth extends Component {
  render() {
    return (
      <Route />
    );
  }
}


AppRegistry.registerComponent('InputHealth', () => InputHealth);
