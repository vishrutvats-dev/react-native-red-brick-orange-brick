import {  SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [grid,setGrid] = useState(Array(9).fill(false));

  function configureGrid(index) {
    const element = [...grid]
    element[index] = !element[index]
    setGrid(element)
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.containerMain}>
    {grid.map((isRed,index)=>(
      <TouchableOpacity onPress={()=> configureGrid(index)} style={isRed ?styles.gridItemsRed :styles.gridItems}>
      </TouchableOpacity>
    ))}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerMain: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    height: 300,
    width: 300
  },
  gridItems: {
    width: 100,
    height: 100,
    pointer: 'cursor',
    backgroundColor: 'white',
    border: '1px solid black'
  },
    gridItemsRed: {
    width: 100,
    height: 100,
    pointer: 'cursor',
    backgroundColor: 'green',
    border: '1px solid black'
  }

});
