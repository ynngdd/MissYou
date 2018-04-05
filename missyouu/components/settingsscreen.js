import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,StatusBar, ControlPanel, Platform, ScrollView}  from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon}  from 'native-base'
import {DrawerNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons'
import MainHeader from './header'
import BodyContainer from './body'
import FooterContainer from './footer'
export default class SettingsScreen extends Component {
    static navigationOptions ={
        tabBarLabel: 'Settings',
        drawerIcon: ({tintColor}) => {
            return(
                <Icon name= "md-settings"
                style={{color:'#9B242D'}}/>
            );

        }
    }
    render()    {
        return <View>
        <StatusBar hidden/>
        <MainHeader
        onDrawer={() => this.props.navigation.navigate("DrawerToggle")}/>
        <Text>ihcihcichima</Text>
        </View>

    }
}
