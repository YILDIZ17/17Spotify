import { StyleSheet } from "react-native";

export const styleScreen = StyleSheet.create({
    logoStyle: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    welcomeTextStyle: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40,
        marginHorizontal: 10,
    },
    pressableSpotifyStyle: {
        backgroundColor: "#1DB954",
        padding: 17,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    pressablePhoneStyle: {
        backgroundColor: "#131624",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8,
    },
    phoneTextStyle: {
        fontWeight: "500",
        color: "white",
        textAlign: "center",
        flex: 1,
    },
});