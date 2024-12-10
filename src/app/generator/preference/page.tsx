"use client";
import AlbumCoverContainer from "@/components/ui/generator/AlbumCoverContainer";
import Image from "next/image";
import { useRef } from "react";
import Circle from "@/components/ui/Circle";

export default function PreferenceGeneratorPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <div
      id="preference-generator-main-content"
      className="w-full h-full justify-center gap-10 items-center flex"
    >
      <Circle
        size={"25rem"}
        invert
        blurSize={"2.5rem"}
        top={"2rem"}
        right={"9rem"}
      />
      <Circle
        size={"18rem"}
        blurSize={"2.5rem"}
        top={"12rem"}
        right={"60rem"}
      />
      <Circle
        size={"12rem"}
        blurSize={"2.5rem"}
        top={"27.5rem"}
        right={"38rem"}
      />
      <div
        className={
          "flex justify-center w-[50%] h-[55%] items-center flex-col gap-10 backdrop-blur-lg rounded-xl bg-black bg-opacity-[0.05] border-[1px] border-white border-opacity-30 p-10"
        }
      >
        <p className="text-xl text-center opacity-90">
          Spotify has deprecated some of their endpoints recently, introducing
          significant difficulties for developing this generator without using
          AI or other APIs :(
        </p>
        <p className="text-xl w-[55%] text-center opacity-90">
          We are looking for a workaround.
          <br />
          Stay tuned.
        </p>
      </div>
      {/*<dialog*/}
      {/*  ref={dialog}*/}
      {/*  id="generator-info-dialog"*/}
      {/*  className={"w-[25rem] p-4 bg-coda-black-200 text-white rounded-lg"}*/}
      {/*>*/}
      {/*  <div className={"w-full h-6 flex justify-end"}>*/}
      {/*    <Image*/}
      {/*      className={`cursor-pointer select-none`}*/}
      {/*      width={20}*/}
      {/*      height={20}*/}
      {/*      src={"/close_icon.svg"}*/}
      {/*      alt={"Cross icon"}*/}
      {/*      onClick={() => (dialog.current as HTMLDialogElement).close()}*/}
      {/*    ></Image>*/}
      {/*  </div>*/}
      {/*  <p className={"text-sm leading-[1.5rem] opacity-90"}>*/}
      {/*    This generator recommends albums based on the given list of albums.*/}
      {/*    You can add up to 15 albums to the list, but the generator*/}
      {/*  </p>*/}
      {/*</dialog>*/}
      {/*<AlbumCoverContainer*/}
      {/*  onClick={() => (dialog.current as HTMLDialogElement).showModal()}*/}
      {/*/>*/}
    </div>
  );
}
