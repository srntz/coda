"use client";
import { useRef, useState } from "react";
import AlbumCoverContainer from "@/components/ui/generator/AlbumCoverContainer";
import { IAlbum } from "@/interfaces/IAlbum";
import Image from "next/image";
import GeneratorMultipurposeSection from "@/components/ui/generator/GeneratorMultipurposeSection";

export default function RandomGeneratorPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [fetchedData, setFetchedData] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  async function fetchAlbums() {
    setLoading(true);
    const resAuth = await fetch("http://localhost:4111/auth", {
      credentials: "include",
    });

    const res = await fetch("http://localhost:4111/random-album", {
      credentials: "include",
    });

    const data = await res.json();

    setFetchedData((prev) => [...prev, ...data]);
    setLoading(false);
  }

  console.log(fetchedData);

  return (
    <div
      id="random-generator-main-content"
      className="w-full h-full justify-center gap-10 items-center flex"
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

      <Image
        className={`cursor-pointer ${currentAlbumIndex <= 0 && "opacity-25 cursor-default pointer-events-none select-none"}`}
        width={50}
        height={50}
        src={"/chevron_left.svg"}
        alt={"Right arrow icon"}
        onClick={() => setCurrentAlbumIndex((prev) => prev - 1)}
      ></Image>

      <div className={"flex justify-center items-center"}>
        <AlbumCoverContainer
          onClick={() => dialog.current.showModal()}
          src={
            fetchedData.length > 0
              ? fetchedData[currentAlbumIndex].images[0].url
              : ""
          }
          loading={loading}
        />

        <div
          id="options"
          className={
            "h-[28rem] w-[35rem] p-10 flex flex-col gap-7 justify-center"
          }
        >
          <GeneratorMultipurposeSection
            loading={loading}
            data={
              fetchedData.length > 0
                ? fetchedData[currentAlbumIndex]
                : undefined
            }
            fetchCallback={fetchAlbums}
          />
        </div>
      </div>
      <Image
        className={`cursor-pointer ${currentAlbumIndex >= fetchedData.length - 1 && "opacity-25 cursor-default pointer-events-none select-none"}`}
        width={50}
        height={50}
        src={"/chevron_right.svg"}
        alt={"Right arrow icon"}
        onClick={() => setCurrentAlbumIndex((prev) => prev + 1)}
      ></Image>
    </div>
  );
}
