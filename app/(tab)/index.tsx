import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello my name is Minh Tan</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button Pressed!")}
      >
        <Text>Press me</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.button}
        onPress={() => alert("Pressable Pressed!")}
      >
        <Text>Press me</Text>
      </Pressable>

      <Link href="/profile" style={styles.button}>
        <Text>Go to Profile</Text>
      </Link>

      <Link href="/notification" style={styles.button}>
        <Text>Go to Notification</Text>
      </Link>
    </View>
  );
}