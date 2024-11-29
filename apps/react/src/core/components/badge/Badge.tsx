import "./badge.css";

type BadgeProps = {
  variant?: "primary" | "outline" | "default";
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ variant = "outline", children }) => {
  return <div className={`badge badge-variant-${variant}`}>{children}</div>;
};

export default Badge;
