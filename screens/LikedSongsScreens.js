import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { styleScreen } from './Screen.style'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const LikedSongsScreens = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState("");
    async function getSavedSongs() {
        try {
            const response = await fetch("https://api.spotify.com/v1/me/tracks", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginTop: 50 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>

                <Pressable style={styleScreen.pressableSearchBase}>
                    <Pressable style={styleScreen.pressableSearch2}>
                        <AntDesign name="search1" size={20} color="white" />
                        <TextInput
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            placeholder="Rechercher une musique likée"
                            placeholderTextColor={"white"}
                            style={{ fontWeight: "500" }}
                        />
                    </Pressable>

                    <Pressable
                        style={styleScreen.pressableSearch3}
                    >
                        <Text style={{ color: "white" }}>Trier</Text>
                    </Pressable>
                </Pressable>

                <View style={{ height: 50 }} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
                        Musiques likées
                    </Text>
                    <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>
                        430 musiques
                    </Text>
                </View>

                <Pressable style={styleScreen.pressableSong}>
                    <Pressable style={styleScreen.arrowSong}>
                        <Feather name="arrow-down" size={20} color="white" />
                    </Pressable>
                    <View style={styleScreen.arrowSong3}>
                        <MaterialCommunityIcons name="cross-bolnisi" size={24} color="green" />
                        <Pressable style={styleScreen.arrowSong2}>
                            <Entypo name="controller-play" size={24} color="white" />
                        </Pressable>
                    </View>
                </Pressable>

           
                    <View style={styleScreen.pressableStyle}>
                        <Image style={{ width: 55, height: 55 }} source={{ uri: "https://i.pravatar.cc/100" }} />
                        <View style={styleScreen.randomImg} />
                        <Text style={styleScreen.pressableText}> Nom de l'artiste</Text>
                    </View>

                    <View>
                        
                    </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default LikedSongsScreens