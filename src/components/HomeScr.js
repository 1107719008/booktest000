import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,ScrollView} from 'react-native';
import AlbumDetail from "./src/components/AlbumDetail";
import albumData from "./src/json/albums.json";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }
  
const HomeScr = ({navigation}) =>{
return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
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

    export default HomeScr;