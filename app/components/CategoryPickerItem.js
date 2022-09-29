import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ onPress, item}) {
    return <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} size={80} name={item.Icon}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"


    },
    label: {
        marginTop: 5,
        textAlign: "center",
    }
})
export default CategoryPickerItem;