import { FILTERED_POPULAR, GENDERS_MOVIES } from "../actions/catalogue.action";
import { catalogueMovies } from "../../data/CatalogueMovies";
/* import { GENDERS } from "../../data/GenderMovies"; */

const initialState = {
    catalogue: catalogueMovies,
    /* genders: GENDERS, */
    filteredPopularMovies: [],
    /* genderSelected: null */
}

const CatalogueMovies = (state = initialState, action) => {
    switch (action.type){
        case FILTERED_POPULAR:
            return {
                ...state,
                filteredPopularMovies: state.catalogue.filter(
                    movie => movie.ranking === action.movieRanking
                ),
            }
        /* case GENDERS_MOVIES:
            console.log('pruebaaaaaaa')
            const indexGenders = state.catalogue.findIndex( cat => cat.typeId === action.movieType.id)
            if (indexGenders === -1) return state;
            return {...state, genderSelected: state.catalogue[indexGenders]} */
        default:
            return state
    }
}

export default CatalogueMovies  