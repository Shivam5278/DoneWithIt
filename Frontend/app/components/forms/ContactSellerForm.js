const { NOTIFICATIONS } = require("expo-permissions");
const { Alert } = require("react-native");


function ContactSellerForm({ listing}){
    const handleSubmit = async({message},{resetForm}) =>{
        Keyboard.dismiss();
        
        const result = await messagesApi.send(message, listing.id);

        if(!result.ok) {
            console.log("Error", result);
            return Alert.alert ("error", "Could not send the message to)");
        }
        resetForm();

        NOTIFICATIONS.preseLocalNotificationAsync({
            title: "awesome!",
            body: "Message sent.",
        })
        
    };
};