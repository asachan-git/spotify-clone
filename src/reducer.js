export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    item: null, 
    // token: null,
    // // "BQC54SJFiNlrmOtbdDchXcIOI6Q6K8dOUgXc3pQfxY8HM-rTI7Y9UEBcLWjVd0oL7PDIJ5NUgyEDbVI3iQ69aHG1X8Zvo5ckLL37MyWX1XgH5nWRSPjbaSUUhu_kEYInZbv7HaxMBWTA1MkA-nsAgWUOC40A0YXHfSo"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN": 
            console.log("Reducer token", action.token)
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default: 
            return state;
    }
}

export default reducer;