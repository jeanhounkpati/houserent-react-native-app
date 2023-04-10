import React,{useState,Component} from 'react';
import PropTypes from 'prop-types';
import {Text,View,Image,StyleSheet,TextInput,ImageBackground,FlatList,TouchableOpacity,Button} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import icons from '../Components/Constants/icons';
import images from '../Components/Constants/images';
import {addFoodPlat} from '../FoodController'
// import ImagePicker from 'react-native-image-crop-picker'




// import { MultiSelect,Dropdown} from 'react-naelementtive--dropdown';
//import Multiselect from 'multiselect-react-dropdown';
// import images from '../Components/Constants/images';
// import Home from '../Pages/Home';
// import { withRouter } from 'react-router'




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

	
const AddRestaurantInfo = ({navigation})=>{

const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];

class MultiSelectExample extends Component {

    static propTypes = {
        router: PropTypes.object
      }

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        {/* <View>
          {this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View> */}
      </View>
    );
  }
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
					<Text style = {{fontSize:50,padding:20}}>Add Restaurant</Text>
				</View>


				<View style={{
					flexDirection:"row",
					marginHorizontal:55,
					opacity:0.4,
					marginTop : 5
				}}
				>
					<TextInput
						placeholder='RestaurantName'
                        // value={name}
                        // onChangeText = {text=>setName(text)}
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
						placeholder='Categories'
                        // value={link}
                        // onChangeText = {text=>setLink(text)}
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
				{/* {MultiSelectExample()} */}

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
							placeholder='Duration'
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
						placeholder='Pictures'
						underlinedColorAndroid = 'transparent' style = {{
						height:40,
						borderColor : 'gray',
						borderWidth:1,
						paddingHorizontal:10,
						borderRadius : 20
					}}
					/>
				</View>

				

                <TouchableOpacity onPress={() =>addFoodPlat()}>
                        <View style={{
                            width:50,
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
export default AddRestaurantInfo;