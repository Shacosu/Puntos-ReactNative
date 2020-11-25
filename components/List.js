import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default ({ puntos, closeModal }) => {
    return (
        <>
        <View style={styles.list}>
            <FlatList
                data={puntos.map(x => x.name)}
                renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                keyExtractor={item => item}
            />
        </View>
        <View style={styles.button}>
            <Button title='Cerrar' onPress={closeModal}/>
        </View>
       </> 
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height -350,
        width: Dimensions.get('window').width -100,
    },
    item: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        height: 50,
        justifyContent: 'center',
        padding: 15
    },
    button: {
        paddingBottom: 25,

    }
})