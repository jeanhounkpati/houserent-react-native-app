import '@firebase/firestore';
import { View,Text,Button} from 'react-native';
import 'firebase/firestore';
import 'firebase/storage';

const delecteProduct = async(productId,imageName)=>{
    // Delete the product in firestore
    await firebase.firestore().collection('products').doc(productId).delete();
    // Delete the product image in cloud storage
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('images/${imageName}');
    await imageRef.delete();

}

const ProductDetailsScreen = ({route})=>{
    const {productId,productName,productImage} = route.params;
    const handleDelectProduct = async()=>{
        await delecteProduct(productId,productImage);
        // redirect the user
    }

    return(
        <View>
            <Text>{productName}</Text>
            <Button title='supprimer le produit' onPress={handleDelectProduct}/>
        </View>
    );
};
export default ProductDetailsScreen;