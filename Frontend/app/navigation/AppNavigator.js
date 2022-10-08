import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import { useEffect } from "react";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () =>{
    useEffect(() => {
        registerForPushNotification();
    }, []);

    const registerForPushNotification = async () =>{
        try {
            
            const permission = await Notifications.requestPermissionsAsync();
            if(!permission.granted) return;
    
            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
        } catch (error) {
            console.log('Error getting a push token', error);
            
        }
    }

    return (
<Tab.Navigator  screenOptions={{headerShown: false}} >
    <Tab.Screen 
        name="HOME" 
        component={FeedNavigator}
        options={{
            tabBarIcon: ({color,size}) =>
            <MaterialCommunityIcons name="home" color={color} size={size}/>
        }} />
    <Tab.Screen 
        name="MESSAGES" 
        component={MessagesScreen} 
        options={{
            tabBarIcon: ({color,size}) =>
            <MaterialCommunityIcons name="message" color={color} size={size}/>
        }} />
    <Tab.Screen 
        name="ListingEdit" 
        component={ListingEditScreen} 
        options={({navigation}) => ({
             tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>
        })} />
    <Tab.Screen 
        name="MY ADS" 
        component={AccountNavigator } 
        options={{
            tabBarIcon: ({color,size}) =>
            <MaterialCommunityIcons name="heart" color={color} size={size}/>
        }} />
    <Tab.Screen 
        name="ACCOUNT" 
        component={AccountScreen} 
        options={{
            tabBarIcon: ({color,size}) =>
            <MaterialCommunityIcons name="account" color={color} size={size}/>
        }} />
</Tab.Navigator>

);
    };

export default AppNavigator;