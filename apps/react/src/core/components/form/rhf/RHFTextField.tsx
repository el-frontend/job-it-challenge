import { Controller, useFormContext } from "react-hook-form";
import TextField from "../inputs/TextField";

type Props = {
  name: string;
};

const RHFTextField: React.FC<Props> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} />}
    />
  );
};

export default RHFTextField;
