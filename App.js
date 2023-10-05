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
      <Text style={styles.text}>Verifique Sua Média</Text>
      <TextInput placeholder='1° nota' style={styles.input} onChangeText={(text) => setNum1(text)}
        value={num1}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='2° nota' style={styles.input} onChangeText={(text) => setNum2(text)}
        value={num2}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='3° nota' style={styles.input}onChangeText={(text) => setNum3(text)}
        value={num3}  keyboardType="numeric"></TextInput>
      <TextInput placeholder='4° nota' style={styles.input}onChangeText={(text) => setNum4(text)}
        value={num4}  keyboardType="numeric"></TextInput>
      <button title='submit' style={styles.button} onClick={() => calc()}>Calcular</button>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48D1CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    position: 'relative',
    top:-30,
    fontSize: 18,
  },
  input:{
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 2,
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#5F9EA0',
    border:'none',
    position: 'relative',
    top: 10,
    borderRadius: 2,
    width: 80,
    height:20,
    color: 'white',
  },
  resultado:{
    position: 'relative',
    top:15,
    color:'white',
  }
});
