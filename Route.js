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
App.ResultView = require('./components/pages/qnaire/ResultView')

App.QnaireTypeButton = require('./components/pages/qnaire/types/QnaireTypeButton')
App.QnaireTypeCheckbox = require('./components/pages/qnaire/types/QnaireTypeCheckbox')
App.QnaireTypeDate = require('./components/pages/qnaire/types/QnaireTypeDate')
App.QnaireTypeDraw = require('./components/pages/qnaire/types/QnaireTypeDraw')
App.QnaireTypeHistory = require('./components/pages/qnaire/types/QnaireTypeHistory')
App.QnaireTypeMedication = require('./components/pages/qnaire/types/QnaireTypeMedication')
App.QnaireTypeNumerical = require('./components/pages/qnaire/types/QnaireTypeNumerical')
App.QnaireTypePage = require('./components/pages/qnaire/types/QnaireTypePage')
App.QnaireTypePicture = require('./components/pages/qnaire/types/QnaireTypePicture')
App.QnaireTypeRadio = require('./components/pages/qnaire/types/QnaireTypeRadio')
App.QnaireTypeSelect_box = require('./components/pages/qnaire/types/QnaireTypeSelect_box')
App.QnaireTypeSlider = require('./components/pages/qnaire/types/QnaireTypeSlider')
App.QnaireTypeStar = require('./components/pages/qnaire/types/QnaireTypeStar')
App.QnaireTypeText = require('./components/pages/qnaire/types/QnaireTypeText')

App.QnaireTypeBreak = require('./components/pages/qnaire/types/QnaireTypeBreak')
App.QnaireTypeEmpty = require('./components/pages/qnaire/types/QnaireTypeEmpty')

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