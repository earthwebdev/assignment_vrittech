import MovieCard from '@/components/MovieCard';
import { setStateMovies, setMovieConcataction } from '@/slice/MovieSlice';
import axios from 'axios';
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { MovieInterface } from '@/interface/movieinterface';

import SortFilterList from '@/components/SortFilterList';
import GenreLister from '@/components/GenreLister';


/* interface MovieInterface{
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
} */

interface MovieGenreInterface{
      id: number;
      name: string;
}

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  //const [movies, setMovies] = useState<MovieInterface[]>([]);
  const movies: any = useSelector( (state: any) => {
      return state.MovieReducer.movies;
  });

  const [trendingMovies, setTrendingMovies] = useState<MovieInterface[]>();
  const [isGenre, setIsGenre] = useState(false);
  const [genres, setGenres] = useState<MovieGenreInterface[]>([]);
  const [genreId, setGenreId] = useState<number>(0);
  
  const [sortFiltervalue, setSortFiltervalue] = useState<string>('');

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  
  const fetchGenreList = async() => {
    try {
       const resp = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=4e4bc47055e1031e55167e2121a053ac'); //5345d591dce999dd3dde52a8fd7e0f56
       console.log(resp);
       setGenres(resp.data.genres);
    } catch (error) {
       console.log(error)
    }
 }
  const fetchMovies = async() => {
    dispatch(setMovieConcataction(false));
     try {
        const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e4bc47055e1031e55167e2121a053ac'); //5345d591dce999dd3dde52a8fd7e0f56
        console.log(resp);
        dispatch(setStateMovies(resp.data.results));
        //setMovies(resp.data.results);
     } catch (error) {
        console.log(error)
     }
  }

  const fetchTrendingMovies = async() => {
    try {
      const resp = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&sort_by=release_date&sort_order=desc&api_key=4e4bc47055e1031e55167e2121a053ac');
      console.log('trending',resp.data);
      setTrendingMovies(resp.data.results);
   } catch (error) {
      console.log(error)
   }

  }
  const searchResult = async() => {
    setIsSearch(true);
    setIsGenre(false);
    try {
        const resp = await axios.get('https://api.themoviedb.org/3/search/movie?query='+searchValue+'&api_key=4e4bc47055e1031e55167e2121a053ac');
        console.log(resp.data);
        dispatch(setStateMovies(resp.data.results));
        //setMovies(resp.data.results);
    } catch (error) {
        console.log(error)
    }
    dispatch(setMovieConcataction(true));

  }
  useEffect(() => {
    let deboucingFN: any;
    if(searchValue != ''){
         deboucingFN = setTimeout( () => {
          searchResult();
      }, 3000)
    }
        return () => clearTimeout(deboucingFN);
  }, [searchValue]);

  useEffect(() => {
    fetchGenreList();
    fetchMovies();
    fetchTrendingMovies();
  }, []);

  //search functions
  const onSearchEventHandler = async (e: any) => {
    e.preventDefault();    

    setIsGenre(false);
      setIsSearch(true);
      setGenreId(genreId);
    console.log(searchValue, genreId, sortFiltervalue);
    
    //searchQueryVal
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=4e4bc47055e1031e55167e2121a053ac';
    url += genreId && genreId > 0 ? '&with_genres=' + genreId : '';
    url += sortFiltervalue && sortFiltervalue != '' ? '&sort_by=' + sortFiltervalue : '';
    url += searchValue && searchValue != '' ? '&query=' + searchValue : '';
     try {
        const resp = await axios.get(url);
        console.log(resp);
        dispatch(setStateMovies(resp.data.results));
        //setMovies(resp.data.results);
    } catch (error) {
        console.log(error)
    }
    dispatch(setMovieConcataction(false)); 
  }

  /* const onGenreEventHandler = async (e: any, id: number) => {
    e.preventDefault();
    setIsGenre(true);
    console.log(id);
      setIsSearch(true);
      setGenreId(id);
      
      try {
        // 3/discover/movie?with_genres=12&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12

          const resp = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres='+id+'&api_key=4e4bc47055e1031e55167e2121a053ac'); //5345d591dce999dd3dde52a8fd7e0f56
          console.log(resp);
          dispatch(setStateMovies(resp.data.results));
          //setMovies(resp.data.results);
      } catch (error) {
          console.log(error)
      }
      dispatch(setMovieConcataction(true));
  } */

  /* const searchResults = (searchQuery: string) => {
      console.log(searchQuery);
      setIsSearch(true);
      const val = searchQuery.toLowerCase();
      const filterResults = movies.filter((movie: any) => {
          return movie.title.toLowerCase().includes(val);
      })
      console.log(filterResults);

  } */

  const loadMoreEventHandler = async(e: any) => {
    e.preventDefault();
    const value = isGenre?genreId:searchValue;
    console.log(page+1, value);
    try {
      // 3/discover/movie?with_genres=12&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12

        const resp = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres='+value+'&append_to_response=videos&page='+(page+1)+'&api_key=4e4bc47055e1031e55167e2121a053ac'); //5345d591dce999dd3dde52a8fd7e0f56
        console.log(resp);
        dispatch(setStateMovies(resp.data.results));
        setPage(page+1);
        //setMovies(resp.data.results);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
        <div className='bg-gray-200'>
          <div className='container md:mx-auto py-8'>   
            <div className='flex flex-wrap flex-row items-center  mb-6 text-gray-900 dark:text-white mr-4'>
                <SortFilterList sortFiltervalue={sortFiltervalue} setSortFiltervalue={setSortFiltervalue} />           
                <GenreLister genreId={genreId} setGenreId={setGenreId} genres={genres} />
                <input onChange={(e) => setSearchValue(e.target.value)} className='py-2 rounded w-100 flex-grow text-gray-900 font-bold text-center' type='text' placeholder='Search Movies' />
                <button onClick={(e) => onSearchEventHandler(e)} className='py-2 px-10 rounded-sm bg-gray-300'>Search</button>
              </div>
                  {/* <ul className="flex flex-wrap flex-row items-center  mb-6 text-gray-900 dark:text-white">
                    {
                        genres && genres.map((genre: any) => {
                          return (
                            <>
                              <li key={genre.id}>
                                  <a onClick={(e) => onGenreEventHandler(e, genre.id)} key={genre.id} className="marker:mr-4 hover:underline md:mr-6 font-bold cursor-pointer">{genre.name}</a>
                              </li>
                            </>
                          )
                        })
                    }
                    <li>
                      <input onChange={(e) => setSearchValue(e.target.value)} className='py-2 rounded w-100 flex-grow text-gray-900 font-bold text-center' type='text' placeholder='Search Movies' />
                      <button onClick={(e) => onSearchEventHandler(e)} className='py-2 rounded-sm bg-gray-300'>Search</button>

                      <input onChange={(e) => setSearchValue(e.target.value) } className='py-2 rounded w-100 flex-grow text-gray-900 font-bold text-center' type='text' placeholder='Search Movies AutoComplete' />
                    </li>
                    </ul> */}              
            </div>
        </div>

    {/* <div className='bg-gray-200'>
      <div className='container md:mx-auto py-8'>              
              
              <ul className="flex flex-wrap flex-row items-center  mb-6 text-gray-900 dark:text-white">
                {
                    genres && genres.map((genre: any) => {
                      return (
                        <>
                          <li key={genre.id}>
                              <a onClick={(e) => onGenreEventHandler(e, genre.id)} key={genre.id} className="marker:mr-4 hover:underline md:mr-6 font-bold cursor-pointer">{genre.name}</a>
                          </li>
                        </>
                      )
                    })
                }
                <li>
                  <input onChange={(e) => setSearchValue(e.target.value)} className='py-2 rounded w-100 flex-grow text-gray-900 font-bold text-center' type='text' placeholder='Search Movies' />
                  <button onClick={(e) => onSearchEventHandler(e)} className='py-2 rounded-sm bg-gray-300'>Search</button>

                  <input onChange={(e) => setSearchValue(e.target.value) } className='py-2 rounded w-100 flex-grow text-gray-900 font-bold text-center' type='text' placeholder='Search Movies AutoComplete' />
                </li>
                </ul>              
        </div>
    </div> */}
        {
           ! isSearch && (
              <div className='container md:mx-auto py-8'>
                  <h1 className='text-1xl font-bold mb-4'>Trending Movies</h1>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                    {
                        trendingMovies && trendingMovies.map((movie: any) => {
                          return <MovieCard 
                          key={movie.id} 
                          poster={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} 
                          title={movie.title}
                          releaseYear={movie.release_date}
                          rating={movie.vote_average}
                          
                        />
                        })
                    }

                  </div>
              </div>
           )
        }
        <div className='container md:mx-auto py-8'>
              <h1 className='text-1xl font-bold mb-4'>{! isSearch ? 'Popular Movies' : 'Movies'}</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    movies && movies.map((movie: any) => {
                      return <MovieCard 
                      key={movie.id} 
                      poster={movie.poster_path != null ?'https://image.tmdb.org/t/p/w500/'+ movie.poster_path:''} 
                      title={movie.title}
                      releaseYear={movie.release_date}
                      rating={movie.vote_average}
                      
                    />
                    })
                }
                
                


              </div>
              {
                isSearch && (
                    <button onClick={(e) => loadMoreEventHandler(e)} className='w-full py-4 bg-blue-600 text-white hover:bg-blue-800 font-bold text-center'>Load More</button>
                )
              }
              
        </div>
    </>
  )
}
