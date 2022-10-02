import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator animation="slide_from_bottom" >
        <Stack.Screen name="Listings" component={ListingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
);

export default FeedNavigator;