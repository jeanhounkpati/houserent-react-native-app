import React from 'react';
import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button} from 'react-native';
import images from '../Components/Constants/images';
import {useRef,useState} from 'react';
import Home from '../Pages/Home';


import ImagePicker from 'react-native-image-crop-picker'
import {addFoodPlat} from '../FoodController'

// import FoodController



const takePhotoFromCamera=()=>{

ImagePicker.openPicker({
	width:300,
	height:400,
	cropping:true,
}).then(image =>{
	console.log(image)
});
}

 const choosePhotoFromLibrary=()=>{
	ImagePicker.openPicker({
		width:300,
		height:400,
		cropping:true,
	}).then(image =>{
		console.log(image)
	});
}




const Platcreate = ({navigation})=>{
    const [name,setName] = useState("")
    const [link,setLink] = useState("")
	const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
	const [calories,setCalories] = useState("")


    function addFood(){

        var foodPlat = {
            "name":name,
            "link":link,
			'description':description,
			'price':price,
			'calories':calories
    
        }
        addFoodPlat(foodPlat,addComplete)
    }

    function addComplete(){
        navigation.navigate("index")
		console.log("suuces")
    }



        return(
			<View style ={{flex:1}}>			
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
					<Text style = {{fontSize:50}}>Platcreate</Text>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
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


				<TouchableOpacity onPress={() =>addFood()}>
                        <View style={{
                            width:50,
                            paddingLeft:20,
                            justifyContent : 'center'
                        }}
                        >
                            <Text>submit</Text>
                        
                        </View>
	

					</TouchableOpacity>


				<View  style={{backgroundColor:'pink'}}>
					<Button title='camera'
					onPress = {takePhotoFromCamera}
					/>
				</View>

				<View  style={{backgroundColor:'pink'}}>
					<Button title='library'
					onPress = {choosePhotoFromLibrary}
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

              
				

				



			</View>
			</View>
				
		)
	}
export default Platcreate;