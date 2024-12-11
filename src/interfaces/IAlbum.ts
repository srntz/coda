interface IAlbumImage {
  url: string;
  width: number;
  height: number;
}

interface IArtist {
  external_urls: {
    spotify: string;
  };
  name: string;
}

export interface IAlbum {
  href: string;
  images: IAlbumImage[];
  name: string;
  releaseDate: string;
  artists: IArtist[];
  external_urls: {
    spotify: string;
  };
  selected_track: {
    name: string;
    external_urls: {
      spotify: string;
    };
  };
  iframe_url: string;
}
