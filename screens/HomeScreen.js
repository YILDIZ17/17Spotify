import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styleScreen } from './Screen.style';
import { LinearGradient } from 'expo-linear-gradient';
import { height, resizeMode } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  const [userProfile, setUserProfile] = useState();
  const greetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good Morning";
    }
    else if (currentTime < 16) {
      return "Good Afternoon";
    }
    else {
      return "Good Evening";
    }
  }
  const message = greetingMessage();
  const getProfile = async () => {
    useEffect(() => {
      getProfile()
    })
  }
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styleScreen.HeadView}>
            <Image style={styleScreen.accountImage} source={require('../assets/logo.png')} />
            <Text style={styleScreen.welcomeMessage}>{message}</Text>
          </View>
          <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
        </View>
        <View style={styleScreen.block}>
          <Pressable style={styleScreen.categorieBlock}>
            <Text style={styleScreen.categorieText}>Musique</Text>
          </Pressable>
          <Pressable style={styleScreen.categorieBlock}>
            <Text style={styleScreen.categorieText}>Podcasts & Shows</Text>
          </Pressable>
        </View>

        <View style={{ height: 10 }} />

        <View style={styleScreen.blocView}>
          <Pressable style={styleScreen.pressableStyle}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Pressable style={styleScreen.blockStyle}>
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>
            <Text style={styleScreen.pressableText}>Favoris</Text>
          </Pressable>

          <View style={styleScreen.pressableStyle}>
            <Image style={{ width: 55, height: 55 }} source={{ uri: "https://i.pravatar.cc/100" }} />
            <View style={styleScreen.randomImg} />
            <Text style={styleScreen.pressableText}>HipHop</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen