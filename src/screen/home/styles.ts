import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 180,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  coutersWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  body: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  bodyContent: {
    margin: 24,
  },
  icon: {
    width: 60,
    height: 60,
  },
  savebutton: {
    backgroundColor: "#ce6b5d",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  savebuttonText: {
    color: "white",
    fontSize: 16,
  },
});
