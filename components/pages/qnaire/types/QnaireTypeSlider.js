'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var _this

class QnaireTypeSlider extends Component {
  newPage() {
    _this.props.navigator.replace({sceneComponent: 'QnaireTypeRadio', qnaireIndex:1})
  }
  render() {
    _this = this
    return(
      <View>
        <TouchableOpacity onPress = {this.newPage}>
          <Text style = {{marginTop:130}}>slider</Text>
        </TouchableOpacity>
      </View>
    )
    
  }
}


module.exports = QnaireTypeSlider
