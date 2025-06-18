import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeMedicine } from "../src/redux/medicinesSlice";
import MedicineCard from "../src/components/MedicineCard";

const PreviewMedicinesModal = ({ onClose }) => {
  const medicines = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Preview Medicines</Text>
        <FlatList
          data={medicines}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item, index }) => (
            <MedicineCard
              medicine={item}
              onRemove={() => dispatch(removeMedicine(index))}
            />
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No medicines added.
            </Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    maxHeight: "80%",
  },
  closeButton: { position: "absolute", right: 12, top: 8, zIndex: 1 },
  closeText: { fontSize: 28, color: "#1a2b4c" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a2b4c",
    marginBottom: 16,
    textAlign: "center",
  },
});
export default PreviewMedicinesModal;
