import React,{useState,useEffect} from "react";
import { getFoodPlat} from "../FoodController";
import ListItem from './ListItem'


// classpath 'com.google.gms:google-services:4.3.15'
// apply plugin: 'com.google.gms.google-services'




import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView,Animated,FlatList} from 'react-native';
// import Animated from 'react-native-reanimated';
import icons from '../Components/Constants/icons';
import Home from './Home'
import CheckoutForm from './CheckoutForm'


const index=({route,navigation})=>{
    const [foodList,setFoodList] = useState()

    useEffect(()=>{
        getData()
    })
    function getData(){
        getFoodPlat(foodRetrieved)

    }
    function foodRetrieved(foodList){
        setFoodList(foodList)
    }


// return(
//     <View style = {styles.content}>
//         <FlatList style = {styles.flatList}
//         data = {foodList}
//         keyExtractor = {(item)=>item.id}
//         renderItem = {({item})=>
//         <ListItem 
//         item = {item}
//         onPress={()=> navigation.navigate("UpdateDelete", {foodPlat : item})}
//         // onPress = {()=>Navigation.navigate()} 
//         />       
//         }
//         />
//     </View>
// )
// }
// const styles = StyleSheet.create({
//     imageView:{
//         alignItems:'center',
//         padding:20
//     },
//     image:{
//         height:200,
//         width:300,
//         borderWidth:2,
//         borderRadius:25
//     },
//     flatList:{
//         backgroundColor:'white',
//         height:"80%",
//         paddingTop:10,
//         paddingBottom:10,
//         paddingLeft:20,
//         paddingRight:20,
//         marginBottom:40,
//         borderWidth:20,
//         borderRadius:20,
//         margin:5
//     },
//     content:{
//         paddingTop:30,
//         backgroundColor:"orange"
//     }
// })









// const Restaurant = ({route,navigation})=> {
	const [restaurant,setRestaurant] = React.useState(null);
	const [orderItems, setOrderItems] = React.useState([]);

	const [currentLocation,setCurrentLocation] = React.useState(null);

	React.useEffect(()=>{
		let item = route.params;
		setRestaurant(item)
		setCurrentLocation(currentLocation)

	})

	
	function editOrder(action, menuId, price) {
		
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: item.id, 
                    qty: 1,
                    price: item.price,
                    total: item.price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total
    }


	function renderHeader(){
			return (
				<View>
					<View style = {{ flexDirection:'row'}}>
						<TouchableOpacity style = {{
								width:50,
								paddingLeft:20,
								justifyContent : 'center'
							}}
							onPress={()=>navigation.goBack()}

						>
							<Image
								source={icons.arrow}
								resizeMode = 'contain'
								style = {{
									width:30,
									height:30
								}}
							/>
	
						</TouchableOpacity>
	
						<View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
							<View
								style = {{
									width : '70%',
									height:'100%',
									alignItems : 'center',
									justifyContent : 'center',
									borderRadius : 20,
									backgroundColor:'lightgray'
									

								}}
							>
								<Text style = {{fontSize:20}}>hhhhh</Text>
							</View>
						</View>
						<TouchableOpacity style = {{
								width : 50,
								paddingLeft  : 20,
								justifyContent : 'center'
							}}
						>
							<Image
								source={icons.justifier}
								resizeMode = 'contain'
								style = {{
									width : 30,
									height:30
								}}
							/>
	
						</TouchableOpacity>
					</View>
				</View>		
		)
	}


	function renderFoodInfo(){
        const renderItem = ({item})=>(
       <View style ={{ height:250}}>


        									<Image
        									source = {{uri:item.link}}
        									resizeMode = 'cover'
        									style = {{
        										width:500,
        										height:'100%'
        									}}
                                            
        									/>	



											<View style = {{
								position:'absolute',
								bottom:-20,
								width:500,
								height:50,
								justifyContent:'center',
								flexDirection:'row'
							}}
							>
									<TouchableOpacity
									style={{
										width:30,
										backgroundColor:'white',
										justifyContent:'center',
										borderTopLeftRadius:20,
										borderBottomLeftRadius:20
									}}
									onPress={() => editOrder("-", item.menuId, item.price)}

									>
										<Text style={{fontSize:25}}>-</Text>
									</TouchableOpacity>
										<View style = {{
											width:40,
											backgroundColor:'white',
											alignItems:'center',
											justifyContent:'center'

										}}
										>
											<Text style={{fontSize:20}}>{getOrderQty(item.menuId)}</Text>
										</View>
										<TouchableOpacity style={{
											width:30,
											backgroundColor:'white',
											alignItems:'center',
											justifyContent:'center',
											borderTopRightRadius:20,
											borderBottomRightRadius:20
											
										}}
										onPress={() => editOrder("+", item.menuId, item.price)}

										>
											<Text style = {{fontSize:25}}>+</Text>
										</TouchableOpacity>
							</View>														
        													
        							<View style = {{
        								width:500,
        								alignItems:'center',
        								marginTop:15,
        								paddingHorizontal:10
        
        							}}
        							>
        								<Text style={{
        									marginVertical:5,
        									textAlign:'center',
        									fontSize:20,
                                        
        									}}
        									>
        									{item.name} - {item.price}
        								</Text>
        								<Text
        								style={{
        									fontSize:10
        								}}
        								>
        									{item.description}
        								</Text>
        
        							</View>
        							<View styles={{
        								flexDirection:'row',
        								marginTop:10
        							}}
        							>
        								<Image
        								source={icons.fire}
        								style={{
        									width:20,
        									height:20,
        									marginRight:10 
        								}}
        								/>
        								<Text style = {{fontSize:10,color:'green'}}>{item.calories}cal</Text>
        
        							</View>
        								</View>
    )
		return(
			
				<Animated.FlatList
				horizontal
				pagingEnabled
				ScrollEventThrottle={1}
				snapToAlignment = 'center'
                data = {foodList}
                keyExtractor = {(item)=>item.id}
                renderItem = {renderItem}
				showsHorizontalScrollIndicator  = {false}
				// onScroll
				>
				</Animated.FlatList>



		)
	}

	function renderOrder(){
		return(
			<view>
				{/* {
				renderDots()
				} */}
				<View style={{
					backgroundColor:'white',
					borderTopLeftRadius:40,
					borderTopRightRadius:40,
				}}
				>
					<View style ={{
						flexDirection:'row',
						justifyContent:'space-between',
						paddingVertical:10,
						paddingHorizontal:10,
						borderBottomColor:'blue',
						borderBottomWidth:1

					}}
					>
						<Text style={{fontSize:20}}>{getBasketItemCount()}items in Cart</Text>
						<Text style={{fontSize:20}}>${sumOrder()}</Text>						 
					</View>

					<View style={{
						flexDirection:'row',
						justifyContent:'space-between',
						paddingVertical:10,
						paddingHorizontal:10
					}}
					>
						<View style={{flexDirection:'row'}}
						>

							<Image
							source={icons.pin}
							resizeMode='contain'
							style={{
								width:20,
								height:20,
								tincolor:'green'
							}}
							/>
							<Text style={{marginLeft:10,fontSize:20}}>Location</Text>
						</View>
						<TouchableOpacity style={{flexDirection:'row'}}
						onPress={()=>navigation.navigate("MyCart")}						
						>
							<Image
							source={icons.bag}
							resizeMode='contain'
							style={{
								width:20,
								height:20,
								tincolor:'black'
							}}
							/>
							<Text style={{marginLeft:20}}>8888</Text>
						</TouchableOpacity>
					</View>
					<View style={{
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

					</View>

				</View>
			</view>
		)
	}

	
return(
	<SafeAreaView style={styles.container} >
	{renderHeader()}
	{renderFoodInfo()} 
	{renderOrder()} 
	</SafeAreaView>
	

)
}


const styles = StyleSheet.create({
	container: { 
	  flex: 1,
	  backgroundColor:'white',
	},
  });

 export default index;






