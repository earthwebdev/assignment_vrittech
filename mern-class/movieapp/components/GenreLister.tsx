import React from 'react'

const GenreLister = (props: any) => {
    const {genres, genreId, setGenreId} = props;
  return (
    <>
        <div className="Param-form1SoAutupIaz3 mx-4">
                <select value={genreId} onChange={(e) => setGenreId(e.target.value)} className="Select Select_sm selectgenrelister py-2 rounded w-100 " id="query-discoverMovie_sort_by">
                    <option value="">Genre Movies List</option>
                    {
                        genres && genres.map( (genre: any) => {
                            
                                return (<option value={genre.id}>{genre.name}</option>)
                        })
                    }                    
                </select>
            </div>
    </>
  )
}

export default GenreLister