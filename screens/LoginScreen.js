import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { styleScreen } from './Screen.style';

const LoginScreen = () => {
    const navigation = useNavigation(); // Hook pour naviguer entre les écrans

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Image source={require('../assets/logo.png')} style={styleScreen.logoStyle} />
                <Text style={styleScreen.welcomeTextStyle}> Bienvenue sur 17'Spotify ! </Text>
                <View style={{ height: 80 }} />
                <Pressable onPress={() => navigation.navigate("Main")} style={styleScreen.pressableSpotifyStyle}>
                    <Text>Se connecter avec 17'Spotify</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Main")} style={styleScreen.pressablePhoneStyle}>
                    <Text style={styleScreen.phoneTextStyle}> Se connecter avec un numéro de téléphone </Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen;
