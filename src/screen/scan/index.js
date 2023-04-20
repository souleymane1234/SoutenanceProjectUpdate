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
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Scan({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const { id, Token, Data } = route.params;
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('data', data);
    navigation.navigate("Main")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.headback}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="#F07D00"
        />
      </View>


      {scanned && (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={styles.footer}>
          <MaterialIcons name="center-focus-weak" size={24} color="#F07D00" />
          <Text style={{ color: '#F07D00' }}>SCAN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
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
    height: windowHeight / 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
  },
  headback: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
});
