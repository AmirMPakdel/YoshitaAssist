import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableNativeFeedback
} from 'react-native';
import Colors from '../Colors';

export default class Home extends React.Component {
  render() {

    return (
      <ImageBackground
        imageStyle={{ resizeMode: 'cover' }}
        source={require('../assets/images/welcome_01.png')}
        style={styles.container}>
        <View style={{ flexGrow: 2, width: '100%', paddingTop: 30 }}>
          <Text>یک هفته هست ....</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '100%',
            padding: 50
          }}>
          <TouchableNativeFeedback style={{ overflow: 'hidden' }}>
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
              }}>
              <Image
                source={require('../assets/icons/event.png')}
                style={{ width: '55%', height: '55%', resizeMode: 'cover' }}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Whitebackground
  }
});
