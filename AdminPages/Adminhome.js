import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyCart=() =>{
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title numeric>qte</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>

        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>pizza</DataTable.Cell>
          <DataTable.Cell>145</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Burger</DataTable.Cell>
          <DataTable.Cell>185</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>105</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>snack</DataTable.Cell>
          <DataTable.Cell>175</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
        </DataTable.Row>
        <TouchableOpacity style={{
            marginTop:10,
            backgroundColor:'orange',
            borderRadius:20
        }}
        >
            <Text style={{fontSize:30,textAlign:'center'}}>Ckeckout</Text>
        </TouchableOpacity>

      </DataTable>

                {/* <View style={{
						padding:10,
						alignItems:'center',
						justifyContent:'center'
					}}
					>
						<TouchableOpacity
						style={{
							width:400,
							padding:10,
							backgroundColor:'orange',
							alignItems:'center',
							borderRadius:15

						}}
						onPress={()=>navigation.navigate("CheckoutForm")}
						

						>
							<Text style={{color:'white',fontSize:20}}>Order</Text>

						</TouchableOpacity>

					</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});

export default MyCart;




// const ListItem = props=>{
//   const content = (
//       <View style = {styles.content} >
//           <View style={styles.textView}>
//               <Text>{props.item.name}</Text>
//           </View>
//           <View>
//               <Text>{props.item.description}</Text>
//           </View>
//           <View style = {styles.imageView}>
//               <Image 
//               source={{uri:props.item.link}}
//               style={styles.image}
//               resizeMode="stretch"
//               />
//           </View>   

//       </View>
//   )
//   return <TouchableOpacity onPress = {props.onPress}>{content}</TouchableOpacity>
// };