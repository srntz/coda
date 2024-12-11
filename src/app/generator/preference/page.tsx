"use client";
import Circle from "@/components/ui/Circle";

export default function PreferenceGeneratorPage() {
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
    </div>
  );
}
