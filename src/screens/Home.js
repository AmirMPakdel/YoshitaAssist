import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  LayoutAnimation,
  BackHandler,
  UIManager,
} from 'react-native';
import Colors from '../Colors';
import EventTypeButton from '../components/EventTypeButton';
import NewEventButton from '../components/NewEventButton';
import Sound from 'react-native-sound';

let track_loaded = false;
let paused = true;
let sound = null;

const play= ()=>{

if(paused){

  if(!track_loaded){
    Sound.setCategory('Playback', true);

    sound = new Sound('harbar.mp3', Sound.MAIN_BUNDLE, (error)=>{

      if (error) {
        alert('player error');
      }else{

        sound.play();
      }
    });
    track_loaded = true;

  }else{
    sound.play();
  }


  }else{
    if(sound !== null){
      sound.pause();
    }
  }
}

export default class Home extends React.Component {

  _didFocusSubscription;
 _willBlurSubscription;

 constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {

    if(!paused){

        play();
    }
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


  state = {
    currentImageIndex: 0,
    images: [
      require('../assets/images/welcome_01.png'),
      require('../assets/images/welcome_02.png'),
      require('../assets/images/welcome_03.png')
    ],
    playIcon:require('../assets/images/play2.png'),

  };

  componentDidMount() {

    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.easeInEaseOut();

    this.intervalID = setInterval(() => {

       this.setState(prevState => {
         if (prevState.currentImageIndex === 2) {
           return { currentImageIndex: 0 };
        } else {
          return { currentImageIndex: prevState.currentImageIndex + 1 };
        }
       });
     }, 10000);

     // for play icons
  }

  changeIcon(){

      this.setState(pre=>{

        if(paused){
          paused = false;
          pre.playIcon = require('../assets/images/pause.png');
        }else{
          paused = true;
          pre.playIcon = require('../assets/images/play2.png');
        }
        return pre;
      })
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
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          opacity:1,//fadeAnim,
          backgroundColor: Colors.Whitebackground
        }}>

        <TouchableOpacity onPress={()=>{play(); this.changeIcon()}} style={{position:'absolute', bottom:36, right:36}}>
        <View>
          <Image style={{height:55, width:55}}

          source={this.state.playIcon}/>
        </View>
        </TouchableOpacity>


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
                width: 58,
                height: 58,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
              }}>
              <Image
                source={require('../assets/icons/event.png')}
                style={{ width: '45%', height: '45%', resizeMode: 'cover' }}
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
