'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  MySceneComponent,
  Navigator,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
global._ = require('underscore')


global.WIDTH = Dimensions.get('window').width
global.HEIGHT = Dimensions.get('window').height
if (Platform.OS === "android"){
  global.HEIGHT = HEIGHT - 25  //later on change 25 to menu bar height.
}

global.App = {}
App.QnaireAppView = require('./components/pages/qnaire/QnaireAppView')
App.QnaireTitleView = require('./components/pages/qnaire/QnaireTitleView')
App.QuestionView = require('./components/pages/qnaire/QuestionView')
App.QnaireTypeCheckbox = require('./components/pages/qnaire/types/QnaireTypeCheckbox')
App.QnaireTypeRadio = require('./components/pages/qnaire/types/QnaireTypeRadio')
App.QnaireTypeSlider = require('./components/pages/qnaire/types/QnaireTypeSlider')
App.ChoiceButton = require('./components/pages/qnaire/types/elements/ChoiceButton')


class Route extends Component {
  render() {
    return (
    	<Navigator 
    		initialRoute = {{sceneComponent: 'QnaireAppView'}}
    	 	renderScene = {(route, navigator) => {
    			return(
    				React.createElement(App[route.sceneComponent], navigator = {navigator})
    			)
    		}}
    	/>
    )
  }
}


module.exports = Route