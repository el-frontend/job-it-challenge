import "./divider.css";

type Props = {
  width?: number;
  height?: number;
  direction?: "vertical" | "horizontal";
};

const Divider: React.FC<Props> = ({
  height,
  width,
  direction = "vertical",
}) => {
  return (
    <div
      style={{ height: height, width: width }}
      className={`divider divider-${direction}`}
    />
  );
};

export default Divider;
