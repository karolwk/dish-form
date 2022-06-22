import { Field } from 'react-final-form';

type Props = {
  when: string;
  is: any;
  children: React.ReactElement;
};

const Condition = ({ when, is, children }: Props) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export default Condition;
