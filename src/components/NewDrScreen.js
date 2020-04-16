import React from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

const NewDrScreen = () => {
  return (
    <View style={styles.header}>
        <View style={styles.intro}>
            <Image source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/6FA2E86D-64B3-4F7D-8CA4-9C5F444C0A1B.png"}}
             style={styles.accounticon}
            ></Image>
            <Text style={styles.account}>GamexHCI</Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.mail}>gdlab2017@gmail.com</Text>
            <Image source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/076B92EC-4D67-4177-8360-D8BD5F7FA132.svg"}}
            style={styles.downarrow}></Image>
            </View>
        </View>
        <View style={styles.list}>
          <View style={styles.buttons}>
            <Image 
            source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/D5144D1B-B736-45A5-BD7F-F3475D3B3C01.svg"}}
            style={styles.icons}/>
            <Text style={styles.titles}>Home</Text>
          </View>
          <View style={styles.buttons}>
            <Image 
            source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/D5144D1B-B736-45A5-BD7F-F3475D3B3C01.svg"}}
            style={styles.icons}/>
            <Text style={styles.titles}>My Book</Text>
          </View>  
          <View style={styles.buttons}>  
            <Image 
            source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/102DA321-8C67-48E2-B8C2-047079FD62B7.svg"}}
            style={styles.icons}/>
            <Text style={styles.titles}>Favorites</Text>
          </View>  
          <View style={styles.buttons}>    
            <Image
            source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/011F5276-244D-43EA-8A88-E6345F75D035.svg"}}
            style={styles.icons}/>
            <Text style={styles.titles}>Settings</Text>
          </View>  
          <View style={styles.buttons}>  
            <Image 
            source={{uri:"https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/5FBC7273-0DA6-4AD6-BCD5-A3C1D11352FD.svg"}}
            style={styles.icons}/>
            <Text style={styles.titles}>About us</Text>
          </View>  
        </View>
      </View>
  );
}

export default NewDrScreen;

const styles = StyleSheet.create({
  intro:{
    backgroundColor:"#00b49f",
    width:304,
    height:168
  },
  accounticon:{
    width:70,
    height:70,
    marginTop:37,
    marginLeft:13,
  },
  account:{
    color:"#ffffff",
    marginLeft:16,
    marginTop:10,
    fontSize:14,
    lineHeight:15,
    fontWeight:"bold",
  },
  mail:{
    color:"#ffffff",
    marginTop:5,
    marginLeft:16,
    fontSize:14,
    lineHeight:15,
    width:230,
    marginBottom:16,
  },
  downarrow:{
    width:24,
    height:24,
    marginLeft:18,
    marginTop:-13.7,
  },
  list:{
    backgroundColor:"#ebebeb",
    width:304,
    height:524,
    paddingTop:8,
  },
  buttons:{
    flexDirection:"row",
  },
  icons:{
    width:24,
    height:24,
    marginLeft:24,
    marginTop:15,
    marginRight:32,
    marginBottom:15,
  },
  titles:{
    fontSize:14,
    color:"#5c5c5c",
    lineHeight:20,
    marginTop:18,
  },
});