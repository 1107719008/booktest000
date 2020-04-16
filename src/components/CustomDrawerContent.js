import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";


const CustomDrawerContent=(props)=>{
  return(
    
    <SafeAreaView style={{flex:1,backgroundColor:'#00b49f'}}>
      <View style={{height:200,marginTop:40,marginLeft:16,backgroundColor:'#00b49f'}}>
        <Image
        style={{width:100,height:100}}
        source={require('../img/user_photo.png')}   
        />
        <Text style={{color:'#fff',fontSize:20,marginTop:10}}>GamexHCI</Text>
        <Text style={{color:'#fff',fontSize:20,marginTop:10}}>gdlab2017@gmail.com</Text>


      </View>

      <ScrollView style={{marginBottom:-50,backgroundColor:'#ebebeb'}}> 

       
        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/home_gray.png')}
         />
         <Text style={styles.GrayWord}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/mybook_gray.png')}
         />
         <Text style={styles.GrayWord}>My Book</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/favorites_gray.png')}
         />
         <Text style={styles.GrayWord}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/setting.png')}
         />
         <Text style={styles.GrayWord}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.list}onPress={()=>props.navigation.navigate("Home")}>
         <Image
         style={styles.GrayIcon}
         source={require('../img/aboutus.png')}
         />
         <Text style={styles.GrayWord}>About us</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    list:{
        padding:20,
        paddingLeft:20,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    GrayWord:{
        //fontFamily:"Roboto-Medium",
        color:"#5c5c5c",
        fontSize:22,
        marginTop:2,
        marginLeft:20,
    },
    GrayIcon:{
        width:30,
        height:30,
    }

});
export default CustomDrawerContent;