import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { PropTypes } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#C2185B",
        paddingTop: Constants.statusBarHeight,
    },
});

class Container extends Component {
    render() {
        return (
          <View style={styles.container}>
              {this.props.children}
          </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;