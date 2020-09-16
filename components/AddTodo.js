import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const pressHandler = () => {
    submitHandler(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="새로 할 일"
        onChangeText={changeHandler}
      />
      <Button onPress={pressHandler} title="할 일 추가" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
