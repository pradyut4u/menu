import React from 'react'
import {View, TouchableOpaacity, Text, TextInput} from 'react-navigation'
import {MyHeader} from '../Components/myHeader'

export default class Setting extends React.Component{
constructor(){
	super()
	this.state={
	address:'',
	emailId:'',
	firstname:'',
	lastname:'',
	mobileno:'',
	docId:''
	}
}
	render(){
		return(
			<View>
			<MyHeader tittle="Settings" navigation={this.props.naigation}/>
			<View>
			<TextInput placeholder={"First name"}/>
			</View>
			</View>
		)
	}
}