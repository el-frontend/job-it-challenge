import "./select-field.css";

import type { ChangeEventHandler } from "react";

type Props = {
  name: string;
  value: string | number;
  options: { label: string; value: string | number }[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const SelectField: React.FC<Props> = ({ name, onChange, value, options }) => {
  return (
    <select
      onChange={onChange}
      name={name}
      value={value}
      className="select-field"
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default SelectField;
