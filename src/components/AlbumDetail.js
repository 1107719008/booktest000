import React from "react";
import { StyleSheet, Text, View, Image, Button, Linking} from "react-native";

const AlbumDetail = ({album}) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.url
            }}
          />
          <View style={styles.headerContentStyle}>
            
            
          <Text style={styles.tiStyle}>{album.title}</Text>

          <Text style={styles.subTiContent}>{album.artist}</Text>

          <Text style={styles.textContent}>{album.t3}</Text>
          <View style={styles.pageBarStyle}></View>

          <Text style={styles.loadContent}>{album.t4}</Text>
 
          </View>
        </View>
        
         
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 140,
    width: 93,
    margin: 15,
    marginLeft:18
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    
  },
  tiStyle:{
    marginTop:13,
    fontSize:18,
  },
  pageBarStyle: {
    width: 194,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#70b4a1"
},
  subTiContent:{
    marginTop:-13,
    fontSize:14,
    color:"#717171",
  },
  textContent:{
    marginTop:-13,
    fontSize:12,
    width:194,
    color:"#b1b1b1"
  },
  loadContent:{
    fontSize:12,
    color:"#b1b1b1"
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    height:170,
    
  },

});

export default AlbumDetail;
