import {Expo, AppLoading} from "expo";

import React from 'react';
import { 
  
  StyleSheet, 
  Text,
  View, 
  TextInput, 
  ImageBackground, 
  Dimensions,
  SafeAreaView
} from 'react-native';
// import Hello from './hello'

import { Button, ThemeProvider } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('./assets/images/wallpaper_2.jpg');


const theme = {
  Button: {
    raised: true,
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      calcValue: '',
      tip: 0.2,
      isReady: false,
    };
  }

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({

  //   });
  //   this.setState({ isReady: true })
  // }
  
  updateTip(t) {
    if(t){
      this.setState({
        tip: parseFloat(t)/100
      })
    }else{
      this.setState({
        tip: 0
      })
    }
    
  }

  

  render() {

    let tip =0.00;
    if ( this.state.calcValue ){
      tip = parseFloat(this.state.calcValue) * this.state.tip;
      tip =(Math.round(tip * 100) / 100).toFixed(2);
    }

    // if(!this.state.isReady){
    //   return <Expo.AppLoading />
    // }

    return (
      <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.mainContainer}>

          <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
        
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>$</Text>
          </View>
          
          <Text style={styles.text}>The tip is ${tip}</Text>

          <TextInput
            placeholder="$0"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(calcValue) => this.setState({calcValue})}
            value={this.state.calcValue}
          />
          <Button
            title="20%"
            onPress={() => this.setState({tip: 0.2})}
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: 'rgba(109, 202, 195, 1)',
              borderRadius: 5,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{ marginVertical: 10, height: 50, width: 130 }}
            underlayColor="transparent"
          />
          <Button
            title="25%"
            onPress={() => this.setState({tip: 0.25})}
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: 'rgba(109, 202, 195, 1)',
              borderRadius: 5,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{ marginVertical: 10, height: 50, width: 130 }}
            underlayColor="transparent"
          />

            <Text style={styles.text}>custom tip</Text>

            <TextInput
            placeholder="0"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={t => this.updateTip(t)}
            value={(this.state.tip *100).toString()}
          />
          </ImageBackground>
        </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}
const stylesCenter = {
  alignItems: 'center',
  justifyContent: 'center',
}
const verticaMargin = {
  marginVertical: 20, 
}
const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  logoContainer:{
    marginTop: -120,
    marginBottom: 20,

    height: 80, 
    width: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(109, 202, 195, .3)',
    ...stylesCenter
  },
  logo:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT + 50,
    ...stylesCenter
  },
  headerContainer: {
    padding: 40,
    backgroundColor: '#4F80E1',
    marginBottom: 0,
    ...stylesCenter
  },
  input: {
    height: 50, 
    width: 250,
    borderRadius: 6,
    backgroundColor: 'white',
    paddingLeft: 15,
    ...verticaMargin
  },
});
 