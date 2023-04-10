// import * as firebase from 'firebase';
import '@firebase/firestore';
// import {ImagePicker,Permissions} from 'expo';
import {useState} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddProducts=()=>{
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');

    const handleSubmit=async()=>{
        // check if 'name' and 'description' fields are typed
        if(name.trim()===''|| description.trim()===''){
            alert('Name and Description are required');
            return;
        }
        // ask the autorisations to use the camera et the stockage
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        // if the autorisations are granted
        if (cameraPermission.status ==='granted' && cameraRollPermission.status ==='granted'){
            // open image selector
            let result = await ImagePicker.LaunchImageLibraryAsync({ 
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
        });

        // if a file is chosen
        if(!result.cancelled){
            // get the details of the image
            const {name} = result;
            const image={
                uri:result.uri,
                type:'image/jpeg',
                name,
            };
            // update the state of the image
            setImage(image);
            // stock the image in the cloud storage
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child('images/${name}');
            const uploadTask = imageRef.put(image);
            // follow the progression of the upload
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot=>{
                    const progress =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    console.log('upload is' + progress + '% done');
                },
                error=>{
                    console.log(error);
                },
                ()=>{
                    // get the url of the image once upload terminate
                    imageRef.getDownloadURL().then(url=>{
                        // insert data in firestore
                        firebase.firestore().collection('categories').add({
                            name:name,
                            description:description,
                            image:url,
                        });
                    });
                }
                
                );


        }
        }

    };
    return(
        <View>
           <TextInput 
            placeholder='Name'
            value={name}
            onChangeText={text=>setName(text)}
            />
            <TextInput 
            placeholder='Description'
            value={description}
            onChangeText={text=>setDescription(text)}
            />
            <TextInput 
            placeholder='Image'
            value={image}
            onChangeText={text=>setImage(text)}
            />
        </View>

    );

}
export default AddProducts;