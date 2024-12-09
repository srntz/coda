import Image from "next/image";
import Circle from "@/components/ui/Circle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full p-16 relative">
      <Image src="/coda_logo.svg" width={80} height={80} alt={"Coda Logo"} />
      <div
        id="main-content"
        className="w-[60%] min-w-[24rem] flex flex-col gap-5 mt-16"
      >
        <h1 className="text-6xl font-semibold text-wrap leading-tight">
          Expose Yourself to New Soundscapes
        </h1>
        <h2
          className={
            "text-xl font-light opacity-80 w-[28rem] min-w-[16rem] leading-normal"
          }
        >
          Generate personal album recommendations based on your current likings
          or let Coda pick something for you.
        </h2>
        <Link href="/generator/random">
          <button className="w-[12rem] h-[3rem] rounded-xl bg-coda-blue-500 font-semibold mt-10 transition-all hover:bg-coda-blue-300">
            Try it out
          </button>
        </Link>
      </div>
      <Circle
        size={"8rem"}
        blurSize={"1.2rem"}
        top={"60vh"}
        right={"13vw"}
        invert={true}
      />
      <Circle size={"21rem"} blurSize={"2.5rem"} top={"42vh"} right={"29vw"} />
      <Circle
        size={"15rem"}
        blurSize={"2rem"}
        top={"7vh"}
        right={"8vw"}
        invert={true}
      />
    </div>
  );
}
