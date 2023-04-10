import React from 'react';
import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button} from 'react-native';
import images from '../Components/Constants/images';

const Adminlogin = ({navigation})=>{
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
					<Text style = {{fontSize:50,padding:20}}>AdminLogin</Text>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='Email'
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
							placeholder='Password'
							underlinedColorAndroid = 'transparent' style = {{
							height:40,
							borderColor : 'gray',
							borderWidth:1,
							paddingHorizontal:10,
							borderRadius : 20
					}}
					/>
				</View>
				<View  style={{backgroundColor:'pink'}}>
					<Button title='submit'
					/>
				</View>


			</View>
				
		)
	}
export default Adminlogin;