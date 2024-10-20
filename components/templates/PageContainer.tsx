import { twMerge } from "tailwind-merge";
import MiniIcon from "../custom/MiniIcon";

interface PageContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "w-full h-full min-h-screen overflow-scroll-y flex flex-col items-center pt-4 pb-20 px-4 gap-12 bg-aspect-ratio",
        className
      )}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*//! HEADER */}
      <div className="w-full flex items-center gap-2">
        <MiniIcon />
        <p className="text-2xl font-semibold">HYPUREX</p>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
