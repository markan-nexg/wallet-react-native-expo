import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import { Constants } from 'expo';
import { PropTypes } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
      height: Constants.statusBarHeight,
      backgroundColor: COLOR.lightBlueA400,
    }
}); 

class Container extends Component {
    render() {
        return (
          <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.statusBar} />
            {this.props.children}
          </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;