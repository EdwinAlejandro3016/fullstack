export interface Heroe {
  name: string;
  description: string;
  id_Api: number | string;
  thumbnail: {
    extension: string;
    path: string;
  };
  id?: number | string;
  img? : string;
}
