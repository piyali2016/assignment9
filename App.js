import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';
import TodoListTask from './TodoListTask';

export default function App() {
  const [taskAdd, settaskAdd] = useState('');
  const [taskArr, settaskArr] = useState([]);
  let handleOnclick =(event)=>{
    event.preventDefault();
    if(taskAdd.length===0){
      alert("enter task details");
      return;
    }
    const newItem = {
      text: taskAdd,
      id: Date.now()
    };
    settaskArr(taskArr.concat(newItem));
    settaskAdd('');
  }
  let removeTodo=(id)=>{
    let newUpdateArr=taskArr.filter(item => item.id !== id);
    settaskArr(newUpdateArr);
}
  
  return (
    <View style={styles.container}>
      <Text>TODO task to add</Text>
      <StatusBar style="auto" />
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>settaskAdd(text)}
         title="Add Todo Task"
         value={taskAdd}
      />
     <Button
  onPress={handleOnclick}
  title="Add TODO Task"
  color="#841584"
/>  
<center>
      <TodoListTask DATA={taskArr} removeTodo={removeTodo}></TodoListTask>
      </center>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
