import React from "react";
import { Image} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from "./HomeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import AlbumDetail from "./AlbumDetail";

const HomeStack = createStackNavigator();
const HomeStackScreen=({navigation})=> {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="My Book"  
        component={AlbumDetail}
        options={{
            headerLeft: () => (
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                 <Image
                 style={{width:40,height:40,margin:10}}
                 source={require('../img/menu.png')}
                 
                 />
                 </TouchableOpacity>
              ),
              headerRight: () => (
                <Image
                style={{width:40,height:40,margin:10}}
                source={require('../img/search.png')}
                
                />
             ),
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color:"#fff",
          }, 
          headerStyle:{
            backgroundColor: "#00b49f",
          },
        }}
        />
      </HomeStack.Navigator>
    );
  }

  export default HomeStackScreen;