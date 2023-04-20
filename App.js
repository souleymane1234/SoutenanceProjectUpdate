import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler
} from 'react-native';
import Router from './src/router/router';
export default function App({ navigation, route }) {
  return (
    <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  Image: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    opacity: 0.3,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 231, 211, 1)',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  headback: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
});
