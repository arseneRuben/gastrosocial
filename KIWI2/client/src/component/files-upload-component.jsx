import React, { Component } from 'react';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.state = {
            imgCollection: ''
        }
    }
    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }
  
    render() {
        return (
            <div className="container">
            <div className="row">
                    <div className="form-group">
                        <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                    </div>
                   
            </div>
        </div>
        )
    }
}