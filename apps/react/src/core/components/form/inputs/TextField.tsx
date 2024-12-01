import './textfield.css';

import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextField: React.FC<Props> = ({
  name,
  onChange,
  value,
  type = "text",
}) => {
  return <input type={type} onChange={onChange} name={name} value={value} className='textfield'/>;
};

export default TextField;
