import React from 'react';
import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button,Alert} from 'react-native';
import images from '../Components/Constants/images';
import {useRef,useState} from 'react';
import Home from '../Pages/Home';
import ImagePicker from 'react-native-image-crop-picker'
import {updateFoodPlat, deleteFoodPlat} from '../FoodController'


// takePhotoFromCamera=()=>{

// ImagePicker.openCamera({
// 	width:300,
// 	height:400,
// 	cropping:true,
// }).then(image =>{
// 	console.log(image)
// });
// }

// choosePhotoFromLibrary=()=>{
// 	ImagePicker.openPicker({
// 		width:300,
// 		height:400,
// 		cropping:true,
// 	}).then(image =>{
// 		console.log(image)
// 	});
// }




export default function FoodList({route,navigation}){
    const [name,setName] = useState("")
    const [link,setLink] = useState("")
	const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
	const [calories,setCalories] = useState("")



 function peachPressed(){
        const food = {
            "id" : route.params.foodPlat.id,
            "name":name,
            "link":link,
	 		'description':description,
	 		'price':price,
			'calories':calories
        }

        updateFoodPlat(food, updateComplete)
    }

    function updateComplete(){
        navigation.navigate("Home")
        console.log("suuces")
    }


    // function deletePressed(){
    //     Alert.alert("are you sure")
    // }


    function deletePressed(){
        Alert.alert("Are you sure", "You will lose the data", [{text : "Cancel", onPress : () => console.log("delete canceled")},{text : "OK",onPress: () => {deleteFoodPlat(route.params.foodPlat, deleteComplete)}}])

   }

    function deleteComplete(){
        navigation.navigate("Home")
    } 


        return(
            <View style = {{ 
                flex:1,justifyContent:'center',
                alignItems:'center'
            }}
            >
				<Image
				source = {images.fond}
				resizeMode = 'cover'
							style = {{
								width : '100%',
								height:200
							}}
				/>

				
				<View>
					<Text style = {{fontSize:50,padding:20}}>Update && Delete</Text>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
                <Text>{route.params.foodPlat.name}</Text>
                		<TextInput
						placeholder='Name'
                        value={name}
                        onChangeText = {text=>setName(text)}

						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>

                <View>
                    <Image source={{uri : route.params.foodPlat.link}} resizeMode="stretch"/>
                </View>



                
				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='Link'
                        value={link}
                        onChangeText = {text=>setLink(text)}
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>




				<View style = {{

					flexDirection:"row",
					marginTop : 5,
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
					}}
					>
					<TextInput 
							placeholder='Description'
							value={description}
							onChangeText = {text=>setDescription(text)}
							underlinedColorAndroid = 'transparent' style = {{
							height:40,
							borderColor : 'gray',
							borderWidth:1,
							paddingHorizontal:10,
							borderRadius : 20
					}}
					/>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='Price'
						value={price}
                        onChangeText = {text=>setPrice(text)}
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>

				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='calories'
						value={calories}
                        onChangeText = {text=>setCalories(text)}
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>


                {/* <View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='image'
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>  */}

                <TouchableOpacity onPress={() =>peachPressed()}>
                        <View style={{
                            width:50,
                            paddingLeft:20,
                            justifyContent : 'center'
                        }}
                        >
                            <Text>Update</Text>
                        
                        </View>
	

					</TouchableOpacity>

                
                 <TouchableOpacity onPress={() =>deletePressed()}>
                        <View style={{
                            width:50,
                            paddingLeft:20,
                            justifyContent : 'center'
                        }}
                        >
                            <Text>Delete</Text>
                        
                        </View>
	

					</TouchableOpacity>
				

				{/* <View  style={{backgroundColor:'pink'}}>
					<Button title='submit'
					onPress = {takePhotoFromCamera}
					/>
				</View>

				<View  style={{backgroundColor:'pink'}}>
					<Button title='submit'
					onPress = {choosePhotoFromLibrary}
					/>
				</View> */}



			</View>
				
		)
	}
