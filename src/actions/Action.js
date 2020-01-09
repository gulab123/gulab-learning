// export const Myfun=(name)=>{
//     return{
//         type:'CHANGE_NAME', payload:name
//     }
// }
export const Myfun=()=>{
    return async (dispatch)=>{
  const data =await fetch ('https://jsonplaceholder.typicode.com/users')
  const res2 =await data.json()
  .then(res2=>{
      dispatch({
          type:'CHANGE_NAME',
          payload:res2[6 ].name
      })
  })
    
}
}
