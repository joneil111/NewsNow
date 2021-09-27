console.disableYellowBox=true;

import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './Components/contents';

import Tabscreen from './screens/Tabscreen';
import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import GetNews from './screens/GetNews';
import WebViewComponent from './Components/WebView';
import Trending from './Components/Trending';
import QrandBarcode from './screens/QrandBarcode';
import Homescreen from './screens/HomeScreen';
import ExerciseInfo from './screens/Topics';

const Stack = createStackNavigator();
export default function App() {
  // const [isLoading, setisloading]=React.useState(true);
  // const [userToken,setuserToken] = React.useState(null);
  
  const initialLoginState={
    isLoading:true,
    userName:null,
    userToken:null,
  };

  const authContext=React.useMemo(()=>({
    signIn: async(leave)=>{
      // setuserToken("fgkl");
      // setisloading(false);

      
      if(leave!==true){
        
        dispatch({type: 'LOGIN'});
      }  
      //console.log('user token',username);
      

      
    },
    signOut: async()=>{
      
      dispatch({type: 'LOGOUT'});
    },

  }),[]);

  const loginReducer = (prevstate, action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevstate,
          
          isLoading:false,
        };
      case 'LOGIN':
        return{
          ...prevstate,

          isLoading:false,
        };
        case 'LOGOUT':
          return{
            ...prevstate,
            
            
            isLoading:true,
          };
    }
  };

  const [loginstate, dispatch] = React.useReducer(loginReducer, initialLoginState);
 

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {!loginstate.isLoading ? (
        <Stack.Navigator >
        <Stack.Screen name="News Now" component={Tabscreen} 
                  options={{
                    headerStyle: {
                      backgroundColor: '#659db4',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
        
        />
        <Stack.Screen name='GetNews' component={GetNews}/>
        <Stack.Screen name='Trending' component={Trending}/>
        <Stack.Screen name="WebView" component={WebViewComponent} options={{headerShown:false}}/>
        


        </Stack.Navigator>
        )
      :
        <RootStackScreen/>
      }
      
      

       
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

