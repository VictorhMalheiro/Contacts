import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);


const style = StyleSheet.create({
    container: {        
        backgroundColor: '#4b58a4',
        padding: 12,
    },
    title: {
        marginTop: 24,
        color: '#FFF',
        fontSize: 24,
    }

})


export default Header;