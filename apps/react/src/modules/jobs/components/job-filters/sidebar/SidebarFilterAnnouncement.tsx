import { Button } from "@/components/ui/button";

const SidebarFilterAnnouncement = () => {
  return (
    <div className="relative hidden lg:flex flex-col w-full h-64 p-6 ">
      <div className="absolute z-0 top-0 left-0 right-0 w-full h-full rounded-2xl bg-[url('/images/abstract-circles.webp')] bg-cover opacity-90" />
      <div className="flex-1 flex justify-center items-center z-10">
        <h2 className="text-[26px] font-semibold text-left text-white">
          Get Your best profession with Job In IT
        </h2>
      </div>
      <Button className="z-10 bg-blue-400 hover:bg-blue-700">Learn More</Button>
    </div>
  );
};

export default SidebarFilterAnnouncement;
