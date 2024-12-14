import { DualRangeSlider } from "@/components/ui/dual-slider";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  renderLabel?: (value: number | undefined) => React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
};

const RHFMultiRangeSliderField: React.FC<Props> = ({
  name,
  renderLabel,
  className,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={cn("min-w-40", className)}>
          <DualRangeSlider
            label={renderLabel}
            value={field.value}
            onValueChange={field.onChange}
            step={1}
            {...props}
          />
        </div>
      )}
    />
  );
};
export default RHFMultiRangeSliderField;
