import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { THEME } from "../theme";
import { AppTextRegular } from "./ui/AppTextRegular";


export const Todo = ({todo, removeTodo, onOpen}) => {
  const onRemoveHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemoveHandler}>
      <View style={styles.todo}>
        <AppTextRegular style={styles.title}>{todo.title}</AppTextRegular>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.GRAY_COLOR,
    borderRadius: 5,
    marginBottom: 10
  },
});