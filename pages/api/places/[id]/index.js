import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  try {
    await dbConnect();
    const { id } = request.query;

    if (request.method === "GET") {
      const place = await Place.findById(id);

      if (!place) {
        return response.status(404).json({ status: "Not found" });
      }

      return response.status(200).json(place);
    }

    if (request.method === "DELETE") {
      const deleted = await Place.findByIdAndDelete(id);
      if (!deleted) {
        return response.stauts(404).json({ status: "Place not found." });
      }
      return response
        .status(200)
        .json({ status: `Place ${id} successfully deleted.` });
    }

    if (request.method === "PUT") {
      const placeData = request.body;
      const updated = await Place.findByIdAndUpdate(id, placeData);

      if (!updated) {
        return response.status(404).json({ status: "Place not found." });
      }
      response.status(200).json({ status: `Place ${id} updated!` });
    }

    return response.status(405).json({ status: "Method not allowed." });
  } catch (error) {
    return response
      .status(500)
      .json({ status: "Server error", error: error.message });
  }
}
