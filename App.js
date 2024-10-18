import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './components/Calculadora';
import Display from './components/Displayc';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '=') {
      try {
        const sanitizedExpression = displayValue.replace(/×/g, '*').replace(/÷/g, '/');
        setDisplayValue(eval(sanitizedExpression).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === '%') {
      handlePercentage();
    } else {
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handlePercentage = () => {
    setDisplayValue((prev) => {
      const percentage = parseFloat(prev) / 100;
      return percentage.toString();
    });
  };

  const renderButton = (value, color = '#333', textColor = '#fff', flex = 1) => (
    <Button value={value} onPress={() => handlePress(value)} color={color} textColor={textColor} flex={flex} />
  );

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttonRow}>
        {renderButton('C', '#a5a5a5', '#000')}
        {renderButton('+/-', '#a5a5a5', '#000')}
        {renderButton('%', '#a5a5a5', '#000')}
        {renderButton('÷', '#ff9500')}
      </View>
      <View style={styles.buttonRow}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('×', '#ff9500')}
      </View>
      <View style={styles.buttonRow}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-', '#ff9500')}
      </View>
      <View style={styles.buttonRow}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+', '#ff9500')}
      </View>
      <View style={styles.buttonRow}>
        {renderButton('0', '#333', '#fff', 2)}
        {renderButton(',')}
        {renderButton('=', '#ff9500')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Calculator;
