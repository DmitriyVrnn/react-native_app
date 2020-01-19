import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";

import { AppButton } from "./ui/AppButton";
import { THEME } from "../theme";


export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const onSaveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка!', `Минимальная длина названия 3 симвоыла. 
      Сейчас ${title.trim().length} символа`)
    } else {
      onSave(title)
    }
  };

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название..."
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel}
                     color={THEME.DANGER_COLOR}
          >
            Отменить
          </AppButton>
          <AppButton onPress={onSaveHandler}
          >
            Сохранить
          </AppButton>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});