import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from "react-native-maps"

export default ( { onLongPress, puntos, pointsFilter }) => {
    return (
        <MapView 
        style={styles.map} 
        onLongPress={onLongPress}
        >
            {pointsFilter && puntos.map(x => 
            <Marker 
                key={x.name}
                coordinate={x.coordinate}
                title={x.name}
            />)}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height -150,
        width: Dimensions.get('window').width
      },
})