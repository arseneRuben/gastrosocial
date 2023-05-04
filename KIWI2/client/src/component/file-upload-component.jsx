import React, { Component } from 'react';
import * as api from '../api';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            imgCollection: ''
        }
    }
    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }
    onSubmit(e) {
        e.preventDefault()
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        api.upload();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <h3>React Multiple File Upload</h3>
                        <div className="form-group">
                            <input type="file" multiple/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}