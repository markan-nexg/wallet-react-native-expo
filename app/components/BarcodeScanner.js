import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { TextInput } from 'react-native-gesture-handler';

export default class BarcodeScanner extends React.Component {
  static navigationOptions = {
    title: 'BarcodeScanner',
  };

  state = {
    hasCameraPermission: null,
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
  };

  // 바코드 조회 성공
  _handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  _renderBarcodeView() {
    return (
      <View style={styles.input}>
        <Text style={{fontSize: 20 }}>QR코드를 촬영하거나</Text>        
        <Text style={{ fontSize: 20 }}>인증코드를 입력하세요.</Text>        
        <TextInput 
          placeholder="인증코드를 입력하세요."
          placeholderTextColor="#999999"
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />        
        <View style={{ width:200, height:200, overflow: 'hidden', marginBottom:10, marginTop: 10 }}>
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={this._handleBarCodeScanned}
            style={styles.barCodeScanner}
          />
        </View>
        <Button          
          onPress={this._nextPage}
          title="다음"
          color="#841584"
          buttonStyle={{ width: 200, height: 50 }}
        />
      </View>
    );
  }

  // onPress={() => navigate('Profile', {name: 'Jane'})}

  render() {
    const { hasCameraPermission } = this.state;
    const { navigate } = this.props.navigation;

    // if (hasCameraPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }

    return (
      <View style={styles.container}>
        {
          hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            this._renderBarcodeView()
        }
      </View>
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  barCodeScanner: { 
    height: 200, 
    width: 200,
  },
  input: {
    flex: 1,
    flexDirection: 'column',     
    alignItems: 'center',
    justifyContent: 'center',
  }
});