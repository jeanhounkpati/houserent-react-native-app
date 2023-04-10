import React from 'react';
// import * as firebase from 'firebase';
import {useState} from 'react';
import { View,Text,Button,TextInput} from 'react-native';
// import 'firebase/firestore';
// import 'firebase/storage';
import ImagePicker from 'react-native-image-picker';


import { Platform, PermissionsAndroid } from 'react-native'; // import Platform and PermissionsAndroid instead of expo-permissions

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const AddCategories = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    // check if 'name' and 'description' fields are typed
    if (name.trim() === '' || description.trim() === '') {
      alert('Name and Description are required');
      return;
    }

    // ask the autorisations to use the camera et the stockage
    if (Platform.OS === 'android') {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      const cameraRollPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        cameraRollPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        alert('Permissions denied');
        return;
      }
    }

    // if the autorisations are granted
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // open image selector
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      // if a file is chosen
      if (!result.cancelled) {
        // get the details of the image
        const { name } = result;
        const image = {
          uri: result.uri,
          type: 'image/png',
          name,
        };
        // update the state of the image
        setImage(image);
        // stock the image in the cloud storage
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${name}`); // use backticks instead of quotes
        const uploadTask = imageRef.put(image);
        // follow the progression of the upload
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('upload is' + progress + '% done');
          },
          (error) => {
            console.log(error);
          },
          () => {
            // get the url of the image once upload terminate
            imageRef.getDownloadURL().then((url) => {
              // insert data in firestore
              firebase.firestore().collection('categories').add({
                name: name,
                description: description,
                image: url,
              });
            });
          }
        );
      }
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Image"
        value={image}
        onChangeText={(text) => setImage(text)}
      />

      <Button title="add Category" onPress={handleSubmit} />
    </View>
  );
};

export default AddCategories;
