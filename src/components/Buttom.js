import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";

const Buttom =() =>{
    
    return(
        <View style={styles.bottomnav}>
        <View style={styles.back}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('../../img/icon_bottomnav_home.png')}
                        style={styles.statuspic}
                        />
                <Text style={styles.home}>Home</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
           <View style={styles.back}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('../../img/icon_bottomnav_mybook.png')}
                        style={styles.statuspic}
                        />
                <Text style={styles.mybook}>My Book</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
        <View style={styles.back}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('../../img/icon_bottomnav_favorites.png')}
                        style={styles.statuspic}
                        />
                <Text style={styles.favorite}>Favorites</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
   bottomnav:{
    flexDirection:'row'
   },
    back:{
        backgroundColor:'#ffffff',
       width:140,
       height:96
    },
    statuspic:{
        
        width:56,
        height:56,
        marginTop:6,
        marginLeft:48
    },
    home:{
        color:'#818181',
        fontSize:18,
        marginLeft:52
    },
    mybook:{
        color:'#818181',
        fontSize:18,
        marginLeft:42
    },
    favorite:{
        color:'#818181',
        fontSize:18,
        marginLeft:42
    }

    
    
});
    export default Buttom;