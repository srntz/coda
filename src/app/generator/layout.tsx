"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavItem from "@/components/ui/sidebar/NavItem";

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const generatorType = path.split("/").reverse()[0];

  return (
    <div
      id="generator-layout"
      className="flex px-2 py-4 h-[100vh] min-h-[35rem]"
    >
      <div
        id="sidebar"
        className="h-full w-40 px-4 py-8 bg-coda-black-100 flex flex-col items-center gap-8 rounded-xl"
      >
        <Image src="/coda_logo.svg" alt={"Coda logo"} width={80} height={80} />
        <div className="w-full flex flex-col gap-5">
          <NavItem
            title={"Random"}
            active={generatorType === "random"}
            path="/generator/random"
          />
          <NavItem
            title={"Preference"}
            active={generatorType === "preference"}
            path="/generator/preference"
          />
        </div>
      </div>

      <div id="main-content-area" className="p-8">
        {children}
      </div>
    </div>
  );
}
