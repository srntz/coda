import { MouseEventHandler } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface IAlbumCoverContainer {
  onClick: MouseEventHandler<HTMLDivElement>;
  src?: string;
  loading?: boolean;
}

export default function AlbumCoverContainer({
  onClick,
  src = "",
  loading = false,
}: IAlbumCoverContainer) {
  return (
    <>
      {!src && !loading ? (
        <div
          onClick={onClick}
          className="w-[33rem] h-[33rem] flex justify-center items-center"
        >
          <div
            id={"album-cover-placeholder"}
            className={
              "h-[32rem] w-[32rem] transition-all hover:w-[33rem] hover:h-[33rem] flex justify-center items-center rounded-3xl bg-coda-black-100"
            }
          >
            <label className="opacity-85 text-center">
              Press to find out how this generator works
            </label>
          </div>
        </div>
      ) : (
        <div className="w-[33rem] h-[33rem] flex justify-center items-center">
          {loading ? (
            <Skeleton
              className={"rounded-3xl bg-coda-black-200 w-[32rem] h-[32rem]"}
            />
          ) : (
            <div
              id={"album-cover-placeholder"}
              className={
                "h-[32rem] w-[32rem] transition-all flex justify-center items-center rounded-3xl bg-coda-black-100"
              }
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
              }}
            ></div>
          )}
        </div>
      )}
    </>
  );
}
