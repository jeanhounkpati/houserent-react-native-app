import React from 'react';
import {useRef,useState} from 'react';
import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button,Alert} from 'react-native';
import images from '../Components/Constants/images';
import firebase from '../firebase'

// import {useAuth} from '../Contexts/AuthContext';
// import { withFirebase } from 'react-redux-firebase';
// import {AuthProvider} from '../Contexts/AuthContext';
// import {Link,useHistory} from "react-router-dom"



const Signup=({navigation})=>{
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [error,setError] = useState('');
	const [passwordConfirm, setpasswordConfirm] = useState('');
	// const signup = useAuth()
	// const [isLoading,setisLoading] = useState(false)


	const registerUser = async()=>{
		if(email && password && passwordConfirm)
			if (password === passwordConfirm)
			{
				try{
					firebase.auth().createUserWithEmailAndPassword(email,password);
					navigation.navigate("Home")
				}catch(err){
					setError(err.message)
				}
			}
			else setError("password doesn't not match");
		else setError("please fill the form correctly");

	}
// const registerUser = ()=>{
// 	if(email && password && passwordConfirm)
	
// 		if (password === passwordConfirm)
// 		{
// 			setisLoading("true");
// 			firebase.auth().CreateUserWithEmailAndPassword(email,password)
			
// 		}
// 		else alert("password doesn't not match");
// 	else alert("please fill the form correctly");
		
// 	};

		return (
			
			
<View style = {{ flex:1,justifyContent:'center',
			alignItems:'center'
			}}>
				<Image
				source = {images.fond}
				resizeMode = 'cover'
							style = {{
								width : '100%',
								height:300
							}}
				/>

				
				<View>
					<Text style = {{fontSize:50,padding:20}}>Register</Text>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					
					<TextInput
						label = "Email"
						value = {email}
						onChangeText = {setEmail}
					// 	placeholder='Email'
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
						label = 'Password'
						value = {password}
						onChangeText = {setPassword}
					// 		placeholder='Password'
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
						label = 'Passwordconfirm'
						value = {passwordConfirm}
						onChangeText = {setpasswordConfirm}
					// 	placeholder='Password confirmation'
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>
				{
					error?
					<Text style={{color:'red'}}>
						{error}
					</Text>:null
				}

					<Button 
						title = 'submit'
						style={{
								width:50,
								paddingLeft:20,
								justifyContent : 'center'
							}}
							onPress={() => registerUser()}
								>

					</Button>

				<View>
					<Text style = {{fontSize:20,padding:20}}>Already a member</Text>
				</View>

				<View style={{flexDirection:'row',margin:20}}>
					<TouchableOpacity onPress={()=>navigation.Login()}> Have already an account | </TouchableOpacity>
					<TouchableOpacity>Login</TouchableOpacity>
				</View>

			
			</View>
				
		)
	
}

export default Signup;



