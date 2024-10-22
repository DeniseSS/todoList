import {
  FlatList,
  Image,
  StatusBar,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AddNewTodo } from "../../components/addNewTodo";
import React, { useState, useEffect } from "react";
import { Counter } from "../../components/counter";
import { Todo } from "../../components/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface TaskInterface {
  name: string;
  checked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState("");
  const navigation = useNavigation();
  let checkedTasks = tasks.filter((tasks) => tasks.checked === true).length;

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  async function saveTasksToStorage() {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem("@tasks", jsonValue);
      Alert.alert("Sucesso", "Tarefas salvas com sucesso!");
    } catch (e) {
      Alert.alert("Erro", "Erro ao salvar tarefas.");
    }
  }

  async function loadTasksFromStorage() {
    try {
      const jsonValue = await AsyncStorage.getItem("@tasks");
      if (jsonValue != null) {
        setTasks(JSON.parse(jsonValue));
      }
    } catch (e) {
      Alert.alert("Erro", "Erro ao carregar tarefas.");
    }
  }

  function handleTodoAdd() {
    const taskWithSameName = tasks.find((task) => task.name === newTask);
    if (taskWithSameName) {
      Alert.alert("Tarefa já existe", "Já existe uma tarefa dessa criada");
      return;
    }
    setTasks((prevState) => [...prevState, { name: newTask, checked: false }]);
    setNewTask("");
  }

  function handleTodoRemove(name: string) {
    setTasks((prevState) => prevState.filter((item) => item.name !== name));
  }

  function handleTodoCheck(task: TaskInterface) {
    setTasks((prevState) =>
      prevState.map((item) => {
        if (item.name === task.name) {
          return task;
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require("../../../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.body}>
        <AddNewTodo
          onPress={handleTodoAdd}
          onChange={setNewTask}
          value={newTask}
        />
        <View style={styles.bodyContent}>
          <View style={styles.coutersWrapper}>
            <Counter name="Criadas" value={tasks.length} />
            <Counter name="Concluídas" value={checkedTasks} />
          </View>
          <FlatList
            data={tasks}
            renderItem={(todo) => (
              <Todo
                key={todo.item.name}
                name={todo.item.name}
                onRemove={() => handleTodoRemove(todo.item.name)}
                onChecked={(isChecked) => {
                  handleTodoCheck({
                    name: todo.item.name,
                    checked: isChecked,
                  });
                }}
              />
            )}
          />
          <TouchableOpacity
            style={styles.savebutton}
            onPress={saveTasksToStorage}
          >
            <Text style={styles.savebuttonText}>Salvar Tarefas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
