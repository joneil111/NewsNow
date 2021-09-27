    import React,{ Component } from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import Trending from '../Components/Trending';
    class Homescreen extends Component{
      
      render(){
        return(
          <View>
            
            <Trending navigation={this.props.navigation}/>
            
          </View>
    
        );
      }
    
    }
    
    export default Homescreen;
