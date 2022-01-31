const initialState="India"

export const countryReducers=(state=initialState,action) => {
    switch(action.type){
        case "selectCountry":
            return state=action.payload
        default:
            return state
    }
}