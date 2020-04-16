import React from "react";

import Header from "./src/components/Header";
import AlbumDetail from "./src/components/AlbumDetail";
import albumData from "./src/json/albums.json";
import CustomDrawerContent from "./src/components/CustomDrawerContent";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedbac, TouchableOpacity, Linking, FlatList } from 'react-native';
import HomeScr from "./src/components/HomeScr"
import NewDrScreen from "./src/components/NewDrScreen";
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function MainScreen({ navigation }) {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Draw')}>
            <Image style={styles.thumbnailStyle}
              source={{
                uri: "https://github.com/1107719008/material-icon/blob/master/btn_navbar_mobile.png?raw=true"
              }}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>My Book</Text>
          <Image style={styles.searchStyle}
            source={{
              uri: "https://github.com/1107719008/material-icon/blob/master/btn_search.png?raw=true"
            }}
          />

        </View>

      </View>
      <FlatList
        data={albumData.albumList}
        renderItem={({ item }) => <AlbumDetail album={item} />}
        keyExtractor={item => item.title}
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                focused
                  ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_home.png?raw=true" }} style={{ height: 24, width: 24 }} />
                  : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_home.png?raw=true" }} style={{ height: 24, width: 24 }} />
              )
            }}
          />
          <Tab.Screen name="My Book" component={HomeScreen}
            options={{

              tabBarIcon: ({ focused }) => (
                focused
                  ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_mybook_selected.png?raw=true" }} style={{ height: 24, width: 24 }} />
                  : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_mybook_selected.png?raw=true" }} style={{ height: 24, width: 24 }} />
              )
            }}
          />
          <Tab.Screen name="Favorite" component={HomeScreen}
            options={{

              tabBarIcon: ({ focused }) => (
                focused
                  ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_favorites.png?raw=true" }} style={{ height: 24, width: 24 }} />
                  : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_favorites.png?raw=true" }} style={{ height: 24, width: 24 }} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>

      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScr}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Drawer" component={'NewDrScreen'}
          options={{ title: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
