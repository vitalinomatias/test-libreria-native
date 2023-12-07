import React from 'react';
import {TextInput} from 'react-native';

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
      style={{
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
      }}
    />
  );
};

export default Input;
