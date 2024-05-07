import axios from "axios";
import {API_BASE_URL} from "../../config/apiConfig.js";
import {LOGIN_FAILURE,GET_USER_FAILURE,GET_USER_SUCCESS,GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS, LOGOUT} from "./ActionType.js";

// const token = localStorage.getItem('jwt');
const registerRequest = ()=>({type:REGISTER_REQUEST});
const registerSuccess = (user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure = (error)=>({type:REGISTER_FAILURE,payload:error});

export const register = (userData)=>async(dispatch)=>{
   dispatch(registerRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user = response.data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        console.log("user",user);
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
}


const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSuccess = (user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure = (error)=>({type:LOGIN_FAILURE,payload:error});

export const login = (userData)=>async(dispatch)=>{
   dispatch(loginRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user = response.data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        console.log("user",user);
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
}


const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSuccess = (user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure = (error)=>({type:GET_USER_FAILURE,payload:error});

// export const getUser = (jwt)=>async(dispatch)=>{
//     dispatch(getUserRequest())
//      try {
//          const response = await axios.post(`${API_BASE_URL}/auth/user/profile`,{
//             headers:{
//                 "Authorization" : `Bearer ${jwt}`
//             },
//          });
//          const user = response.data;
//         console.log("user",user);
//          dispatch(getUserSuccess(user));
//      } catch (error) {
//          dispatch(getUserFailure(error.message));
//          }
//  }
export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/user/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;
        dispatch(getUserSuccess(user));
    } catch (error) {
        // Check for specific error response codes and handle accordingly
        if (error.response) {
            // The request was made and the server responded with a status code
            console.log("Error status:", error.response.status);
            console.log("Error data:", error.response.data);
            dispatch(getUserFailure(error.response.data.message || "Failed to fetch user profile"));
        } else if (error.request) {
            // The request was made but no response was received
            console.log("Error request:", error.request);
            dispatch(getUserFailure("No response received from the server"));
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error message:", error.message);
            dispatch(getUserFailure("An error occurred while fetching user profile"));
        }
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null});
    localStorage.clear();
}