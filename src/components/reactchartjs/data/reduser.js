export function reduser (state, action) {
    switch (action.type) {
        
        case "Change":
            return action.day;
        default:
            return state;
    }
}

