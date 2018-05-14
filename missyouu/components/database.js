import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import * as firebase from 'firebase';
import firebaseService from './firebase'

export default class Database  {

    constructor() {
        this.database = firebaseService.database();
        console.log(this.database);
    }
    writeUserData(userId, name, email, imageUrl) {
        this.database.ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
    }
}
