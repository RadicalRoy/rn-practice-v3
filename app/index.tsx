import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
  },
});
