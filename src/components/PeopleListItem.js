import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Vibration } from 'react-native';
import { capitalizeFirstLetter } from '../util/';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last  } = people.name;
    return (
        <TouchableOpacity onPress={ () => {
            navigateToPeopleDetail({people});
            Vibration.vibrate(3); // (Para o uso acrescentar a lib Vibration!)
            console.log('Fui clicado -> ',first);
            }}>
            <View key={ first } style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail }}/>
                <Text style={styles.lineText}>
                    { `${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create ({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#e4e4e4',

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        color: '#232b2b',
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,

        //borderColor: '#01c384',
        //borderWidth: 2,
        marginLeft: 15,
        borderRadius: 60,
    }
})
export default PeopleListItem;