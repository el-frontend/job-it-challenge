import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/data";
import { Bookmark } from "lucide-react";

type CardProps = {
  color: "salmon" | "green" | "light-violet" | "aqua" | "pink" | "gray";
  createdAt: string;
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
  createdAt,
  location,
  salary_per_hour,
  tags,
  title,
}) => {
  return (
    <div className="flex flex-col justify-between items-center border border-gray-300 rounded-xl p-2 max-w-[260px] h-[310px]">
      <div
        className="flex flex-col justify-between items-center p-4 rounded-lg w-full gap-5 h-full"
        style={
          { backgroundColor: `var(--palette-${color})` } as React.CSSProperties
        }
      >
        <div className="flex justify-between w-full">
          <Badge variant="secondary" className="rounded-full">
            {formatDate(createdAt)}
          </Badge>
          <Button variant="secondary" className="rounded-full p-2">
            <Bookmark style={{ width: 20, height: 20 }} />
          </Button>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-full">
            <span className="text-xs">{company_name}</span>
            <span className="text-md font-medium">{title}</span>
          </div>
          <img
            src={company_image}
            alt={company_name}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-wrap gap-1 items-start w-full">
          {tags.map((tag, index) => (
            <Badge
              variant="outline"
              key={`${index}-${tag}`}
              className="border-gray-500 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-end w-full pt-4 pb-2 px-2">
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold">
            {Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
              currencyDisplay: "symbol",
              maximumFractionDigits: 0,
            }).format(salary_per_hour)}
            /hr
          </span>
          <span className="text-gray-500 text-xs">{location}</span>
        </div>
        <Button className="rounded-full">Details</Button>
      </div>
    </div>
  );
};

export default Card;
