export const initialState={
isLoggedIn:false,
userInfo:null
}
export const reducer=(state,action)=>{
    switch(action.type){
        case 'loggedInCase':
            return {
              ...state,
              isLoggedIn:true,
              userInfo:action.payload
            }
        default :
        return state;
    }
}