import React, { Component } from 'react';
import NhanVien from './NhanVien';
import SanPham from './SanPham';
import WithCard from './WithCard';

const Wrapper = WithCard(SanPham);

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Wrapper/>
            </div>
        )
    }
}
