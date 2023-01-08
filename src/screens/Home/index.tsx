import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    Alert.alert("Weahoo!", "Você adicionou um participante.");
  }

  function handleRemoveParticipante(name: string) {
    Alert.alert("Oops!", ` Você acabou de remover o paricipante ${name}.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 07 de Janeiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="One"
        onRemove={() => handleRemoveParticipante("One")}
      />
    </View>
  );
}
