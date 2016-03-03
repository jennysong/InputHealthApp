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
  Image,
  StyleSheet,
  View,
} from 'react-native';



//global.QnaireTitleView = QnaireTitleView

class QnaireAppView extends Component {
  constructor(props){
    super(props)
    this.QNAIRE_DATA = require('./../../../qnaire4.json')
    this.QNAIRE_CONFIG_DATA = require('./../../../configuration.json')
    this.title_color = '#336f65'
    this.inner_container_width = WIDTH * 0.9;
    this.state = {
      nextView: 'QnaireTitleView'
    }
  }
  render() {
    return (
      <View style = {styles.app}>
        <Image 
          style = {styles.mainImage}
          source = {{uri: this.QNAIRE_DATA.images.landing}}/>
        <Image 
          style = {styles.mainImageOver}
          source = {require('./../../images/gradient.png')}/>
        <Image 
          style = {styles.logo}
          source = {{uri: this.QNAIRE_CONFIG_DATA.style.logo_url}} />
        <View>
          {React.createElement(App[this.state.nextView], {appView: this})}
        </View>
      </View>
    );
  }
  render_view(nextView) {
    this.setState({
      nextView: nextView
    })
  }

}


const styles = StyleSheet.create({
  app: {
    alignItems: 'center'

  },
  mainImage: {
    height: HEIGHT*0.35,
    position: 'absolute',
    left:0,
    right:0,
  },
  mainImageOver: {
    alignItems: 'stretch',
    position: 'absolute',
  },
  logo: {
    height: HEIGHT*0.1, 
    width: HEIGHT*0.1,   //need to be resized :)
    marginTop: HEIGHT* 0.06,
    marginBottom: HEIGHT * 0.04
  }
});

module.exports = QnaireAppView
