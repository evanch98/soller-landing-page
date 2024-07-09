import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-h3 lg:text-h1">404</h1>
      <p className="max-w-screen-md text-center text-bodyL">
        Sorry! You are not supposed to visit this page. This website is not a
        complete website, so only the homepage is available.
      </p>
      <div className="flex items-center justify-center gap-x-4">
        <Link
          href="https://github.com/evanch98/soller-landing-page"
          className="flex flex-col items-center justify-center gap-y-1 transition-colors duration-300 ease-in hover:text-amber"
          target="_blank"
        >
          <SiGithub className="h-6 w-6" />
          <p className="text-bodyS">Visit GitHub</p>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-y-1 transition-colors duration-300 ease-in hover:text-amber"
        >
          <HiHome className="h-6 w-6" />
          <p className="text-bodyS">Go Back Home</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
