import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";



class Trending extends Component {
    state={
        news:[]
    }

    componentDidMount(){
        fetch('https://inshortsapi.vercel.app/news?category=all').then(res=>
        res.json()).then(response=>{
            this.setState({
                news: response.data

            })
            console.log(this.state.news.length)
        })
        .catch(error=>{
            console.log(error);
        
        });
    }
    render() {
        return (
            <View>
                {
                    this.state.news===0?(<ActivityIndicator color='black' size="large"/>)
                    :
                    <ScrollView vertical={true} >
                        {
                            this.state.news.map((news,index)=>(
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('WebView', { url: news.url})}>
                                <View style={{margin:10, alignItems:'center'}}>
                                    <Image source={{uri: `${news.imageUrl}`}} style={{height:200, width:200}}/>
                                    <Text style={{width:200,textAlign:'justify'}}>{news.title}</Text>
                                </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                }
            </View>
        );
    }

}

export default Trending;