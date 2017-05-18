/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/store';


import ZenViewContainer from './src/modules/zen/ZenViewContainer';

export default class ZenApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Provider store={store}>
                    <ZenViewContainer/>
                </Provider>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('ZenApp', () => ZenApp);
