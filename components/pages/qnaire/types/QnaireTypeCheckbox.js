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


class QnaireTypeCheckbox extends Component {
  constructor(props){
    super(props)
    this.question = this.props.question
    this.answer = {id: this.question.id, choice_ids: []}
  }

  add_selection(value) {
    this.answer.choice_ids.push(value)
    this.forceUpdate()
  }
  remove_selection(value) {
    var i = this.answer.choice_ids.indexOf(value)
    this.answer.choice_ids.splice(i,1)
    this.forceUpdate()
  }

  render() {
    var choices = []    
    for (var i = 0; i < this.question.choices.length; i++){
      choices.push(
        <View key = {this.question.choices[i].id}>
          <App.ChoiceButton 
            parent = {this}
            question = {this.question.id} 
            label = {this.question.choices[i].text} 
            value = {this.question.choices[i].id}/>
        </View>
      )
    }
    return( //TODO: image
      <View> 
        {choices}
        <Text>selected: {this.answer.id} {this.answer.choice_ids}</Text>
      </View>
    )
  }
}


module.exports = QnaireTypeCheckbox
