export default interface MovieInterface{
  id: string;
  title:string,
  release_date:string,
  overview:string,
  information?:string,
  status?:string,
  original_language:string,
  runtime:number,
  budget ?:string,
  revenue?:string,
  lucro?:string,
  poster_path?:string,
  vote_average: number,
  genres:string,
}

export default interface IdMovieInterface {
  id:string;
  name?: string;
}