import { IAlbum } from "@/interfaces/IAlbum";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface IGeneratorMultipurposeSection {
  loading: boolean;
  data: IAlbum | undefined;
  fetchCallback: () => Promise<void>;
  iframeUrl: string;
}

export default function GeneratorMultipurposeSection({
  loading,
  data,
  fetchCallback,
  iframeUrl,
}: IGeneratorMultipurposeSection) {
  const [embedReady, setEmbedReady] = useState(false);

  useEffect(() => {
    setEmbedReady(false);
  }, [data]);

  if (loading) {
    return (
      <>
        <Skeleton className="h-[3rem] w-[30rem] bg-coda-black-200" />
        <Skeleton className="h-[1.8rem] w-[20rem] bg-coda-black-200" />
        <Skeleton className="h-[1.2rem] w-[15rem] bg-coda-black-200" />
        <Skeleton className={"w-[100%] h-[152px] bg-coda-black-200"} />
      </>
    );
  }

  if (data) {
    return (
      <>
        <h2 className="text-[2.5rem] font-bold leading-tight hover:underline cursor-default">
          <a href={data.external_urls.spotify} target={"_blank"}>
            {data.name}
          </a>
        </h2>
        <h3
          className={
            "text-[1.2rem] opacity-80 -mt-4 hover:underline cursor-pointer"
          }
        >
          <a href={data.artists[0].external_urls.spotify} target={"_blank"}>
            {data.artists[0].name}
          </a>
        </h3>
        <p className={"opacity-70"}>
          Selected Track:{" "}
          <a href={data.selected_track.external_urls.spotify} target={"_blank"}>
            <span className="hover:underline cursor-pointer">
              {data.selected_track.name}
            </span>
          </a>
        </p>

        <iframe
          className={`rounded-[12px]`}
          style={!embedReady ? { opacity: 0, height: 0, width: 0 } : {}}
          src={iframeUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          onLoad={() => {
            setEmbedReady(true);
          }}
        ></iframe>
        {!embedReady && (
          <Skeleton className={"w-[100%] h-[152px] -mt-6 bg-coda-black-200"} />
        )}
      </>
    );
  } else {
    return (
      <>
        <p className="text-2xl w-[35rem] leading-normal">
          There are no options for this type of generator. Just let Coda do its
          thing.
        </p>
        <button
          onClick={fetchCallback}
          className={
            "bg-coda-blue-400 bg-opacity-90 hover:bg-opacity-100 transition w-36 h-12 rounded-lg"
          }
        >
          Generate
        </button>
      </>
    );
  }
}
