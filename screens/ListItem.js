import React,{useState,useEffect} from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity,FlatList } from "react-native";

const ListItem = props=>{
    const content = (
        <View style = {styles.content} >
            <View style={styles.textView}>
                <Text>{props.item.name}</Text>
            </View>
            <View>
                <Text>{props.item.description}</Text>
            </View>
            <View style = {styles.imageView}>
                <Image 
                source={{uri:props.item.link}}
                style={styles.image}
                resizeMode="stretch"
                />
            </View>

        </View>
    )
    return <TouchableOpacity onPress = {props.onPress}>{content}</TouchableOpacity>
};

const styles= StyleSheet.create({
    content:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'orange',
    },
    textView:{
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        color:"white"
    },
    image:{
        height:100,
        width:125,
        borderWidth:2,
        borderRadius:30
    }
});
export default ListItem;