const reducer = (state=1000, action) => {
    if(action.type==="deposit") {
        return state + action.payload
    } else if(action.type==="withdraw") {

        if((state)> 100) {
            return state - action.payload
        } else {
            alert('mininum limit reached, cannot withdraw more')
            return state;
        }
    } else {
        return state;
    }
}

export default reducer;