import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-2 bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center">
          <Link href="/">
            <b className="px-4 py-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Home
            </b>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/chat">
            <div className="px-4 py-2 rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Chat
            </div>
          </Link>
          <Link href="/upload">
            <div className="px-4 py-2 rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Upload
            </div>
          </Link>
          <Link href="/blog">
            <div className="px-4 py-2 rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Blog
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
