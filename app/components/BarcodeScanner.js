import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { COLOR, ThemeProvider, ThemeContext, getTheme, Toolbar, Card } from 'react-native-material-ui';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import Container from '../containers/Container';
import { createKeys } from '../utils/walletUtil';

export default class BarcodeScanner extends React.Component {
  static navigationOptions = {
    title: 'BarcodeScanner',
  };

  state = {
    hasCameraPermission: null,
    show: true,
    width: 400,
    height:400,
    code: '',
  };

  async componentDidMount() {
    this._requestCameraPermission();
  }
  
  // 카메라 권한 체크
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
    // setTimeout(() => {
    //   this.setState({
    //     show: true,
    //   });
    // }, 100);
  };

  // 바코드 조회 성공
  _handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(data);
    
    //키생성
    console.log(createKeys());

    // 화면 이동
    this.props.navigation.navigate('Wallets');
    // this.props.navigator.push({
    //   component: {
    //     name: 'Wallets'
    //   },
    //   // title: 'Scene ' + nextIndex,
    //   // passProps: {index: 1},
    // });
  }

  _renderBarcodeView() {
    return this.state.show ? (
      <View>
        <Text style={styles.title}>QR코드를 촬영하세요.</Text>             
        <View style={styles.barCodeScannerWrap}>
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={this._handleBarCodeScanned}
            style={styles.barCodeScanner}
          />
        </View>
      </View>
    ) : null;
  }

  // onPress={() => navigate('Profile', {name: 'Jane'})}

  render() {
    const { hasCameraPermission } = this.state;
    const { navigate, state  } = this.props.navigation;

    // if (hasCameraPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }
    // console.log(this.props)

    return (

      <Container>
        <StatusBar barStyle="default"/>
        <Toolbar
              leftElement="arrow-back"
              onLeftElementPress={() => this.props.navigation.goBack()}
              centerElement={state.params.title}
          />
          <View style={styles.container}>
            {
              hasCameraPermission === null ?
              <Text>Requesting for camera permission</Text> :
              hasCameraPermission === false ?
                <Text>Camera permission is not granted</Text> :
                this._renderBarcodeView()
            }
          </View>
      </Container>
    );
  }

  _nextPage(args) {
    // console.log(args);
    // alert(`Next: ${JSON.stringify(args)}`);
    alert('Next!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 30
  },
  barCodeScanner: { 
    height: 400, 
    width: 400,
  },
  barCodeScannerWrap: {
    height: 400, 
    width: 400,
    overflow: 'hidden',
  }
});