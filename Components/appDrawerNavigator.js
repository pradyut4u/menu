import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import AppTabNavigator from './AppTabNavigator.js'
import CustomSideBar from './customSideBar.js'

export const AppDrawerNavigator = createDrawerNavigator({
	Home:{screen:AppTabNavigator}
},{contentComponent:CustomSideBar},{intialRouteName:'Home'})