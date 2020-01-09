// const iState={
//     name:"gulab singh"
// }
// const nameReducer=(state=iState,action)=>{
//     if(action.type==='CHANGE_NAME'){
//         return{
//             ...iState,
// name:action.payload
//         }
//     }
// return state;
// }
// export default nameReducer;

const nameReducer=(state='',action)=>{
    if(action.type==='CHANGE_NAME'){
        return action.payload
    
    }
return state;
}
export default nameReducer;