import { Genre } from "./Movies";
import ProductionCompany from "./ProductionCompany";

export default interface MovieDetailResultObject {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | object
  budget: number
  genres: Genre[]
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number,
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}