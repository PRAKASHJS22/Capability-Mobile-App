
export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";

export const changeCount=(count)=>{
    return{
        type:INCREMENT,
        payload:count
    }
}


export const decrement=()=>{
    return{
        type:DECREMENT,  
        payload:count
    }
}