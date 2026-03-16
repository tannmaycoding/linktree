import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
    const {name, image, links, slug} = body
    const client = await clientPromise;

    const db = client.db("linktree");
    const collection = db.collection("trees");
    const existing = await collection.findOne({ name })

    if (existing) {
        return Response.json({ success: false, error: "Tree of this name already exists" })
    }

    const result = await collection.insertOne({
        name: name,
        image: image,
        links: links,
        slug: slug
    });

    return Response.json({
        success: true,
        result: result,
    });

}