import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actFetDetailMovie } from './module/actions';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';

class DetailMoviePage extends Component {
    componentDidMount() {
        //Receive ID from url
        const id = this.props.match.params.id;
        this.props.fetchDetailMovie(id);
    }

    renderTable=()=>{
        const { data } = this.props;
        return data?.lichChieu?.map((item)=>{
            return (<tr key={item.maLichChieu}>
                <td>{item.thongTinRap.tenCumRap}</td>
                <td>{item.thongTinRap.tenRap}</td>
                <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                <td>
                    <Link className='btn btn-success' href="">Đặt vé</Link>
                </td>
            </tr>)
        })
    }

    render() {
        const { data, loading } = this.props;
        if (loading) return <Loader />
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img width={'90%'} src={data && data.hinhAnh} alt={data && data.hinhAnh} />
                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <tr>
                                <td>Tên Phim</td>
                                <td>{data && data.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{data && data.moTa}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="container">
                    <div className="m-auto">
                        <table className="table">
                            <thead>
                                <th>Cụm Rạp</th>
                                <th>Tên Rạp</th>
                                <th>Ngày Chiếu</th>
                                <th>Giờ Chiếu</th>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(actFetDetailMovie(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);