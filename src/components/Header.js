import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({navigation}) => {
  return (
    <View>
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={()=> navigation.navigate('NewDrScreen')}>
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
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#00b49f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-between",
    height: 108,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  thumbnailStyle:{
    height:30,
    width:30,
    marginTop:12,
    marginLeft:22
  },
  searchStyle:{
    height:50,
    width:50,
    marginTop:12,
    marginRight:12
  },
  textStyle: {
    fontSize: 25,
    color:"#FFFFFF",
    marginTop:10,
    fontWeight:"500"
  },
});

export default Header;