import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const DrugSearchInput = ({ value, onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchDrugs = async (text) => {
    setQuery(text);
    if (text.length > 1) {
      setLoading(true);
      try {
        const res = await fetch(
          `https://qa.msmb.api.sendscript.com/api/master/medicines?keyword=${text}`
        );
        const data = await res.json();
        setResults(data.data || []);
      } catch {
        setResults([]);
      }
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search drug name"
        value={value ? value.name : query}
        onChangeText={searchDrugs}
        style={styles.input}
      />
      {loading && <ActivityIndicator size="small" color="#1a2b4c" />}
      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          style={styles.dropdown}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                onSelect(item);
                setResults([]);
                setQuery("");
              }}
            >
              <Text>{item.name}</Text>
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
export default DrugSearchInput;
