import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import Data from "../json/books.json";
const Draw =() =>{
    
    return(
       <View style={styles.all}>
           <View style={styles.top}>
              <Image source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/6FA2E86D-64B3-4F7D-8CA4-9C5F444C0A1B.png"}}
                    style={{width:70,height:70,marginLeft:13,marginTop:30}}/>  
              <Text style={styles.name}>{Data.DrawerList[0].name}</Text>
                <Text style={styles.account}>{Data.DrawerList[0].account}</Text>
           </View>
           <View style={styles.bottom}>
               <View style={{ flexDirection:'row'}}>
            <Image source={require('../../img/icon_drawer_home.png')}
                   style={styles.home}/>
            <Text style={styles.homet}>{Data.DrawerList[0].home}</Text>
                </View>
                <View style={{ flexDirection:'row'}}>
            <Image source={require('../../img/icon_bottomnav_mybook.png')}
                   style={styles.home}/>
            <Text style={styles.homet}>{Data.DrawerList[0].mybook}</Text>
                </View>
                <View style={{ flexDirection:'row'}}>
            <Image source={require('../../img/icon_drawer_favorites.png')}
                   style={styles.home}/>
            <Text style={styles.homet}>{Data.DrawerList[0].favorites}</Text>
                </View>
                <View style={{ flexDirection:'row'}}>
            <Image source={require('../../img/icon_drawer_setting.png')}
                   style={styles.home}/>
            <Text style={styles.homet}>{Data.DrawerList[0].setting}</Text>
                </View>
                <View style={{ flexDirection:'row'}}>
            <Image source={require('../../img/icon_drawer_aboutus.png')}
                   style={styles.home}/>
            <Text style={styles.homet}>{Data.DrawerList[0].about}</Text>
                </View>
           </View>
           
       </View>
    )
}
const styles = StyleSheet.create({
   
    top:{
        backgroundColor:'#00b49f',
       width:304,
       height:168,
       opacity:1
   },
   name:{
    color:"white",
    fontSize:14,
    marginLeft:16,
    marginTop:10
   },
   account:{
    color:"white",
    fontSize:14,
    marginLeft:16,
    marginTop:5
   },
   bottom:{
       backgroundColor:"#ebebeb",
       height:700
   },
   home:{
       width:36,
       height:36,
       marginTop:23,
       marginLeft:24
   },
   homet:{
       color:"#5c5c5c",
        fontSize:18,
        marginTop:30,
        marginLeft:32
   }

});
    export default Draw;