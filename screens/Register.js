import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Animated,
    TextInput,
    Button
} from "react-native";
import Home from './Home';


import {images,icons, SIZES} from '../constants'



const Register = () => {

    return (
        <SafeAreaView>
            <View>
                <Text>Register</Text>
                <TextInput
                placeholder='USERNAME'
                />
                <TextInput
                placeholder='EMAIL'
                />
                <TextInput
                placeholder='PASSWORD'
                />

                <Button
                title='submit'>

                </Button>
            </View>
        </SafeAreaView>
       
            

    )
}



export default Register;




 
