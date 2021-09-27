import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const categories = ['Business', 'Sports', 'World', 'Politics', 'Technology', 'Startup', 'Entertainment', 'Science', 'Entertainment']

class Categories extends Component {
    render() {
        return (
            <ScrollView vertical={true}>{
                categories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={()=> this.props.navigation.navigate('GetNews', {category})}>
                    <View >
                        <Text style={{
                            padding: 10, borderWidth: 1, borderColor: 'black',
                            fontSize: 19, margin: 10, borderRadius: 10
                        }}>{category}</Text>
                        
                    </View>
                    </TouchableOpacity>
                ))
            }</ScrollView>
        );
    }

}

export default Categories;