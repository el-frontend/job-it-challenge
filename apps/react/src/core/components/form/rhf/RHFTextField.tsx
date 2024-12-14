import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  placeholder?: string;
  className?: string;
};

const RHFTextField: React.FC<Props> = ({ name, placeholder, className }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} placeholder={placeholder} className={className}/>}
    />
  );
};

export default RHFTextField;
