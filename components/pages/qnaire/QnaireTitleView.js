/**
 * Things to be changed 
 *  -need to take text logo as well as image logo
 *  -image logo size is currently set as default. it has to be square. should be free size.
 *  -currently set android menu-bar-height as 25. need to find the correct height.
 *
 *
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  WebView
} from 'react-native';



var inner_container_width = WIDTH * 0.9;
var webview_height = HEIGHT - 380;


class QnaireTitleView extends Component {
  constructor(props){
    super(props)
    this.appView = this.props.appView
    this.description_css = '<style>p, span{font-family: "Helvetica Neue"; font-size: 11pt !important; font-weight: 300; line-height: 130% !important;}img{max-height: 200px; max-width: 200px; width: auto !important; height: auto !important;}</style>'
    this.new_description = this.description_css.concat(this.appView.QNAIRE_DATA.description)
  }
  _pressedStart() {
    console.log(this.appView)
    this.appView.render_view('QuestionView', this)
    //this.props.navigator.replace({sceneComponent: 'QnaireTypeRadio'})
  }
  render() {
    this._refreshStyle()
    return (
      <View>
        <View style={this.styles.innerTopContainer}>
          <Text style={this.styles.title}>
            {this.appView.QNAIRE_DATA.name}
          </Text>
          <Text style={this.styles.estimated_time}>
            Estimated Time: {this.appView.QNAIRE_DATA.attributes.estimated_minutes}min
          </Text>
        </View>
        <View style={this.styles.innerMidContainer}>
          <WebView 
            style={this.styles.webview} 
            html={this.new_description}
            scalesPageToFit={false}
            scrollEnabled={true}/>
        </View> 
        <TouchableOpacity onPress = {() => {this._pressedStart.call(this)}}>
          <View style={this.styles.innerBottomContainer}>
            <Text style={this.styles.startQnaire}>
              Start Qnaire
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  _refreshStyle() {
    this.styles = StyleSheet.create({
      innerTopContainer: {
        alignItems: 'center',
        backgroundColor: '#eff7f9',
        height: HEIGHT*0.15,
        width: inner_container_width
      },
      innerMidContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: HEIGHT* 0.45,
        width: inner_container_width
      },
      innerBottomContainer: {
        alignItems: 'center',
        backgroundColor: '#9dc938',
        height: HEIGHT*0.13,
        width: inner_container_width,
        marginBottom: HEIGHT*0.07
      },
      title: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 21,
        textAlign: 'center',
        marginTop: 30,
        color: this.appView.title_color
      },
      estimated_time: {
        fontFamily: 'Helvetica-Light',
        color: 'black',
        fontSize: 13,
        marginTop: 7
      },
      webview: {
        width: inner_container_width-5,
      },
      startQnaire: {
        color: 'white',
        fontFamily: 'Helvetica-Bold',
        fontSize: 30,
        marginTop: 25
      }
    })
  }
}



module.exports = QnaireTitleView
