export const initialState = {
    avatar:'',
    favorites:[],
    appointments:[]
};

export const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_AVATAR':
            return {...state, avatar: action.payload.avatar};
        default:
            return state;
    }
};
