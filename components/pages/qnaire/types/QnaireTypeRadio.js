'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';



class QnaireTypeRadio extends Component {
  constructor(props){
    super(props)
    this.question = this.props.question
    this.answer = {id: this.question.id, choice_ids: []}
  }
  add_selection(value) {
    this.answer.choice_ids = [value]
    this.forceUpdate()
  }
  remove_selection(value) {
    this.answer.choice_ids = []
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
    return(
      <View>
        {choices}
        <Text>selected: {this.answer.id} {this.answer.choice_ids}</Text>
      </View>
    )
    
  }
}


module.exports = QnaireTypeRadio
