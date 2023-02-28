import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button
} from 'react-native';


export default function TodoListTask({DATA,removeTodo}) {
    const handleOnclick = (id) => () => {
        console.log(id);
         removeTodo(id);
      };
  const Item = ({title,id}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button
  onPress={handleOnclick(id)}
  title="Delete"
  color="red"
/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.text} id={item.id} />}
      keyExtractor={item => item.id}
    />
   
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });