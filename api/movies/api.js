import { API_BASE_URL } from "../constants";

export async function topRated() {
  try {
    let url =
      API_BASE_URL +
      "/movie/top_rated" +
      "?api_key=174bf6d5692c019abc32ee1f8f75918d";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const results = data.results;

    return results;
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to fetch");
  }
}
