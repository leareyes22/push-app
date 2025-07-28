import { ThemedText } from "@/components/ThemedText";
import { usePushNotification } from "@/hooks/usePushNotification";
import { FlatList, View } from "react-native";

const PushApp = () => {
  const { expoPushToken, notifications } = usePushNotification();

  return (
    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
      <ThemedText
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        Token: {expoPushToken}
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View>
            <ThemedText style={{ fontWeight: "bold" }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
      />
    </View>
  );
};

export default PushApp;
