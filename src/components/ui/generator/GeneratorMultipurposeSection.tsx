import { IAlbum } from "@/interfaces/IAlbum";
import { Skeleton } from "@/components/ui/skeleton";

interface IGeneratorMultipurposeSection {
  loading: boolean;
  data: IAlbum | undefined;
  fetchCallback: () => Promise<void>;
}

export default function GeneratorMultipurposeSection({
  loading,
  data,
  fetchCallback,
}: IGeneratorMultipurposeSection) {
  if (loading) {
    return (
      <>
        <Skeleton className="h-[3rem] w-[30rem] bg-coda-black-200" />
        <Skeleton className="h-[1.8rem] w-[20rem] bg-coda-black-200" />
        <Skeleton className="h-[1.2rem] w-[15rem] bg-coda-black-200" />
        <Skeleton className="h-10 w-28 rounded bg-coda-black-200" />
      </>
    );
  }

  if (data) {
    return (
      <>
        <h2 className="text-[2.5rem] font-bold leading-tight cursor-default">
          {data.name}
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
        <a href={data.external_urls.spotify} target="_blank">
          <button className="bg-coda-black-200 hover:bg-coda-blue-300 transition h-10 w-28 rounded">
            Listen
          </button>
        </a>
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
            "bg-coda-blue-300 bg-opacity-60 hover:bg-opacity-100 transition w-36 h-12 rounded-lg"
          }
        >
          Generate
        </button>
      </>
    );
  }
}
