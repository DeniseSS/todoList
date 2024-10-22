import React from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function AboutScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () =>
    setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conta</Text>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Nome de usuário</Text>
          <Text style={styles.itemValue}>usuario_exemplo</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Email</Text>
          <Text style={styles.itemValue}>exemplo@email.com</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Receber Notificações</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferências</Text>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Modo Escuro</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Versão do App</Text>
          <Text style={styles.itemValue}>1.0.0</Text>
        </View>
      </View>
    </View>
  );
}
