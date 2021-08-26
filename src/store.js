import { createStore } from "redux";
const initialState = {
    userName : undefined,
}
const reducer = (state = initialState ,action) => {
    switch(action.type)
    {
        case "me/username":
            return {userName: action.payload};
        default:
            return state;
    }
}

export const store = createStore(reducer);