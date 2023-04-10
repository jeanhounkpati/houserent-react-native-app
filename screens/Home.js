import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import {images,icons, FONTS, COLORS} from '../constants'


const categories=[
    {
        id:1,
        name:"Room",
        icon:icons.chambre
    },
    {
        id:2,
        name:"House",
        icon:icons.maison
    },
    {
        id:3,
        name:"building",
        icon:icons.batiment
    },
    ];



    const List=[
        {
            id:1,
            name:"Room1",
            image:images.room1,
            area:"Agbalepedo",
            surface:800,
            price:1000,
            type:"common room"

        },
        {
            id:2,
            name:"Room2",
            image:images.room2,
            area:"Totsi",
            surface:800,
            price:1000,
            type:"space room"
        },
        {
            id:3,
            name:"Room3",
            image:images.room3,
            area:"Tokoin",
            surface:800,
            price:1000,
            type:"free room"
        },
        {
            id:4,
            name:"Room4",
            image:images.room4,
            area:"Agoe",
            surface:800,
            price:1000,
            type:"share room"
        },
        {
            id:5,
            name:"Room5",
            image:images.room5,
            area:"Atikoume",
            surface:800,
            price:1000,
            type:"three rooms"
        },
        {
            id:6,
            name:"Room6",
            image:images.room6,
            area:"Adidogome",
            surface:800,
            price:1000,
            type:"one room"
        },
        ];



const Home = ({navigation}) => {

    function renderHeader(){
        return(
    
            <View 
            style = {{
                display:'flex',
                flexDirection:'row',
                width: '100%',
                height: 60,
                marginBottom:30,
                alignItems: 'center',
                justifyContent:'space-between'
                
            }}
            >
                <View style={{display:'flex',
                flexDirection:'row',alignItems: 'center',padding:10}}>
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                padding:20
                                
                            }}
                        />
                        <Text style={{                          
                            ...FONTS.body2
                            }}>Lome</Text>

                </View>
                        
    
    
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                
                            }}
                        />
                
    
            </View>
            
    
        )
    }
    function renderFooter(){
        return(
            <TouchableOpacity
            style={{position:'absolute',bottom:0,right:0}}				
            onPress={()=>navigation.navigate("AddCategories")}
            >
            <Icon name="add-circle-sharp" size={60} />   
            </TouchableOpacity>
             )
        }
    
    function renderSearchBar(){
        return(
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:20}}>
                     <View style={{flexDirection:'row',alignItems:'center', width:'80%',backgroundColor:"gainsboro",borderRadius:20}}>
                        <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            paddingRight:60,
        
            
                            
                        }}

                        />
                        <TextInput
                            placeholder='search your house '
                            style={{ height:50}}
                    />


                    </View>

                    <Image
                        source={icons.filter}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />


            </View>
           
            
    
        )
    }

    function renderMainCategories(){
        const renderItem=({item})=>{
            return(
                <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',width:120,height:50,backgroundColor:'lightblue',margin:20,borderRadius:20}}>
                    <View style={{margin:10}}>
                        <Image
                        source={item.icon}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height:30,
            
                        }}
                        />
                        
                    </View>
                    <Text>{item.name}</Text>
                    
                </TouchableOpacity>
            )
        }
        return(
            <View>
                <Text style={{fontSize:25}}>Main categories</Text>
                <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item =>`${item.id}`}
                renderItem={renderItem}
                />
            </View>


        )

       
    }

    function renderList(){

        const renderRoom=({item})=>{
            return(
                <TouchableOpacity style={{ width:230,height:250, flexDirection:'column',alignItems:'center',margin:20,borderRadius:20,backgroundColor:'gainsboro'}}>
                    <View style={{margin:10}}>
                        <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{
                            width:200,
                            height:150,   
                        }}
                        />
                        
                    </View>
                    <View style={{ width:220,height:100,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                        <Text style={{...FONTS.body2,color:COLORS.primary}}>{item.name}</Text>
                        <Text>{item.area}-Togo</Text>
                        <Text>{item.surface}m^2 |{item.price}</Text>
            

                    </View>                   
                </TouchableOpacity>
            )
        }
        return(

            <View>
            <Text style={{fontSize:25}}>Nearby Places</Text>
            <FlatList
            data={List}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item =>`${item.id}`}
            renderItem={renderRoom}
            />
            </View>

        )
    }


function PopularPlace(){
    return(
        <Text style={{fontSize:25}}>Popular Places</Text>
    )
}
    return (
        <SafeAreaView>
        {renderHeader()}
        {renderSearchBar()}
        {renderMainCategories()}
        {renderList()}
        {PopularPlace()}
        {renderFooter()}
    </SafeAreaView>
       
            

    )
}


export default Home;


// style={{
            //     display:'flex',
            //     flexDirection:'row',
            //     justifyContent:'space-between',
            //     width: '100%',

            //     height:40,
            // }}