import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
 import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>

    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
   </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
