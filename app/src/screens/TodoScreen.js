import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";


export const TodoScreen = ({ goBack, todo, removeTodo, onSave }) => {
  const [modal, setModal] = useState(false);

  const onRemove = () => {
    removeTodo(todo.id)
  };

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Ред." onPress={() => setModal(true)}/>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Назад"
            onPress={goBack}
            color={THEME.GRAY_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={onRemove}/>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
});