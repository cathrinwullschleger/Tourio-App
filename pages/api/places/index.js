import dbConnect from "@/db/connect.js";
import Place from "@/db/models/Place.js";

export default async function handler(request, response) {
  await dbConnect();
  console.log("Hallo");
  if (request.method === "GET") {
    const places = await Place.find();

    response.status(200).json(places);
    return;
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      console.log(placeData);
      await Place.create(placeData);

      response.status(201).json({ status: "Place added" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
