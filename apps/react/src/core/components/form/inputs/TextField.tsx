import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const TextField: React.FC<Props> = ({
  name,
  onChange,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
      className="border-none bg-transparent text-foreground-color min-h-8 min-w-30 hover:accent-current"
    />
  );
};

export default TextField;
