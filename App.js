import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import AddCategories from './AdminPages/AddCategories';



const Stack = createStackNavigator();

const App = () => {

    
      return (
          <NavigationContainer>
            {/* <Text>welcome</Text> */}
              <Stack.Navigator
               screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Onboarding'}
            >
                <Stack.Screen name="onboarding" component={Onboarding} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="AddCategories" component={AddCategories} />
              </Stack.Navigator>
          </NavigationContainer>
      );
    
}

export default App;