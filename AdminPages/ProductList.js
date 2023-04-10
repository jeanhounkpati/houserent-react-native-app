import * as firebase from 'firebase';
import '@firebase/firestore';
import {ImagePicker,Permissions} from 'expo';
import {useState,useEffect} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ProductsList=()=>{
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        const unsubscribe = firebase.firestore().collection('products').onSnapshot(snapshot=>{
            const newProducts = snapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()

            }));
            setProducts(newProducts)
        });

        const unsubscribeCategories = firebase.firestore().collection('categories').onSnapshot(snapshot=>{
            const newCategories = snapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()

            }));
            setCategories(newCategories)
        });

        return()=>{
            unsubscribe();
            unsubscribeCategories();
        }

    },[]);

    return(
        <View>
            {categories.map(category=>(
                <View key={category.id}>
                    <Text>{category.name}</Text>
                    {products.filter(product=>product.categories.includes(category.id)).map(product=>(
                        <View key={product.id}>
                            <Text>{product.name}</Text>
                            <Text>{product.description}</Text>
                            <Image
                            source={{uri:product.image}}
                            style={{width:100,height:100}}
                            />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};