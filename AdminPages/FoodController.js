import firebase from './firebase'





export  function addCustomerForm(customer,addComplete){
    firebase
        .firestore()
        .collection("Customers")
        .add(customer)
        .then((snapshot)=>{
            customer.id = snapshot.id
            snapshot.set(customer)
        })
        .then(()=>addComplete(customer))
        .catch((error)=>console.log(error))
}


export  function addFoodPlat(food,addComplete){
    firebase
        .firestore()
        .collection("Foods")
        .add(food)
        .then((snapshot)=>{
            food.id = snapshot.id
            snapshot.set(food)
        })
        .then(()=>addComplete(food))
        .catch((error)=>console.log(error))
}

export async function getFoodPlat(foodsRetrieved){
    var foodList = []
    var snapshot  = await firebase
                                .firestore()
                                .collection("Foods")
                                .orderBy("name")
                                .get()
        snapshot.forEach((doc)=>{
            const foodDoc = doc.data()
            foodDoc.id = doc.id
            foodList.push(foodDoc)
        })
        foodsRetrieved(foodList)
}

export async function updateFoodPlat(food,updateComplete){
    firebase
    .firestore()
    .collection("Foods")
    .doc(food.id)
    .set(food).then(()=>updateComplete(food))
    .catch((error)=>console.log(error))
}

export async function deleteFoodPlat(food,deleteComplete){
    firebase
    .firestore()
    .collection("Foods")
    .doc(food.id)
    .delete()
    .then(()=>deleteComplete())
    .catch((error)=>console.log(error))
}

export async function deleteDanceMove(dance, deleteComplete){
    firebase.
        firestore().
        collection("DanceMoves").
        doc(dance.id).
        delete().
        then(() => deleteComplete()).
        catch((error) => console.log(error))
} 