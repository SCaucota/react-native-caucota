import {createStore, combineReducers} from "redux"
import CatalogueMovies from "./reducers/catalogue.reducer"

const RootReducer = combineReducers({
    catalogue: CatalogueMovies
})

export default createStore(RootReducer)