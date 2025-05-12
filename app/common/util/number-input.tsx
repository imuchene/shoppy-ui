import { TextFieldProps, TextField } from '@mui/material';
import { NumericFormatProps, NumericFormat } from 'react-number-format';

export type NumberInputProps = NumericFormatProps<TextFieldProps>;

export default function NumberInput(props: NumberInputProps) {
  return (
    <NumericFormat
      allowLeadingZeros={false}
      allowNegative={false}
      decimalScale={2}
      customInput={TextField}
      {...props}
    />
  );
}
