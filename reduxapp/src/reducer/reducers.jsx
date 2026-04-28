const intilData = 0;

export const addRemoveproduct = (state=intilData, action) => {
    switch(action.type){
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;

        default:
            return state;
    }
}