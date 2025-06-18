import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MediTrack</Text>
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
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: "bold", color: "#1a2b4c" },
});
export default SplashScreen;
