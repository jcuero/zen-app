/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import React, {PropTypes, Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class ZenView extends Component {
    static displayName = 'ZenView';

    static propTypes = {
        zen: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        fetchZen: PropTypes.func.isRequired
    };

    componentDidMount() {
    };

    componentWillReceiveProps(nextProps) {
    };

    loadData() {
        this.props.fetchZen(this.props.dispatch);
    };

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={() => this.loadData()}>
                    <Text style={styles.textButton}> Sorprendeme!! </Text>
                </TouchableOpacity>

                <View style={styles.zenContainer}>
                    {this.props.zen ? <Text >{this.props.zen}</Text> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
    },
    textButton: {
        fontSize: 22,
    },
    zenContainer: {
        marginTop: 24
    }
});

export default ZenView;