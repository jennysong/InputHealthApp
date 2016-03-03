'use strict';
import React, {
  AppRegistry,
  Component,
  MySceneComponent,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
var inner_container_width = WIDTH * 0.9;

class ResultView extends Component {
  constructor(props){
    super(props)

  }
  render() {
    this._refreshStyle()
    return (
    	<ScrollView style = {this.styles.container}>
        <Text>Result View</Text>
      </ScrollView>
    )
  }
  _refreshStyle(){
    this.styles = StyleSheet.create({
      container: {
        backgroundColor: '#eff7f9',
        height: HEIGHT*0.73,
        width: inner_container_width
      },
    })
  }

}



module.exports = ResultView