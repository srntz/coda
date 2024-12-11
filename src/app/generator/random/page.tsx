"use client";
import { useRef, useState } from "react";
import AlbumCoverContainer from "@/components/ui/generator/AlbumCoverContainer";
import { IAlbum } from "@/interfaces/IAlbum";
import Image from "next/image";
import GeneratorMultipurposeSection from "@/components/ui/generator/GeneratorMultipurposeSection";
import { fetchRandomAlbums } from "@/services/fetchRandomAlbums";

export default function RandomGeneratorPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [fetchedData, setFetchedData] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  async function handleGenerateAlbums() {
    setLoading(true);

    const data = await fetchRandomAlbums();
    console.log(data);
    setFetchedData((prev) => [...prev, ...data]);
    setLoading(false);
  }

  async function handleNextAlbum() {
    if (currentAlbumIndex < fetchedData.length - 1) {
      setCurrentAlbumIndex((prev) => prev + 1);
    } else {
      await handleGenerateAlbums();
      setCurrentAlbumIndex((prev) => prev + 1);
    }
  }

  function handleReset() {
    setFetchedData([]);
    setCurrentAlbumIndex(0);
  }

  return (
    <div
      id="random-generator-main-content"
      className="w-full h-full justify-center gap-10 items-center flex"
    >
      <dialog
        ref={dialog}
        id="generator-info-dialog"
        className={"w-[25rem] p-4 bg-coda-black-200 text-white rounded-lg"}
      >
        <div className={"w-full h-6 flex justify-end"}>
          <Image
            className={`cursor-pointer select-none`}
            width={20}
            height={20}
            src={"/close_icon.svg"}
            alt={"Cross icon"}
            onClick={() => (dialog.current as HTMLDialogElement).close()}
          ></Image>
        </div>
        <p className={"text-sm leading-[1.5rem] opacity-90"}>
          This generator randomly chooses albums from a combination of tracks
          taken from random playlists from the Spotify library. It generates LPs
          only, EPs and Singles are omitted.
        </p>
      </dialog>

      {fetchedData.length > 0 && !loading && (
        <button
          onClick={handleReset}
          className="absolute right-6 top-6 w-20 h-10 text-[0.9rem] bg-coda-black-200 hover:bg-coda-blue-300 transition border-coda-blue-300 rounded-lg"
        >
          Reset
        </button>
      )}

      {fetchedData.length > 0 && (
        <Image
          className={`cursor-pointer select-none ${currentAlbumIndex <= 0 || (loading && "opacity-25 cursor-default pointer-events-none")}`}
          width={50}
          height={50}
          src={"/chevron_left.svg"}
          alt={"Right arrow icon"}
          onClick={() => setCurrentAlbumIndex((prev) => prev - 1)}
        ></Image>
      )}

      <div className={"flex justify-center items-center"}>
        <AlbumCoverContainer
          onClick={() => (dialog.current as HTMLDialogElement).showModal()}
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
            "h-[28rem] w-[35rem] px-10 py-1 flex flex-col gap-7 justify-center"
          }
        >
          <GeneratorMultipurposeSection
            loading={loading}
            data={
              fetchedData.length > 0
                ? fetchedData[currentAlbumIndex]
                : undefined
            }
            fetchCallback={handleGenerateAlbums}
            iframeUrl={
              fetchedData.length > 0
                ? fetchedData[currentAlbumIndex].iframe_url
                : ""
            }
          />
        </div>
      </div>
      {fetchedData.length > 0 && (
        <Image
          className={`cursor-pointer select-none ${loading && "opacity-25 cursor-default pointer-events-none"}`}
          width={50}
          height={50}
          src={"/chevron_right.svg"}
          alt={"Right arrow icon"}
          onClick={handleNextAlbum}
        ></Image>
      )}
    </div>
  );
}
