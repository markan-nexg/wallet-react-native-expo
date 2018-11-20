import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { COLOR, ThemeProvider, ThemeContext, getTheme, Toolbar, Card, withTheme } from 'react-native-material-ui';
import { PropTypes } from 'prop-types';
// import { ToastAndroid, ScrollView, Platform, Animated, Easing } from 'react-native';
import Container from '../containers/Container';

// components
/*
import {
    ActionButton,
    Avatar,
    ListItem,
    Toolbar,
    BottomNavigation,
    Icon,
} from '../react-native-material-ui/src';
*/

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Toolbar
              leftElement="dehaze"            
              centerElement="Card"
          />
          <View style={{marginTop:10}}>
            <Card>
              <View style={{padding:20}}>
                <Button
                  title="인증하기"
                  onPress={() => navigate('BarcodeScanner', {name: '인증'})}
                />
                <View style={{height:20}}/>
                <Button
                  title="지갑화면"
                  onPress={() => navigate('Wallets', {name: '지갑'})}
                />
              </View>
            </Card>
          </View>
      </Container>
    );
  }
}


Home.propTypes = propTypes;

export default withTheme(Home);