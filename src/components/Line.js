import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Line = ({label = "", content = "-"}) => {
    return(
        <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label
                //label.length > 10 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#edf2f8'
    },
    cell: {
        paddingLeft: 5,
        
    },
    longLabel: {
        fontSize: 10
    },
    label: {
        fontWeight: '100',
        flex: 1,
        color: '#bbb'
    },
    content: {
        flex: 3,
        fontSize: 16
       // marginTop: -20
    }
})

export default Line;