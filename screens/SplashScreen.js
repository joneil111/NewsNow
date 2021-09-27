import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../Components/contents';



export default function SplashScreen({navigation}) {
    const {signIn} =React.useContext(AuthContext);

const [data, setData] = React.useState({
    isloading:true,
    
});

const changer=()=>{

    setData({
        ...data,
        isloading:false
    })

}

const loginhandle = ()=>{
        
    signIn(false)
}

    return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Animatable.Image
            animation='zoomIn'
          source={require('../assets/newsnow.png')}
          style={styles.logo}
          resizeMode='stretch'/>
      </View>
      <Animatable.View style={styles.footer}
            animation='slideInUp'
            
      >
        <Text style={styles.title}>Get the latest news 24/7</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=> signIn()}>
            <LinearGradient
                colors={['#e0b92f','#e0b92f']}
                style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text> 
                    
                    
            </LinearGradient>
        </TouchableOpacity>
        </View>
      </Animatable.View>
      
    </View>
    );
    }

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#900c2c'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    }
  });