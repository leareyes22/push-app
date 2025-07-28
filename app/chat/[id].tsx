import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ChatByIdScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
      <ThemedText style={{ fontSize: 25 }}>Chat ID Screen</ThemedText>
      <ThemedText style={{ fontSize: 25 }}>Chat ID: {id}</ThemedText>
    </View>
  );
};

export default ChatByIdScreen;
