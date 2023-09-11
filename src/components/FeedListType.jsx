import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';

import { storage } from '../config/firebase';

import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { Ionicons } from '@expo/vector-icons';
import styles from '../ui/styles';

export default function ImageListType({ navigation }) {
  const [imageUrls, setImageUrls] = useState([]);

  const [likedItems, setLikedItems] = useState({});

  const renderImages = () => {
    const imagesRef = ref(storage);
      listAll(imagesRef)
        .then((result) => {
          const urls = [];
          result.items.forEach((imageRef) => {
            getDownloadURL(imageRef).then((url) => {
              urls.push(url);
              setImageUrls(urls);
            });
          });
        })
        .catch((error) => {
          console.error('Error listing images: ', error);
    });
  }
  useEffect(() => {
    renderImages();
  }, []);

  const handleLikeToggle = (e) => {
    setLikedItems((prevLikedItems) => ({...prevLikedItems, [e]: !prevLikedItems[e]}))
  }

  return (
    <View
    style={{
      flex: 1,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  }}
    >
        {imageUrls.length >= 1 ?
      <ScrollView
      style={{
        width: '100%',
        height: 600,
    }}
    >  
        <FlatList
          data={imageUrls}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <>
              <Image
                source={{ uri: item }}
                style={{
                  width: 200,
                  height: 200,
                  margin: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <View style={{ alignItems: 'center',}}>
                  <Ionicons name={likedItems[index] ? 'heart' : 'heart-outline'} size={24} onPress={() => handleLikeToggle(index)} color={likedItems[index] ? 'red' : 'black'}/>
                </View>
                <View
                  style={{
                    marginRight: 5,
                  }}
                >
                </View>
              </View>
            </>
          )}
        />
      </ScrollView>
      :
        <View 
        style={{ 
          flex: 1,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
        >
            <Text style={styles.not}>
                Não há imagens para serem exibidas
            </Text>
        </View>
    }
    </View>
  );
}
