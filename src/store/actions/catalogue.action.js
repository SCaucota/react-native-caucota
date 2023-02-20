export const FILTERED_POPULAR = "FILTERED_POPULAR"
/* export const GENDERS_MOVIES = "GENDERS_MOVIES" */

export const popular_list = movie => ({
    type: FILTERED_POPULAR,
    movieRanking: "Popular",
    movie,
})

/* export const movies_genders = movieType => ({
    type: GENDERS_MOVIES,
    movieType,
}) */