import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333333",
    shadowOffset: { width: 2, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.8,
    justifyContent: "space-between"
  },
  finished: {
    opacity: 0.6,
  },
  text: {
  
    width: "80%",
    color: "#F2F2F2",
  },
  text2: {
    width: "80%",
    color: "#F2F2F2",
    textDecorationLine: "line-through",
  },
  iconStyle: {
    borderColor: "#941f1f",
    borderWidth: 2,
  },
  iconStyle2: {
    borderWidth: 0,
     backgroundColor:"#941f1f"
    
  },
});
