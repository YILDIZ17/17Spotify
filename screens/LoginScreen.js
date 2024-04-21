import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styleScreen } from './Screen.style';
const LoginScreen = () => {
    const navigation = useNavigation(); // Hook to navigate between screens

    useEffect(() => { // Check if the token is still valid
        const checkTokenValidity = async () => {
            const accessToken = await AsyncStorage.getItem("token");
            const expirationDate = await AsyncStorage.getItem("expirationDate");
            console.log("accessToken", accessToken);
            console.log("expirationDate", expirationDate);

            if (accessToken && expirationDate) { // If the token is still valid, navigate to the main screen
                const currentDate = new Date().getTime();
                if (currentDate < parseInt(expirationDate)) {
                    navigation.replace("Main");
                } else { // If the token is expired, remove it from the storage
                    AsyncStorage.removeItem("token");
                    AsyncStorage.removeItem("expirationDate");
                }
            }
        }
        checkTokenValidity();
    }, []);

    async function authenticate() {
        const config = { // Configuration for the Spotify API
            issuer: "https://accounts.spotify.com",
            clientId: "08d93262a599438599805e24d14221d7", // Client ID (available in the Spotify Developer Dashboard)
            scopes: [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public",
            ],
            redirectUrl: "exp://192.168.1.56:8081/--/spotify-auth-callback" // Redirect URL (available in the Spotify Developer Dashboard)
        };
        try { // Start the authentication process
            const result = await AuthSession.startAsync({
                authUrl: `${config.issuer}/authorize?client_id=${config.clientId}&redirect_uri=${encodeURIComponent(config.redirectUrl)}&response_type=token&scope=${encodeURIComponent(config.scopes.join(' '))}`,
            });
            console.log(result);
            if (result.type === 'success' && result.params.access_token) { // If the authentication is successful, store the token and expiration date
                const expirationDate = new Date().getTime() + (parseInt(result.params.expires_in) * 1000);
                AsyncStorage.setItem("token", result.params.access_token);
                AsyncStorage.setItem("expirationDate", expirationDate.toString());
                navigation.navigate("Main");
            }
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Image source={require('../assets/logo.png')} style={styleScreen.logoStyle} />
                <Text style={styleScreen.welcomeTextStyle}> Bienvenue sur 17'Spotify ! </Text>
                <View style={{ height: 80 }} />
                <Pressable onPress={authenticate} style={styleScreen.pressableSpotifyStyle}>
                    <Text>Se connecter avec 17'Spotify</Text>
                </Pressable>
                <Pressable
                    style={styleScreen.pressablePhoneStyle}>
                    <MaterialIcons name="phone-android" size={24} color="white" />
                    <Text style={styleScreen.phoneTextStyle}> Se connecter avec un numéro de téléphone </Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen;
