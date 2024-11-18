import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center row-start-2">
        <Image
          className="dark select-none"
          src="/coda_logo.svg"
          alt="Coda logo"
          width={180}
          height={38}
          priority
        />
        <p className="select-none opacity-40 font-light">Coming soon...</p>
      </main>
    </div>
  );
}
