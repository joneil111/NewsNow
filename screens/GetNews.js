import React, { Component } from "react";
import { Text, View, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const devHeigth = Dimensions.get('window').height;
const devWidth = Dimensions.get('window').width;



class GetNews extends Component {
    state = {
        news: []


    };

    componentDidMount() {
        this.props.navigation.setOptions({
            title: this.props.route.params.category
        })

        fetch(`https://inshortsapi.vercel.app/news?category=${this.props.route.params.category.toLowerCase()}`).then(res =>
            res.json()).then(response => {
                this.setState({
                    news: response.data

                })
                //console.log(this.state.news.length)
            })
            .catch(error => {
                console.log(error);

            });
    }
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                {
                    this.state.news.length === 0 ? (
                        <ActivityIndicator style={{ height: devHeigth, width: devWidth, alignItems: 'center', justifyContent: 'center' }} size='large' color='black' />
                    ) : (
                        <ScrollView>
                            {
                                this.state.news.map((news, index) => (
                                    news.imageUrl ?
                                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('WebView', { url: news.url})}>
                                            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, elevation: 4, width: devWidth - 40, marginVertical: 7 }} >
                                                <Image
                                                    source={{ uri: `${news.imageUrl}` }} style={{ height: 100, width: 100, borderRadius: 10 }}
                                                />
                                                <Text style={{ width: devWidth - 140, paddingLeft: 10, paddingTop: 5 }}>{news.title}</Text>

                                            </View>
                                        </TouchableOpacity>
                                        : null
                                ))
                            }
                        </ScrollView>
                    )
                }
            </View>
        );
    }

}

export default GetNews;