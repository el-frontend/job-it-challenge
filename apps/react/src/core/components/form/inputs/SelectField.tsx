import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  name: string;
  value: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

const SelectField: React.FC<Props> = ({
  name,
  onChange,
  value,
  options,
  placeholder,
}) => {
  return (
    <Select name={name} value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectField;
