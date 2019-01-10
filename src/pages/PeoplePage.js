import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

//import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount(){
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false,
        });
      }).catch(error => {
        this.setState(({ 
          loading: false,
          error: true
        }));
      });
    },100)    
  }

  renderPage(){
    if(this.state.loading){
      return <ActivityIndicator size="large" color="#374178" />;
    }if(this.state.error){
      return  (<View style={styles.errorContainer}>
                {/* <Text style={styles.errorMessage}>Ops... Algo deu errado 🙄</Text> */}
                <Text style={styles.errorMessage}>OPS... ALGO DEU ERRADO 🙄</Text>
             </View>);
    }
    return ( 
      <PeopleList 
        peoples={this.state.peoples}
        onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleDetail',pageParams);
        }}
      />
    );
    
  }

  render() {
    
    return (
      
        <View style={ styles.container}>
          { this.renderPage() }
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  errorContainer: {
    backgroundColor: '#fff',
    //flex: 6,
    alignSelf: 'center',
    margin: 15,
    padding: 26,
    elevation: 5,
    borderRadius: 3,
    height: 85
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
  }
});
