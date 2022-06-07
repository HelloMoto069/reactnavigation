import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import Login from './screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function TabNav() {

  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Welcome',
            headerStyle:{
            backgroundColor:'red'
            },
            headerTintColor:'yellow',
            headerTitleStyle:{
            }
            }}
        />

        <Tab.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Karna Hai',
            headerStyle:{
            backgroundColor:'red'
            },
            headerTintColor:'yellow',
            headerTitleStyle:{
            }
            }}
        />

        <Tab.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: 'Humare Bare Me Jaane',
            headerStyle:{
            backgroundColor:'red'
            },
            headerTintColor:'yellow',
            headerTitleStyle:{
            }
            }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login Karna Hai',
            headerStyle:{
            backgroundColor:'red'
            },
            headerTintColor:'yellow',
            headerTitleStyle:{
            }
            }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});