import { Controller, useFormContext } from "react-hook-form";
import MultiRangeSlider from "../inputs/MultiRangeSliderField";

type Props = {
  name: string;
};

const RHFMultiRangeSliderField: React.FC<Props> = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MultiRangeSlider
          min={field.value[0]}
          max={field.value[1]}
          onChange={({ min, max }) => field.onChange([min, max])}
        />
      )}
    />
  );
};
export default RHFMultiRangeSliderField;
