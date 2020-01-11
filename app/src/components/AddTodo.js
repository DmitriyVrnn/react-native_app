import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const pressHandler = () => {
    if(value.trim()){
      addTodo(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым')
    }
  };

  return(
    <View style={styles.wrapper}>
      <TextInput style={styles.input} 
        onChangeText={setValue}
        value={value}
        placeholder="Введите дело"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" 
        style={styles.button} 
        onPress={pressHandler}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  },
  button: {
      
  }
})
