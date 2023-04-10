import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Animated
} from "react-native";
import Home from './Home';


import {images,icons, SIZES} from '../constants'


const onboarding=[
{
    title:"let's go inside",
    description:"I'm going to do it right for all of us.Be proud of yourself ",
    img:icons.room
},
{
    title:"let's Travelling",
    description:"Lorem ipsum dolor ",
    img:icons.house
},
{
    title:"let's do it seriously",
    description:"I'm the honest person never exists ",
    img:icons.building
},
];



const Onboarding = ({navigation}) => {

function renderContent(){
    return(

            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment='center'
            >
            {onboarding.map((item,index)=>(
                <View
                    key={index}
                    style={{width:SIZES.width}}
                    > 
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image
                                    source={item.img}
                                    resizeMode="cover"
                                    style={{
                                        width:300,
                                        height:300,
                                        
                                    }}
                        />

                    </View> 
                    <View style={{
                        position:'absolute',
                        bottom:'10%',
                        left:40,
                        right:40,
                        }}>
                        <Text
                         style={{
                            fontSize:25,                  
                            color:'black',
                            textAlign:'center',
                            }}
                            >
                                {item.title}
                        </Text>
                        <Text
                         style={{
                            fontSize:15,                  
                            color:'black',
                            textAlign:'center',
                            }}
                        
                        >
                            {item.description}
                        </Text>
                    </View>
                    <TouchableOpacity
                    style={{
                        backgroundColor:'blue',
                        position:'absolute',
                        bottom:0,
                        right:0,
                        width:150,
                        height:60,
                        justifyContent:'center',
                        borderTopLeftRadius:30,
                        borderBottomLeftRadius:30
                    }}
                    onPress={()=>navigation.navigate("Home")}
                    >
                        <Text style={{fontSize:25,color:'white',textAlign:'center'}}>Skip</Text>

                    </TouchableOpacity>
                
                    
                </View>

            ))
            }

        </Animated.ScrollView>
    )  
}

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}

        </SafeAreaView>
       
            

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})


export default Onboarding;




 
