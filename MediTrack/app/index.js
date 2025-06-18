import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MediTrack</Text>
      <Text style={styles.subtitle}>Your personal medication assistant</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/AddPrescriptionScreen")}
      >
        <Text style={styles.buttonText}>Add Prescription</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a2b4c",
    marginBottom: 10,
  },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 40 },
  button: { backgroundColor: "#1a2b4c", padding: 16, borderRadius: 30 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
export default index;
