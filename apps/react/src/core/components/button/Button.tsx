import "./button.css";

type ButtonProps = {
  variant?: "primary" | "default";
  shape?: "rounded" | "circle";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  shape = "rounded",
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      className={`button button-shape-${shape} button-variant-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
