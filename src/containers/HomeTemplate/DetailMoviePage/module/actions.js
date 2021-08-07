import * as ActionType from "./constants";
import axios from "axios";

export const actFetDetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actDetailMovieReq());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET",
        })
        .then((res)=>{
            dispatch(actDetailMovieSuccess(res.data));
        })
        .catch((err)=>{
            dispatch(actDetailMovieFail(err));
        })
    }
};

const actDetailMovieReq = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQ,
    };
};

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
};

const actDetailMovieFail = (err)=>{
    return {
        type: ActionType.DETAIL_MOVIE_FAIL,
        payload: err,
    }
}