import { IAlbum } from "@/interfaces/IAlbum";
import { authenticate } from "@/services/authenticate";

export async function fetchRandomAlbums(): Promise<IAlbum[]> {
  await authenticate();

  /*
    UNCOMMENT THIS TO TEST LOCALLY

    const res = await fetch("http://localhost:4111/random-album", {
      credentials: "include",
    });
   */

  const res = await fetch("https://coda-api-blue.vercel.app/random-album", {
    credentials: "include",
  });

  const data = await res.json();

  return data as IAlbum[];
}
