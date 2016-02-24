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
global.App = {}

global.WIDTH = Dimensions.get('window').width
global.HEIGHT = Dimensions.get('window').height
if (Platform.OS === "android"){
  global.HEIGHT = HEIGHT - 25  //later on change 25 to menu bar height.
}



var QnaireAppView = require('./components/pages/qnaire/QnaireAppView')
//var QnaireTitleView = require('./components/pages/qnaire/QnaireTitleView')
//var QuestionView = require('./components/pages/qnaire/QuestionView')
//var QnaireTypeCheckbox = require('./components/pages/qnaire/types/QnaireTypeCheckbox')
//var QnaireTypeRadio = require('./components/pages/qnaire/types/QnaireTypeRadio')


class Route extends Component {
  render() {
    return (
    	<Navigator 
    		initialRoute = {{sceneComponent: 'QnaireAppView'}}
    	 	renderScene = {(route, navigator) => {
    			return(
    				React.createElement(eval(route.sceneComponent), navigator = {navigator})
    			)
    		}}
    	/>
    )
  }
}


module.exports = Route