import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const JobOrderFilter = () => {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <span className="font-normal text-base text-gray-500">Sort by:</span>
      <Select>
        <SelectTrigger className="w-[180px] border-none shadow-none accent-inherit focus:border-none">
          <SelectValue placeholder="Order By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default JobOrderFilter;
