import { StyleSheet } from "react-native";

export const styleApp = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        shadowOpacity: 4,
        shadowRadius: 4,
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: -4,
        },
        borderTopWidth: 0,
    },
});