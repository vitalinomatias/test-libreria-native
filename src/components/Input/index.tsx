import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChange}
      style={styles.input}
    />
  );
};

export default Input;
