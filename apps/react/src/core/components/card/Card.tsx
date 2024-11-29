import { Bookmark } from "lucide-react";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import "./card.css";

type CardProps = {
  color: "salmon" | "green" | "light-violet" | "aqua" | "pink" | "gray";
  createAt: string;
  company_name: string;
  company_image: string;
  tags: string[];
  title: string;
  salary_per_hour: number;
  location: string;
};

const Card: React.FC<CardProps> = ({
  color,
  company_image,
  company_name,
  createAt,
  location,
  salary_per_hour,
  tags,
  title,
}) => {
  return (
    <div className="card flex-col flex-between">
      <div
        className="card-container flex-col flex-center"
        style={
          { "--card-color": `var(--palette-${color})` } as React.CSSProperties
        }
      >
        <div className="flex flex-between w-1">
          <Badge variant="default">{createAt}</Badge>
          <Button variant="default" shape="circle">
            <Bookmark style={{ width: 20, height: 20 }} />
          </Button>
        </div>
        <div className="flex flex-between w-1">
          <div className="flex-col w-1">
            <span className="font-xs">{company_name}</span>
            <span className="font-md">{title}</span>
          </div>
          <img
            src={company_image}
            alt={company_name}
            className="card-company-image"
          />
        </div>
        <div className="flex flex-wrap gap-1 flex-start w-1">
          {tags.map((tag, index) => (
            <Badge variant="outline" key={`${index}-${tag}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-between w-1 p-2">
        <div className="flex flex-col gap-1">
          <span className="font-base">
            {Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
              currencyDisplay: "symbol",
              maximumFractionDigits: 0,
            }).format(salary_per_hour)}
            /hr
          </span>
          <span className="font-base color-gray">{location}</span>
        </div>
        <Button>Details</Button>
      </div>
    </div>
  );
};

export default Card;
