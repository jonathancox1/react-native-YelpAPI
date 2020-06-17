import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


export default function ResultsShowScreen({ navigation }) {
    const [result, setResult] = useState(null);
    // id of restaurant clicked 
    const id = navigation.getParam('id');



    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    // empty [] calls api only once
    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) {
        return null;
    }
    console.log(result)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={styles.title}>{result.name}</Text>
                    <Text>
                        Rating: {result.rating}
                    </Text>
                </View>
                <View style={styles.header1}>
                    <Text>
                        {result.display_phone}
                    </Text>
                    <Text>
                        {result.location.display_address[0]}
                    </Text>
                    <Text>
                        {result.location.display_address[1]}
                    </Text>
                    <>
                        {result.location.display_address[2] ? <Text>{result.location.display_address[2]}</Text> : null}
                    </>

                </View>
            </View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item }} style={styles.image}></Image>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    header1: {
        flex: 1
    },
    image: {
        flex: 1,
        height: 200,
        alignSelf: 'stretch',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})
