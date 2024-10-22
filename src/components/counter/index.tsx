import { Text, View } from "react-native";
import { styles } from "./styles";

interface CounterProps {
  name: "Criadas" | "Concluídas";
  value: number;
}

export function Counter({ name, value }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          name === "Criadas" ? styles.color1 : styles.color2,
          styles.text,
        ]}
      >
        {name}
      </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{value}</Text>
      </View>
    </View>
  );
}
