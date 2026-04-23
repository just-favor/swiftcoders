import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1200px] xl:max-w-[1700px] mx-auto px-5 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}