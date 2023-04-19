import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native';
import { Audio } from 'expo-av';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';


const App = () => {
  const [isRecord, setIsRecord] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const [text, setText] = useState('bonjour');
  const [textt, setTextt] = useState('');
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState('problem');
  const [sound, setSound] = React.useState();
  const [langue, setLangue] = useState('');
  const [francais, setFrancais] = React.useState();
  const [djoula, setDjoula] = React.useState();
  const [img, setImg] = useState();
  const buttonLabel = isRecord ? 'Arreter' : 'Commencer à parler';

  //  const img1 = require('./assets/femme.jpg')
  //  const img2 = require('./assets/parle.jpg')
  // const MonImage = isRecord ? setImg(img1) : setImg(img2);
  console.log('avant', langue)

  const selectFrancais = (langue) => {
    setLangue('ok1');
    {langue == 'Francais' ? setLangue(langue) : setLangue(langue)}
    console.log('apres', langue)
  }
  console.log('apres', langue)

  // const selectDjoula = () => {
  //   setLangue(langue + 2)
  // }

  const DjoulaBienvenue = require('./assets/DjoulaBienvenue.mp3')
  const DjoulaNomRespo = require('./assets/DjoulaNomRespo.mp3')
  const DjoulaOffres = require('./assets/DjoulaOffres.mp3')
  const DjoulaRdv = require('./assets/DjoulaRdv.mp3')

  // francais 

  const FrancaisBienvenue = require('./assets/FrancaisBienvenue.mp3')
  const FrancaisNomRespo = require('./assets/FrancaisNomRespo.mp3')
  const FrancaisOffres = require('./assets/FrancaisOffres.mp3')
  const FrancaisRdv = require('./assets/FrancaisRdv.mp3')

  const son = () => {
  const yy = (text1 === 1) ? 'mon nom est diarra jamila':
  (text1 === 2) ?'je suis la responssable rh de la boite': 
  (text1 === 3) ?'désoler, je ne peux pas vous aider': 
  (text1 === 4) ?'merci et bonne journée a vous':'ok'
  setTextt(uu)
  console.log("okkkkkkkk...........", textt)
} 

    async function playSound() {
    console.log('Loading Sound');
     console.log('putain..................', langue)
    if (text1 === 1 && langue === 'Francais') {
      console.log('putain2..................', langue)
      const { sound } = await Audio.Sound.createAsync(FrancaisBienvenue);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    } 
    else if (text1 === 2 && langue === 'Francais'){
      const { sound } = await Audio.Sound.createAsync(FrancaisNomRespo);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    } 
    else if (text1 === 3 && langue === 'Francais'){
      const { sound } = await Audio.Sound.createAsync(FrancaisOffres);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    }
    else if (text1 === 4 && langue === 'Francais'){
      const { sound } = await Audio.Sound.createAsync(FrancaisRdv);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    }
    else if (text1 === 1 && langue === 'Djoula'){
      const { sound } = await Audio.Sound.createAsync(DjoulaBienvenue);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    } else if (text1 === 2 && langue === 'Djoula'){
      const { sound } = await Audio.Sound.createAsync(DjoulaNomRespo);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    }
      else if (text1 === 3 && langue === 'Djoula'){
      const { sound } = await Audio.Sound.createAsync(DjoulaOffres);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    } else if (text1 === 4 && langue === 'Djoula'){
      const { sound } = await Audio.Sound.createAsync(DjoulaRdv);
      setSound(sound);
      await sound.playAsync();
      setText1(text1 + 1)
    }


    console.log('Playing Sound');
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

    const voiceLabel = text
    ? text
    : isRecord
    ? ''
    : '';
const voiceButtonText = (text === '' && !isRecord) ? 
    'Press Start Button'
    :(text === '' && isRecord) ?
    'Say something...'
    :(text !== '' && isRecord) ?
    'Press Stop Button' : 'Press Start Button'

    
// const v = (text === '' && !isRecord) ? 'a':(text === '' && isRecord) ?'b':(text !== '' && isRecord) ?'c ': 'd'
Tts.setDefaultLanguage('fr-FR');
const yu = () => {
  const uu = (text1 === 1) ? 'mon nom est diarra jamila':
  (text1 === 2) ?'je suis la responssable rh de la boite': 
  (text1 === 3) ?'désoler, je ne peux pas vous aider': 
  (text1 === 4) ?'merci et bonne journée a vous':'ok'
  setTextt(uu)
  console.log("okkkkkkkk...........", textt)
}  
// if (text1 === 1) {
//     setTextt('ok')
//   } else if (text1 === 2) {
//     setTextt('problem')
//   }
  const speak = async () => {
    const result = await textt
    Tts.speak(result);
    setText1(text1 + 1)
  }

const onSpeechStart = (event) => {
    console.log('onSpeechStart');
    setText('');
  };
  const onSpeechEnd = () => {
    setIsRecord(false)
    console.log('onSpeechEnd');
  };
  const onSpeechResults = (event) => {
    console.log(' onSpeechResults', event);
    console.log('onSpeechResults');
    setText(event.value[0]);
    // speak();
    playSound();
  };
  const onSpeechError = (event) => {
    console.log('onSpeechError');
    console.log(event.error);
  };
const onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      
      Voice.start('fr-FR'); // languages code e.g 'en-US'
    }
    setIsRecord(!isRecord);
  };
const onSpeechPartialResults = (event) => {
   
    console.log(event.value[0]);
    setText(event.value[0]);
    
  };
const onSpeechVolumeChanged = (event) => {
    //console.log('onSpeechVolumeChanged 3333');
    //console.log(event.value);
  };
useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged
    yu()
    // MonImage()
return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [textt, text1,langue]);

  return (
           <View style={{flex: 1, alignItems: 'center', backgroundColor:'#ffff',justifyContent: 'center'}}>
       <View style={{flex: 0.7, width: "100%", margin: 10}}>
          <View style={{justifyContent:"center", marginTop: "20%"}}>
            <Text style={{color:'black', textAlign: "center"}}>{voiceLabel}</Text>
          </View>
          <View style={{justifyContent:"center", marginTop: "40%"}}>
            { isRecord ? (
              <Image
                style={{ width: 70,height: 70, alignSelf: "center"}}
                source={require('./assets/parle.jpg')}
              />
            ) : (
            <Image
              style={{ width: 70,height: 70, alignSelf: "center"}}
              source={require('./assets/femme.jpg')}
            />
            ) }
          </View>

       </View>
       <View style={{backgroundColor: "#3FB65F", flex: 0.3, width: "100%", alignItems: "center"}}>
          <TouchableOpacity
          onPress={onRecordVoice}
          // onPress={() => setModalVisible(true)}
            style={{marginTop: "20%"}}>
            <Image style={{ width: 70, height: 70, alignSelf: "center"}}
              source={require('./assets/mic-removebg-preview.png')}
            />
            <Text style={{color:'#fff', marginBottom:10, textAlign: "center"}}>{buttonLabel}</Text>
          </TouchableOpacity>
       </View>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity 
            onPress={() => selectFrancais('Francais')}
            >
              <Text style={styles.modalText}>Francais</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => selectFrancais('Djoula')}
            >
              <Text style={styles.modalText}>Djoula</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
</Modal>
</View>
    // <View style={styles.container}>
    //   <Button title="Play Sound" onPress={playSound} />
    // </View>
  );
};

const styles = StyleSheet.create({
 centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
