import * as ActionType from "./constants";
import axios from "axios";

export const actFetchListMovie = () => {
    // Call axios
    return (dispatch) => {
        dispatch(actListMovieReq())
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
        .then((res)=>{
            dispatch(actListMovieSucsess(res.data));
        })
        .catch((err)=>{
            dispatch(actListMovieFail(err));
        })
    }
}

export const actListMovieReq = () => {
    return {
        type: ActionType.LIST_MOVIE_REQ,
    };
};

export const actListMovieSucsess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actListMovieFail = (data) => {
    return {
        type: ActionType.LIST_MOVIE_FAIL,
        payload: data,
    }
}
