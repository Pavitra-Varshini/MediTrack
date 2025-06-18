import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MedicineCard = ({ medicine, onRemove }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{medicine.drug.name}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.remove}>×</Text>
        </TouchableOpacity>
      </View>
      <Text>Take {medicine.dosageNote}</Text>
      <View style={styles.tags}>
        <Text style={styles.tag}>
          {medicine.duration} {medicine.durationType}
        </Text>
        <Text style={styles.tag}>Qty: {medicine.quantity}</Text>
        <Text style={styles.tag}>{medicine.method}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  title: { fontWeight: "bold", color: "#1a2b4c", fontSize: 16 },
  remove: { color: "#d00", fontSize: 20, fontWeight: "bold" },
  tags: { flexDirection: "row", marginTop: 8 },
  tag: {
    backgroundColor: "#e0f7e9",
    color: "#1a2b4c",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    fontSize: 12,
  },
});
export default MedicineCard;
