import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import firebase from 'react-native-firebase';

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
  clientId: '229179779783-9r418qo0l23s4g9flmfi04tnv57lji9f.apps.googleusercontent.com',
  appId: '1:229179779783:android:9e3f3af6f89eb918',
  apiKey: 'AIzaSyDjo1LNjjfX2AmcVuna8cAOwthLcYx59vk',
  databaseURL: 'https://reactnativefirebasetutor-f9c54.firebaseio.com',
  storageBucket: 'reactnativefirebasetutor-f9c54.appspot.com',
  messagingSenderId: '229179779783',
  projectId: 'reactnativefirebasetutor-f9c54',
  // enable persistence by adding the below flag
  // persistence: true,
};
const animalApp = firebase.initializeApp(androidConfig,'MissYou')

const rootRef = firebase.database().ref();
const animalRef = rootRef.child('lovers');
