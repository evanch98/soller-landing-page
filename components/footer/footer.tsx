import { Button } from "@/components/button/button";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-y-6 bg-white px-4 py-6 text-black md:flex-row md:justify-between md:gap-y-0 xl:px-20">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <h6 className="text-h6">soller</h6>
        <p className="text-center text-bodyM">
          @ 2024 Soller, Inc. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-x-6">
        <Button
          variant="link"
          padding="icon"
        >
          Terms
        </Button>
        <Button
          variant="link"
          padding="icon"
        >
          Privacy
        </Button>
        <Button
          variant="link"
          padding="icon"
        >
          Support
        </Button>
      </div>
    </footer>
  );
};
