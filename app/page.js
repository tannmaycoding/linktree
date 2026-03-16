import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">

      <div className="max-w-2xl text-center bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Linktree
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          Create a single page to share all your important links.
          Perfect for social media, portfolios, and creators.
        </p>

        <div className="flex justify-center gap-4">

          <Link
            href="/main"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Your Linktree
          </Link>

          <Link
            href="/about"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </Link>

        </div>

      </div>

    </div>
  );
}