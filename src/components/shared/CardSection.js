import React from "react";
import { View } from "react-native";

const CardSection = ({ customStyle, children }) => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
