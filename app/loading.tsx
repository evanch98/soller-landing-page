import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="flex h-full w-full animate-spin flex-col items-center justify-center">
      <LuLoader2 className="h-12 w-12 text-amber" />
    </div>
  );
};

export default Loading;
