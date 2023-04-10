import React from 'react';
import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button} from 'react-native';
import images from '../Components/Constants/images';
import {useRef,useState} from 'react';
import {addCustomerForm} from '../FoodController'


const CheckoutForm = ({navigation})=>{

	const [name,setName] = useState("")
    const [prenoms,setPrenoms] = useState("")
    const [adresse,setAdresse] = useState("")
	const [numero,setNumero] = useState("")

	function addCustomer(){
	var CustomerForm = {
		"name":name,
		"prenoms":prenoms,
		'adresse':adresse,
		'numero':numero

	}
	addCustomerForm(CustomerForm,addComplete)

}
function addComplete(){
	navigation.navigate("index")
	console.log("suuces")
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
					<Text style = {{fontSize:50,padding:20}}>Checkout</Text>
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
						height:50,
						width:150,
						borderColor : 'black',
						borderWidth:2,
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
							placeholder='Prenoms'
							value={prenoms}
							onChangeText = {text=>setPrenoms(text)}
							underlinedColorAndroid = 'transparent' style = {{
							height:40,
							width:150,
							borderColor : 'black',
							borderWidth:2,
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
						placeholder='Adresse'
						value={adresse}
                        onChangeText = {text=>setAdresse(text)}
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						width:150,
						borderColor : 'black',
						borderWidth:2,
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
						placeholder='Numero'
						value={numero}
                        onChangeText = {text=>setNumero(text)}
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						width:150,
						borderColor : 'black',
						borderWidth:5,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>

				<TouchableOpacity onPress={() =>addCustomer()}>
                        <View style={{
        
                            height:40,
	
                            paddingLeft:20,
                            justifyContent : 'center'
                        }}
                        >
                            <Text>submit</Text>
                        
                        </View>
	

					</TouchableOpacity>

			</View>
				
		)
	}
export default CheckoutForm;