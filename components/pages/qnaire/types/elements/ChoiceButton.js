'use strick';

import React,{
	Component,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native'

class ChoiceButton extends Component {
	constructor(props){
		super(props)
		this.label = this.props.label
		this.question = this.props.question
		this.value = this.props.value
		this.type = this.props.type
		this.parent = this.props.parent
		this.selected = false
	}

	render(){
		if (_.contains(this.parent.answer.choice_ids,this.value))	this.selected = true
		else this.selected = false
		this._refreshStyle()
		return(
			<TouchableHighlight onPress = {() => this._buttonSelected.call(this)} style = {this.styles.button}>
				<Text>{this.question} {this.label} {this.value}</Text>
			</TouchableHighlight>
		)
	}
	_buttonSelected() {
		if (this.selected == false) {
			this.parent.add_selection(this.value)
		} else {
			this.parent.remove_selection(this.value)
		}
	}
	_refreshStyle() {
		this.styles = StyleSheet.create({
			button: {
				width: 300,
				height: 30,
				backgroundColor: this.selected? 'red':'yellow'
			}
		})
	}
}


module.exports = ChoiceButton;

