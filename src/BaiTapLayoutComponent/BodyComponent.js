import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <BannerComponent />
                <div className="container">
                    <div className="row">
                        <ItemComponent />
                        <ItemComponent />
                        <ItemComponent />
                        <ItemComponent />
                        <ItemComponent />
                        <ItemComponent />
                    </div>
                </div>

            </div>
        )
    }
}
