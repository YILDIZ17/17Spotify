import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styleScreen } from './Screen.style'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LikedSongsScreens = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState("");
    return (
        <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginTop: 50 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>

                <Pressable>
                    <Pressable style={styleScreen.pressableSearch2}>
                        <AntDesign name="search1" size={24} color="white" />
                        <TextInput 
                        value={input} 
                        onChangeText={(text) => setInput(text)} 
                        placeholder="Rechercher une musique"
                        placeholderTextColor={"white"}
                        />
                    </Pressable>

                    <Pressable>
                        
                    </Pressable>
                </Pressable>
            </ScrollView>
        </LinearGradient>
    )
}

export default LikedSongsScreens