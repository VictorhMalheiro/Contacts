import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
    render(){
        const { people } = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.container}>
                <Image 
                source={{uri: people.picture.large}}
                style={styles.avatar}
                />
                    <View style={styles.detailContainer}>
                    
                            <Line label="Email " content={people.email}/>
                            <Line label="Celular " content={people.cell}/>
                            <Line label="Telefone " content={people.phone}/>
                            <Line label="Cidade " content={people.location.city}/>
                            <Line label="Estado " content={people.location.state}/>
                            <Line label="Nacionalidade " content={people.nat}/>
                            <Line label="Endereço " content={people.location.street}/>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#FFF',
    },
    detailContainer:{
        padding: 15,
        margin: 15,
        padding: 10,
        elevation: 2,
        borderRadius: 3,
        backgroundColor: '#FFF'
    },
    avatar: {
        aspectRatio: 1

    }    
})