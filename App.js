import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button'
import Display from './src/components/display'
import { useState } from 'react';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false) // se precisar limpar o display no próximo digito
  const [operation, setOperation] = useState(null)        // qual operação foi clicada
  const [values, setValues] = useState([0, 0])            // Valor digitado anterior e atual
  const [current, setCurrent] = useState(0)               // qual valor (anterior ou atual) está sendo alterado

  clearMemory = () => {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  addDigit = n => {
    // console.warn('chegou aqui', n)
    // setDisplayValue(n)

    const clear = (displayValue === '0' || clearDisplay === true)

    if (n === '.' && displayValue.includes('.') && !clear) {
      return
    }

    let currentValue
    if (clear === true) {
      currentValue = ''
    } else {
      currentValue = displayValue
    }
    const display = currentValue + n

    setDisplayValue(display)
    setClearDisplay(false)

    if (n !== '.') {
      const newValue = parseFloat(display)
      const valuesTemp = [...values]
      valuesTemp[current] = newValue
      setValues(valuesTemp)
    }
  }

  calculate = op => {
    if (current === 0) {
      // console.warn('Foi pro 2º valor, operação', op, values)
      setOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      // console.warn('calcular', op, values)
      const equals = op === '='
      const valuesTemp = [...values]

      // Precisa tratar as operações (+- e a %), 
      // Sugestão usar um if, antes das próximas linhas...

      valuesTemp[0] = eval(`${values[0]} ${operation} ${values[1]}`)
      valuesTemp[1] = 0
      // console.warn('calcular', op, valuesTemp)

      setDisplayValue(`${valuesTemp[0]}`)
      setClearDisplay(!equals)
      setOperation(equals ? null : op)
      setValues(valuesTemp)
      setCurrent(equals ? 0 : 1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>APP Calculadora</Text>
      <Display value={displayValue} />

      <View style={styles.buttons}>
        <Button label='AC' onClick={clearMemory} />
        <Button label='+-' onClick={calculate} />
        <Button label='%' onClick={calculate} />
        <Button label='/' operation onClick={calculate} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={calculate} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={calculate} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={calculate} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={calculate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121"
  },
  titulo: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: "#FFF"
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
