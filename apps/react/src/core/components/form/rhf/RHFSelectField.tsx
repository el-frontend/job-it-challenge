import { Controller, useFormContext } from "react-hook-form";
import SelectField from "../inputs/SelectField";

type Props = {
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
};

const RHFSelectField: React.FC<Props> = ({ name, options, placeholder }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectField {...field} options={options} placeholder={placeholder} />
      )}
    />
  );
};

export default RHFSelectField;
