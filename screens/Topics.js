import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../Components/Categories';
class Topics extends Component{
  
  render(){
    return(
      <View>
        
        <Categories navigation={this.props.navigation}/>
        
      </View>

    );
  }

}

export default Topics;