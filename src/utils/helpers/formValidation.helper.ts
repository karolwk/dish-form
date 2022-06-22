import { FormValues } from '../../shared/types';

const validateForm = (values: FormValues) => {
  const errors = {} as FormValues;
  const REQUIRED_FIELD = 'Required';
  if (!values.name) {
    errors.name = REQUIRED_FIELD;
  }
  if (!values.preparation_time) {
    errors.preparation_time = REQUIRED_FIELD;
  }
  if (!values.type) {
    errors.type = REQUIRED_FIELD;
  }
  if (values.type === 'pizza') {
    if (!values.no_of_slices) {
      errors.no_of_slices = REQUIRED_FIELD;
    }
    if (!values.diameter) {
      errors.diameter = REQUIRED_FIELD;
    }
  } else if (values.type === 'sandwitch') {
    if (!values.slices_of_bread) errors.slices_of_bread = REQUIRED_FIELD;
  }
  if (values.preparation_time) {
    const pattern = /^([0-9][0-9]):([0-9][0-9]):([0-5][0-9])$/;
    if (!pattern.test(values.preparation_time)) {
      errors.preparation_time =
        'Please enter correct time format! For example 01:10:30';
    }
  }

  return errors;
};

export { validateForm };