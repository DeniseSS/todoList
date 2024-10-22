import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface AddNewTodoProps {
  onChange: (text: string) => void;
  onPress: () => void;
  value: string;
}

export function AddNewTodo({ onPress, onChange, value }: AddNewTodoProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputField, isFocus && styles.focusOutline]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={onChange}
        value={value}
        selectionColor="#ce6b5d"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.iconButton}>
          <Text style={styles.textButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
