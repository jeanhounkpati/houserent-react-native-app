import * as firebase from 'firebase';
import {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import { View,Text,Button} from 'react-native';
import 'firebase/firestore';
import 'firebase/storage';

const EditProduct=({route,navigation})=>{
    const [name,setName] = useState(route.params.name);
    const [description,setDescription] = useState(route.params.description);
    const [image,setImage] = useState(route.params.images);
    const [categories,setCategories] = useState(route.params.categories);
    
    const handleChooseImage=()=>{
        const options={
            noData:true,
        };

        ImagePicker.launchImageLibrary(options,response=>{
            if(response.uri){
                setImage(response.uri);
            }
        });
    };

    const handleupdateProduct = async()=>{
        const db =firebase.firestore();
        const storage = firebase.storage();
        const imageRef = storage.ref().child('images/${Date.now()}');

        if(image!= route.params.image){
            const response = await fetch(image);
            const blob = await response.blob();
            await imageRef.push(blob);
            const url = await imageRef.getDownloadURL();
            setImage(url);
        }
        db.collection('products').doc(route.params.id).update({
            name,description,categories,image
        })
        .then(()=>{
            console.log('product updatad successfully!');
            navigation.goBack();
        })
        .catch(error=>{
            console.error('Error updatingproduct:',error);
        });
    };

    return(
        <View>
            <Text>product name:</Text>
           <TextInput value={name} onChangeText={setName}/>

           <Text>product description:</Text>
           <TextInput value={description} onChangeText={setDescription}/>

           <Text>product categories:</Text>
           <TextInput value={categories} onChangeText={setCategories}/>
           
           <Text>product image:</Text>
           <Button title = 'choose image' onPress={handleChooseImage}/>
            {image && <Image source={{uri:image}} style={{width:200,height:200}}/>}
            <Button title='update Product' onPress={handleupdateProduct}/>
        </View>

    );
};

export default EditProduct;
