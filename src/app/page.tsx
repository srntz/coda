import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full p-16">
      <Image src="/coda_logo.svg" width={80} height={80} alt={"Coda Logo"} />
      <div id="main-content" className="w-[60%] min-w-[24rem] flex flex-col gap-5 mt-16">
        <h1 className="text-6xl font-semibold text-wrap leading-tight">Expose Yourself to New Soundscapes</h1>
        <h2 className={'text-xl font-light opacity-80 w-[28rem] min-w-[16rem] leading-normal'}>Generate personal album
          recommendations based on your current likings or let Coda pick something for you.</h2>
        <button className="w-[12rem] h-[3rem] rounded-xl bg-coda-blue-500 font-semibold mt-10">Try it out</button>
      </div>
      <div className="w-[20rem] h-[20rem] bg-gradient-to-r from-coda-blue-100 to-coda-blue-600 rounded-[50%] absolute top-[19rem] right-[24rem]"></div>
      <div className="w-[20rem] h-[7rem] blur-2xl opacity-80 bg-gradient-to-r from-coda-blue-100 to-coda-blue-600 rounded-[50%] absolute top-[32.5rem] right-[24rem]"></div>
    </div>
  );
}
