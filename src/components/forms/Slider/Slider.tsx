import { Slider } from '@mui/material';
import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<number, HTMLElement, number>;

const SliderAdapter = ({ input: { onChange }, label, ...rest }: Props) => {
  return <Slider {...rest} onChange={onChange} valueLabelDisplay="auto" />;
};

export default SliderAdapter;
