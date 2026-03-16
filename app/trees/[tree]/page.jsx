import clientPromise from "@/lib/mongodb";

export default async function TreePage({ params }) {

  const { tree } = await params;   // ✅ unwrap params

  const client = await clientPromise;
  const db = client.db("linktree");

  const data = await db.collection("trees").findOne({
    slug: tree
  });

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">Tree not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center gap-6 bg-gray-50 p-10">

      <img
        src={data.image}
        alt={data.name}
        className="w-32 h-32 rounded-full object-cover shadow-lg"
      />

      <h1 className="text-3xl font-bold">{data.name}</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {data.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {link.name}
          </a>
        ))}
      </div>

    </div>
  );
}