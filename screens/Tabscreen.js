import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import QrandBarcode from './QrandBarcode';
import Topics from './Topics';
import Homescreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator=() =>(
  
    <Tab.Navigator
    initialRouteName="HomeScreen"
    activeColor="#fff"
    shifting={true}
    

  >
    <Tab.Screen
      name="HomeScreen"
      component={Homescreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Topics"
      component={Topics}
      options={{ 
        tabBarLabel: 'Topics',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <AntDesign name="question" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="QrandBarcode"
      component={QrandBarcode}
      options={{
        tabBarLabel: 'QrandBarcode',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <AntDesign name="scan1" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>  
  );
  



export default function Tabscreen() {
  return (
    <TabNavigator/>
  )}

