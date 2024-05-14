import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { styleComponent } from './Component.style';

const ArtistCard = ({ item }) => {
  const [randomName, setRandomName] = useState('');

  const fetchRandomName = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const { first, last } = data.results[0].name;
      const latinAlphabetRegex = /[a-zA-Z]/g;
      const filteredFirst = first.match(latinAlphabetRegex).join('');
      const filteredLast = last.match(latinAlphabetRegex).join('');
      setRandomName(`${filteredFirst} ${filteredLast}`);
    } catch (error) {
      console.error('Erreur lors de la récupération du nom de l\'artiste :', error);
    }
  };

  useEffect(() => {
    fetchRandomName();
  }, []);

  return (
    <View>
      <Image style={styleComponent.artistCard} source={{ uri: "https://i.pravatar.cc/100" }} />
      <Text numberOfLines={1} style={styleComponent.artistTitle}>{randomName}</Text>
    </View>
  );
};

export default ArtistCard;
