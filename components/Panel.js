import React from 'react';
import { StyleSheet, Button, View } from 'react-native'

export default ({ onPressLeft, textLeft, togglePointFilter }) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title='Mostrar/Ocultar' onPress={togglePointFilter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})