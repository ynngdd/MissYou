import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,StatusBar, ControlPanel, Platform, ScrollView}  from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon}  from 'native-base'
import MainHeader from './components/header'
import BodyContainer from './components/body'
import FooterContainer from './components/footer'
import {DrawerNavigator} from 'react-navigation'
import FirstScreen from './components/sidebar';

const DrawerExample = DrawerNavigator(
  {
    First:{
      path: '/',
      screen: FirstScreen,
    }
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left'
  }
)
export default DrawerExample;

