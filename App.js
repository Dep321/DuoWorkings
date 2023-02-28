import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
  
    import Routes from './Route';
  export default class App extends Component<{}> {
      render() {
  return (
    <View style={styles.container}>
            <StatusBar
              backgroundColor="#fff"
              barStyle="dark-content"
            />
            <Routes/>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
