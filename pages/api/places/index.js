import dbConnect from "@/db/connect.js";
import Place from "@/db/models/Place.js";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const places = await Place.find();
      return response.status(200).json(places);
    }

    if (request.method === "POST") {
      try {
        const placeData = request.body;
        console.log(placeData);
        await Place.create(placeData);

        return response.status(201).json({ status: "Place added" });
      } catch (error) {
        return response.status(400).json({ error: error.message });
      }
    }

    return response.status(405).json({ status: "Method not allowed." });
  } catch (error) {
    return response
      .status(500)
      .json({ status: "Server error", error: error.message });
  }
}
