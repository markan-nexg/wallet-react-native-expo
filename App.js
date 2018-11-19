import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BarcodeScanner from './app/components/BarcodeScanner';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       this.App()
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="인증하기"
        onPress={() => navigate('BarcodeScanner', {name: '인증'})}
      />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  BarcodeScanner: { screen: BarcodeScanner },
});

const App = createAppContainer(AppNavigator);

export default App;

function main() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <BarcodeScanner />   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
