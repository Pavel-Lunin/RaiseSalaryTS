import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Loader = () => {
    const loading = require('./preloader.gif');
    return (
        <View style={styles.circular}>
            <Image source={loading} />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    circular: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    }
});
