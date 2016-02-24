'use strict';
import React, {
  AppRegistry,
  Component,
  MySceneComponent,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
var inner_container_width = WIDTH * 0.9;

class QuestionView extends Component {
  constructor(props){
    super(props)
    this.appView = this.props.appView
  }
  render() {
    return (
    	<View style = {styles.container}>
        <Text>{this.appView.QNAIRE_DATA.name} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eff7f9',
    height: HEIGHT*0.73,
    width: inner_container_width
  }
})


module.exports = QuestionView