import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [resultado, setResultado] = useState('');
  const calc = () => {
    const media = (parseFloat(num1) + parseFloat(num2)+parseFloat(num3)+parseFloat(num4))/4;
    if (media >= 7){
      setResultado(`Parabéns! Você foi aprovado com média: ${media}`);
    }else{
      setResultado(`Desculpe mas você não alcançou a média necessária sua média foi: ${media}`);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Verifique Sua Média</Text>
      <TextInput placeholder='Insira sua primeira nota aqui!' style={styles.input} onChangeText={(text) => setNum1(text)}
        value={num1}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='Insira sua segunda nota aqui!' style={styles.input} onChangeText={(text) => setNum2(text)}
        value={num2}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='Insira sua terceira nota aqui!' style={styles.input}onChangeText={(text) => setNum3(text)}
        value={num3}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='Insira sua quarta nota aqui!' style={styles.input}onChangeText={(text) => setNum4(text)}
        value={num4}  keyboardType="numeric"></TextInput>
      <button title='submit' onClick={() => calc()}>Submit</button>
      <Text>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: 'red',
    marginBottom: 10,
  }

});
