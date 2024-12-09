"use client";
import { useRef, useState } from "react";
import AlbumCoverContainer from "@/components/ui/generator/AlbumCoverContainer";
import { IAlbum } from "@/interfaces/IAlbum";

export default function RandomGeneratorPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [fetchedData, setFetchedData] = useState<IAlbum[]>([]);

  async function fetchAlbums() {
    const resAuth = await fetch("http://localhost:4111/auth", {
      credentials: "include",
    });

    const res = await fetch("http://localhost:4111/random-album", {
      credentials: "include",
    });

    const data = await res.json();

    setFetchedData((prev) => [...prev, ...data]);
  }

  console.log(fetchedData);

  return (
    <div
      id="random-generator-main-content"
      className="w-full h-full justify-center items-center flex"
    >
      <dialog
        ref={dialog}
        id="generator-info-dialog"
        className={"w-[25rem] p-3 bg-[#232323] text-white rounded"}
      >
        <div className={"w-full h-8"}></div>
        <p>This generator...</p>
        <button onClick={() => dialog.current.close()}>close</button>
      </dialog>

      <AlbumCoverContainer
        onClick={() => dialog.current.showModal()}
        src={fetchedData.length > 0 ? fetchedData[0].images[0].url : ""}
      />

      <div
        id="options"
        className={"h-[28rem] p-10 flex flex-col gap-7 justify-center"}
      >
        <p className="text-2xl w-[35rem] leading-normal">
          There are no options for this type of generator. Just let Coda do its
          thing.
        </p>
        <button
          onClick={fetchAlbums}
          className={"bg-coda-blue-300 w-36 h-12 rounded"}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
