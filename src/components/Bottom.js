import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
const Bottom = ({props}) => {
    
  return (
    
   
      <View style={styles.bottomm}>
      <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Image style={styles.Gemph1} source= {require('../img/icon_bottomnav_home.png')}/>
      <Text style={styles.w1}>Home</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.bottom2}>
      <Image style={styles.Gemph1} source= {require('../img/icon_bottomnav_mybook_selected.png')}/>
      <Text style={styles.w2}>My Book</Text>
      </View>
      <View style={styles.bottom3}>
      <Image style={styles.Gemph1} source= {require('../img/icon_bottomnav_favorites.png')}/>
      <Text style={styles.w1}>Favorites</Text>
      </View>
      
      
      </View>
    
    
  );
};


const styles = StyleSheet.create({
    bottomm:
    {
      
      // justifyContent:"center",
      // alignItems:"center",
      
      // width:360,
     
      flexDirection:"row",
      
      
    },
    bottom:
    {
      height:76,
      width:124,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom2:
    {
      height:76,
      width:126,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom3:
    {
      height:76,
      width:125,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    Gemph1:
    {
        width:40,
        height:40,
        
    },
    w1:
    {
        fontSize:14,
        color:'#717171',
        fontWeight:'bold',
    },
    w2:
    {
        fontSize:14,
        color:'#00b49f',
        fontWeight:'bold',
    }
    
});

export default Bottom;