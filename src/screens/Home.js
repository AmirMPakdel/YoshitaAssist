import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Colors from '../Colors';
import EventTypeButton from '../components/EventTypeButton';
import NewEventButton from '../components/NewEventButton';

export default class Home extends React.Component {
  state = {
    currentImageIndex: 0,
    images: [
      require('../assets/images/welcome_01.png'),
      require('../assets/images/welcome_02.png'),
      require('../assets/images/welcome_03.png')
    ]
  };

  componentDidMount() {
    // this.intervalID = setInterval(() => {
    //   this.setState(prevState => {
    //     if (prevState.currentImageIndex === 2) {
    //       return { currentImageIndex: 0 };
    //     } else {
    //       return { currentImageIndex: prevState.currentImageIndex + 1 };
    //     }
    //   });
    // }, 5000);
  }
  componentWillUnmount() {
    // clearInterval(this.intervalID);
  }
  fadeIn = () => {};
  render() {
    return (
      <ImageBackground
        imageStyle={{ resizeMode: 'stretch', opacity: 1 }}
        source={this.state.images[this.state.currentImageIndex]}
        style={styles.container}>
        <View
          style={{
            flexGrow: 2,
            width: '100%',
            paddingTop: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              marginBottom: 30,
              fontFamily:'sahel',
              textAlign: 'center'
            }}>
            یک هفته هست ورزش نکردی
            {'\n'}
            امروز عصر نیم ساعت وقت خالی داری {'\n'}
            تایه نفسی بکشی و قدمی بزنی
            {'\n'}
            از دستش نده !!!
          </Text>

          <View
            style={{
              marginVertical: 10,
              width: '42%',
              paddingBottom:2,
              height: 40,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#fff'
            }}>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text
                  style={{ color: '#fff', fontFamily: 'sahel', fontSize: 20 }}>
                  از ساعت ۱۸:۳۰
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: '42%', height: 40, marginVertical: 10 }}>
            <EventTypeButton
              title="مدیریت روز"
              onpress={() => this.props.navigation.navigate('EventManager')}
            />
          </View>
        </View>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '100%',
            padding: 30
          }}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('NewEvent')}
            style={{ overflow: 'hidden' }}>
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
