import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { storage } from '../config/firebase';

import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { Ionicons } from '@expo/vector-icons';
import styles from '../ui/styles';

export default function ImageListType() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
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
  }, []);


  return (
    <View>
        {imageUrls.length >= 1 ?
      <FlatList
        data={imageUrls}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Image
              source={{ uri: item }}
              style={{
                width: 200,
                height: 200,
                margin: 10,
                alignItems: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  marginRight: 5,
                }}
              >
                <Ionicons name='heart-outline' size={24} color='black' />
              </View>
              <View
                style={{
                  marginRight: 5,
                }}
              >
                <Ionicons name='chatbubble-outline' size={24} color='black' />
              </View>
              <View
                style={{
                  marginRight: 5,
                }}
              >
                <Ionicons name='send-outline' size={24} color='black' />
              </View>
            </View>
          </>
        )}
      />
      :
        <View>
            <Text style={styles.not}>
                Não há imagens para serem exibidas
            </Text>
        </View>
    }
    </View>
  );
}
