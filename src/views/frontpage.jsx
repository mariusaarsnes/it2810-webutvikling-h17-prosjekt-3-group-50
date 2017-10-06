import React from 'react';
import '../assets/styles/App.css';
import {Pagetext, TileGrid} from '../components';

export class Frontpage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="body-fullwidth">
                <div className="frontpage-body">
                    <br/>
                    <Pagetext text={"VELKOMMEN!"}/>
                    <br/><br/>
                    <TileGrid/>
                </div>
            </div>
        );
    }
}
