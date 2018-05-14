import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,StatusBar, ControlPanel, Platform, ScrollView}  from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon}  from 'native-base'
import {DrawerNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons'
import MainHeader from './header'
import BodyContainer from './body'
import FooterContainer from './footer'
import Database from './database'

export default class FirstScreen extends Component {
    static navigationOptions ={
        tabBarLabel: 'Main',
        drawerIcon: ({tintColor}) => {
            return(
                <Icon name= "heart"
                style={{color:'#9B242D'}}/>
            );

        }
    }
    
    constructor(props){
        super(props)
        var db = new Database();
        db.writeUserData(1, 'yasen', 'yas123@abv.bg', 'htttppssguzami')
        console.log(db);
    }
    render()    {
        return <View>
        <StatusBar hidden/>
        <MainHeader
        onDrawer={() => this.props.navigation.navigate("DrawerToggle")}/>
        <BodyContainer/>
        </View>

    }
}
