import { IAlbum } from "@/interfaces/IAlbum";
import { authenticate } from "@/services/authenticate";

export async function fetchRandomAlbums(): Promise<IAlbum[]> {
  await authenticate();

  const res = await fetch("http://localhost:4111/random-album", {
    credentials: "include",
  });

  const data = await res.json();

  return data as IAlbum[];
}
