import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/dragon.png" alt="./dragon.png" style={{width:'50px', position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}
