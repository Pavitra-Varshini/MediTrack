import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const Dropdown = ({
  placeholder,
  value,
  onChange,
  options,
  isInput,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState(false);

  if (isInput) {
    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        {...props}
      />
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={{ color: value ? "#000" : "#aaa" }}>
          {value || placeholder}
        </Text>
      </TouchableOpacity>
      {showOptions && options && (
        <FlatList
          data={options}
          keyExtractor={(item) => item}
          style={styles.dropdown}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                onChange(item);
                setShowOptions(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#f5f5f5",
  },
  dropdown: {
    maxHeight: 120,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
});
export default Dropdown;
