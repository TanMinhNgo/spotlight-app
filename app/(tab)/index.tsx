import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../styles/auth.styles";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: 'white', fontSize: 20 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}