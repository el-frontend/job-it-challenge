import { queryClient } from "@/core/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./navbar/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen overflow-hidden">
        <Navbar />
        <main className="flex flex-col w-full h-full">{children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default RootLayout;
