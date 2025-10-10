import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    console.log(movies);
    console.log(movies?.[0]);

  return (
    <div className="px-6">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies?.length > 0 && 
                    movies.map((movie)=>(<MovieCard posterPath={movie.poster_path} />))                
                }
            </div>
        </div>    
    </div>
  )
}

export default MovieList