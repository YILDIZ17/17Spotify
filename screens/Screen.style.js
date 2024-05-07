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
    HeadView: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    accountImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: "cover"
    },
    welcomeMessage: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    block: {
        marginHorizontal: 12,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    categorieBlock: {
        backgroundColor: "#282828",
        padding: 10,
        borderRadius: 30
    },
    categorieText: {
        fontSize: 15,
        color: "white"
    },
    blocView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    pressableStyle: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: "#202020",
        borderRadius: 4,
        elevation: 3
    },
    blockStyle: {
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center"
    },
    pressableText: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
    }
});