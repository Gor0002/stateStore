const URL = "https://jsonplaceholder.typicode.com/users/";

// const initialState = fetch(`${URL}`).then(res => res.json());

export const getUserList = () =>{
    return fetch(`${URL}`)
    .then(res => res.json())
} 
