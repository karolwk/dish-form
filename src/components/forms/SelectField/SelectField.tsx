import {
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  FormControlProps,
} from '@mui/material';

import { FieldRenderProps } from 'react-final-form';

interface FormHelperTextWrapperProps extends FieldRenderProps<string, any> {
  label: string;
  formControlProps: FormControlProps;
}

const FormHelperTextWrapper: React.FC<FormHelperTextWrapperProps> = ({
  input: { name, value, onChange, ...restInput },
  meta,
  label,
  formControlProps,
  ...rest
}) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <FormControl {...formControlProps} sx={{ width: '100%' }} error={showError}>
      <InputLabel id={name + '-label-id'}>{label}</InputLabel>

      <Select
        {...rest}
        labelId={name + '-label-id'}
        id={name + '-select'}
        label={label}
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
      />

      {showError && (
        <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormHelperTextWrapper;
