import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-8 py-4 bg-white shadow-md flex justify-between items-center">

      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Linktree</Link>
      </div>

      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600 transition">
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link
            href="/main"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Tree
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;