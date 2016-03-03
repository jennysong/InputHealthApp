'use strict';
import React, {
  AppRegistry,
  Component,
  MySceneComponent,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var inner_container_width = WIDTH * 0.9; 

class QuestionView extends Component {
  constructor(props){
    super(props)
    this.appView = this.props.appView
    this.pagesArray = []
    this.state = {
      currentPage : 0
    }
    var page = []
    var use_break = this.appView.QNAIRE_DATA.attributes.use_section_break
    var _this = this

    this.appView.QNAIRE_DATA.questions.forEach(function(question,index){
      if (question.display_type != 'empty' && question.display_type !='break'){
        page.push(index)
      }
      if ((!use_break || question.display_type == 'break' )&& page.length != 0) {
        _this.pagesArray.push(page)
        page = []
      }
    })
    if (use_break) {this.pagesArray.push(page)}
  }


  render() {
    this._refreshStyle()
    var questionsArray = []
    var questions = this.appView.QNAIRE_DATA.questions
    this.pagesArray[this.state.currentPage].forEach(function(qindex){
      var QnaireTypeClass = 'QnaireType'+ questions[qindex].display_type[0].toUpperCase()+questions[qindex].display_type.slice(1)
      questionsArray.push(
        <View key = {qindex}>  
          <Text>{questions[qindex].visible_text}</Text>
          {/*<Text>{questions[qindex].note}</Text>
          <Text>Optional: {questions[qindex].is_optional.toString()}</Text>
          <Text>Pictures here if there are any</Text>
          */}
          {React.createElement(App[QnaireTypeClass],{question: questions[qindex]})}
          {console.log('hi')}
          {console.log(React.createElement(App[QnaireTypeClass],{key: qindex, question: questions[qindex]}))}
        </View>
      )
    })
    console.log(questionsArray)
    
    return (
    	<ScrollView style = {this.styles.container}>
        {questionsArray}
        <TouchableOpacity onPress = {()=>this._backButton.call(this)}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>this._nextButton.call(this)}>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
  _backButton(){
    if (this.state.currentPage == 0){
      this.appView.render_view('QnaireTitleView')
    }else {
      this.setState({currentPage: this.state.currentPage-1})
    }
  }
  _nextButton(){
    console.log(this.pagesArray)
    if (this.state.currentPage == this.pagesArray.length-1){
      this.appView.render_view('ResultView')
    } else {
      this.setState({currentPage: this.state.currentPage+1})
    }
  }
  _refreshStyle(){
    this.styles = StyleSheet.create({
      container: {
        backgroundColor: '#eff7f9',
        height: HEIGHT*0.73,
        width: inner_container_width
      }

    })
  }

}



module.exports = QuestionView