import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import DrugSearchInput from "../src/components/DrugSearchInput";
import Dropdown from "../src/components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "../src/redux/medicinesSlice";
import PreviewMedicinesModal from "./PreviewMedicinesModal";

const durationTypes = ["Day(s)", "Week(s)", "Month(s)"];
const methods = ["Oral", "Cutaneous", "Injection", "Sublingual"];

const AddPrescriptionScreen = () => {
  const [drug, setDrug] = useState(null);
  const [dosageNote, setDosageNote] = useState("");
  const [duration, setDuration] = useState("");
  const [durationType, setDurationType] = useState(durationTypes[0]);
  const [method, setMethod] = useState(methods[0]);
  const [quantity, setQuantity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const medicines = useSelector((state) => state.medicines);

  const isFormValid =
    drug && dosageNote && duration && durationType && method && quantity;

  const handleAddDrug = () => {
    if (!isFormValid) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }
    dispatch(
      addMedicine({
        drug,
        dosageNote,
        duration,
        durationType,
        method,
        quantity,
      })
    );
    setDrug(null);
    setDosageNote("");
    setDuration("");
    setDurationType(durationTypes[0]);
    setMethod(methods[0]);
    setQuantity("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Prescription</Text>
      <View style={styles.stepper}>
        <View style={[styles.step, styles.activeStep]}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>2</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>3</Text>
        </View>
      </View>
      <Text style={styles.label}>Drug to prescribe*</Text>
      <DrugSearchInput value={drug} onSelect={setDrug} />
      <Text style={styles.label}>Dosage Note*</Text>
      <Dropdown
        placeholder="Add dosage note"
        value={dosageNote}
        onChange={setDosageNote}
        isInput
        maxLength={35}
      />
      <Text style={styles.label}>Duration*</Text>
      <View style={styles.row}>
        <Dropdown
          placeholder="Duration"
          value={duration}
          onChange={setDuration}
          isInput
          keyboardType="numeric"
          style={{ flex: 1, marginRight: 8 }}
        />
        <Dropdown
          placeholder="Type"
          value={durationType}
          onChange={setDurationType}
          options={durationTypes}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={styles.label}>Method*</Text>
      <Dropdown
        placeholder="Select"
        value={method}
        onChange={setMethod}
        options={methods}
      />
      <Text style={styles.label}>Quantity*</Text>
      <Dropdown
        placeholder="Qty"
        value={quantity}
        onChange={setQuantity}
        isInput
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={[
          styles.addButton,
          { backgroundColor: isFormValid ? "#1a2b4c" : "#ccc" },
        ]}
        onPress={handleAddDrug}
        disabled={!isFormValid}
      >
        <Text style={styles.addButtonText}>Add Drug +</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.previewButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.previewButtonText}>
          Preview Medicines ({medicines.length})
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <PreviewMedicinesModal onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a2b4c",
    marginBottom: 16,
  },
  stepper: {
    flexDirection: "row",
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  step: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  activeStep: { backgroundColor: "#1a2b4c" },
  stepText: { color: "#fff", fontWeight: "bold" },
  label: {
    marginTop: 12,
    marginBottom: 4,
    color: "#1a2b4c",
    fontWeight: "bold",
  },
  row: { flexDirection: "row", alignItems: "center" },
  addButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  previewButton: { marginTop: 12, alignItems: "center" },
  previewButtonText: { color: "#1a2b4c", fontWeight: "bold", fontSize: 16 },
});
export default AddPrescriptionScreen;
