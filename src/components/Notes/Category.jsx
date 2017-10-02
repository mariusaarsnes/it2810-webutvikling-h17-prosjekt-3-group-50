import React from 'react';
import './Notes.css';

export class Category extends React.Component {

    render() {
        return (
            <div className="Category">
                <div style={{backgroundColor: '' + this.props.color}} className={"CategoryColor"}>
                </div>
                <div>
                    <input className={"CategoryName"} defaultValue={this.props.text}/>
                </div>
            </div>
        );
    }

}