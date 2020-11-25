import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';

import { Map, Modal, Panel, Input, List } from './components';

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }
 
  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
        <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
        <Panel onPressLeft={handleLista} textLeft='Lista' togglePointFilter={togglePointFilter}/>
        <Modal visibility={visibility}>
          {visibilityFilter === 'new_punto' ?
          <View style={styles.form}>
          <Input title='Ingresar su punto' placeholder='Nombre del punto...' onChangeText={handleChangeText} />
          <Button title='Aceptar' onPress={handleSubmit}  /> 
          </View> 
          : <List puntos={puntos} closeModal={() => setVisibility(false)}/>
}
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
