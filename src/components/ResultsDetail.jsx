import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ url: result.image_url }}
                style={styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    container: {
        marginLeft: 15,

    }
})

export default ResultsDetail;