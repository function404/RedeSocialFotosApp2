import React from 'react';
import { View, Text } from 'react-native';

import styles from '../ui/styles';

export default function Header({ title }){

    return(
        <View style={styles.header}>
            <Text style={styles.headerTextStyle}>
                { title }
            </Text>
        </View>
    )
}