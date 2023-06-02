import React from 'react'

const SortFilterList = (props: any) => {
    const { sortFiltervalue , setSortFiltervalue} = props;
  return (
    <>
            <div className="Param-form1SoAutupIaz3">
                <select value={sortFiltervalue} onChange={(e) => setSortFiltervalue(e.target.value)} className="Select Select_sm select-sortingfilters py-2 rounded w-100 " 
                id="query-discoverMovie_sort_by">
                    <option value="">Sorting Movies</option><option value="popularity.asc">popularity.asc</option><option value="popularity.desc">popularity.desc</option><option value="revenue.asc">revenue.asc</option><option value="revenue.desc">revenue.desc</option><option value="primary_release_date.asc">primary_release_date.asc</option><option value="primary_release_date.desc">primary_release_date.desc</option><option value="vote_average.asc">vote_average.asc</option><option value="vote_average.desc">vote_average.desc</option><option value="vote_count.asc">vote_count.asc</option><option value="vote_count.desc">vote_count.desc</option>
                </select>
            </div>
    </>
  )
}

export default SortFilterList