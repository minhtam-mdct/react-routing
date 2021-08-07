import React, { Component } from 'react'
import MovieItem from './MovieItem';
import Loader from '../../../components/Loader';
import { actFetchListMovie } from './modules/action';
import { connect } from "react-redux"


class ListMoviePage extends Component {
    componentDidMount() {
        this.props.fetData();
    }

    renderListMovie() {
        // const {data, loading} = this.state;
        if (this.props.loading) return <Loader />;
        return this.props.data?.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie} />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>List Movies Page</h3>
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetData: () => {
            dispatch(actFetchListMovie())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
        error: state.listMovieReducer.error,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);