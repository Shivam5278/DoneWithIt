import { Button, Image, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AuthNavigator from "./app/navigation/AuthNavigaot";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


const Link = () => {
  const navigation = useNavigation();
  return (
  <Button 
  title="Click"
  onPress={() => navigation.navigate('TweetDetails')}/>
)}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id :"1" })}/>
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
)

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue"},
      headerTintColor: "white",
    }}
    >
    <Stack.Screen 
    name="Tweets" 
    component={Tweets}
  
    />
    <Stack.Screen 
    name="TweetDetails" 
    component={TweetDetails}
    options={({route}) => ({ title: route.params.id })}/>
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {


  return (
  <NavigationContainer theme={navigationTheme}>
    <AppNavigator /> 
  </NavigationContainer>
    );
}
