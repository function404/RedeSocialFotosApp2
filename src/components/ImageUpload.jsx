import * as ImagePicker from 'expo-image-picker';

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';

import styles from '../ui/styles';

import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Header from '../components/header';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const storageRef = ref(storage, 'images' + Date.now());
      const uploadTask = uploadBytes(storageRef, blob);

      await uploadTask;

      const imageURL = await getDownloadURL(storageRef);
      addImageToFirestore(imageURL);
    } catch (error) {
      console.error(error);
    }
  };

  const addImageToFirestore = async (imageURL) => {
    try {
      const ref = collection(db, 'images');
      await addDoc(ref, { imageURL });

      console.log('URL da imagem adicionado ao Firestore');
    } catch (error) {
      console.error('Erro ao adicionar o URL da imagem ao Firestore: ', error);
    }
  };

  return (
    <View>
      <View>
        <Header title='Enviar Imagem'/>
      </View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <View style={styles.content}>
        <View style={styles.contentbtn}>
          <Button
            style={styles.button}
            title='Selecione uma imagem'
            onPress={pickImage}
          />
        </View>

        <View style={styles.contentbtn}>
          <Button
            style={styles.button}
            title='Enviar a imagem'
            onPress={uploadImage}
            disabled={!image}
          />
        </View>
      </View>
    </View>
  );
}
