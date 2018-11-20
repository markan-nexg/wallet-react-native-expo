import React, { Component, PureComponent  } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withTheme, Avatar, Card, ListItem, Toolbar } from 'react-native-material-ui';
import { PropTypes } from 'prop-types';
import Container from '../containers/Container';

class Wallets extends Component {
  static navigationOptions = {
    title: 'Wallets',
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default"/>
        <Toolbar
              leftElement="arrow-back"
              onLeftElementPress={() => this.props.navigation.goBack()}
              centerElement="Card"
          />
        <Card>
          <View style={styles.textContainer}>
            <Text>
                 비트코인
            </Text>
            <Text>
              18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
            </Text>
            <Text>12.80118794 BTC ($114.58)</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textContainer}>
            <Text>
                이더리움
            </Text>
            <Text>
              0x38c951f1e7bcea46e96105f55253842c4f54e665
            </Text>
            <Text>0.1005 ETH ($14.58)</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textContainer}>
            <Text>
                스텔라
            </Text>
            <Text>
              GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNY
            </Text>
            <Text>2.435 XLM ($0.68)</Text>
          </View>
        </Card>
      </Container>
    )
  }
}

export default withTheme(Wallets);

const propTypes = {
  navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  textContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
  },
})