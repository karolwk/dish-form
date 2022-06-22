import { TextField } from '@mui/material';
import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string | number, HTMLElement, any>;

const TextFieldAdapter = ({ input, meta, ...rest }: Props) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TextField
      {...input}
      {...rest}
      error={showError}
      helperText={showError ? meta.error || meta.submitError : undefined}
    />
  );
};

export default TextFieldAdapter;
