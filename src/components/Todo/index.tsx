import { View, Text, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { useState } from "react";

interface TodoProps {
  name: string;
  onChecked: (cheked: boolean) => void;
  onRemove: () => void;
}

export function Todo({ name, onRemove, onChecked }: TodoProps) {
  const [check, setCheck] = useState(false);

  return (
    <View style={[styles.container, check && styles.finished]}>
      <BouncyCheckbox
        size={18}
        fillColor="#5E60CE"
        innerIconStyle={check ? styles.iconStyle2 : styles.iconStyle}
        onPress={(isChecked) => {
          onChecked(isChecked);
          setCheck(isChecked);
        }}
      />
      <Text style={check ? styles.text2 : styles.text}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
