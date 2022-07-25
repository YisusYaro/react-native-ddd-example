import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { createResource } from "../modules/resources/interface/controller";

export default function Main() {
  const [text, onChangeText] = React.useState("");

  const onSubmit = () => {
    (async () => {
      try {
        await createResource({ name: text });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Write name"
        style={styles.textInput}
      />
      <Button onPress={onSubmit} title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#000",
    borderBottomWidth: 1,
    marginBottom: "40px",
  },
});
