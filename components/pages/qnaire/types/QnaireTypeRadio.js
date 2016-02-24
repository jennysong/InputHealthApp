'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ChoiceButton from './elements/ChoiceButton'
var _this
var QNAIRE_DATA = require('./../../../../qnaire.json')
var QNAIRE = QNAIRE_DATA.questions[0]


class QnaireTypeRadio extends Component {
  constructor(props){
    super(props)
    this.selection = []
  }
  add_selection(value) {
    this.selection = [value]
    this.forceUpdate()
  }
  remove_selection(value) {
    this.selection = []
    this.forceUpdate()
  }
  render() {
    _this = this
    var choices = []
    
    for (var i = 0; i < QNAIRE.choices.length; i++){
      choices.push(
        <ChoiceButton 
          parent = {this}
          question = {QNAIRE_DATA.id} 
          label = {QNAIRE.choices[i].text} 
          value = {QNAIRE.choices[i].id}/>
      )
    }
    return( //TODO: image
      <View>
          <Text style = {{marginTop:130}}>{QNAIRE.visible_text}</Text>
          <Text>{QNAIRE.note}</Text>
          <Image />   
          {choices}
          <Text>selected: {this.selection}</Text>

          
      </View>
    )
    
  }
}


module.exports = QnaireTypeRadio
