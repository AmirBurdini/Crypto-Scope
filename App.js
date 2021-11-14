/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
  Button,
  Alert,
  ImageBackground
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import spaceImg from './assets/images/stars-2539245.jpg'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const centerLayout = { 
    padding: "1%", 
    flex: 1,
  }

  const image = { uri: './assets/images/stars-2539245.jpg' };

  

  return (
    <ScrollView style={backgroundStyle}>
      <View style = {styles.header}>
        <View style={centerLayout}>
          <Text style = {styles.headline}>CryptoScope</Text>
        </View>
        <View style={centerLayout}>
          <Text style = {styles.subHeadline}>Identify the Next Big Thing</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ImageBackground source={spaceImg} resizeMode="cover" style={styles.image}>
          {/* <Button style={styles.buttonStyle} 
            title = "to the Moon!" onPress = {() => Alert.alert('clicked')}/> */}
          <Text style = {styles.buttonStyle} onPress = {() => Alert.alert('clicked')}
          >To The Moon!</Text>

        </ImageBackground>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  highlight: {
    fontWeight: '700',
  },
  headline : {
    fontWeight: '500',
    fontSize : 36,
    color : '#0693e3'
  },
  subHeadline : {
    fontWeight: '400',
    fontSize : 24,
    color : '#0693e3'
  },
  header : {
    backgroundColor : "#192d4d",
    padding: "5%", 
    flex: 1,
  },
  body : {
    flex: 1,
    flexDirection : 'row'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height : 700
  },
  buttonStyle : {
    backgroundColor : "#000000c0",
    color : "#0693e3c0",
    fontSize : 38,
    marginLeft : "auto",
    marginRight : "auto",
  }
});

export default App;
