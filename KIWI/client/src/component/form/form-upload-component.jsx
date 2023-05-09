import React, { Component } from 'react';
 
import FileBase64 from 'react-file-base64';

class FormUploadComponent extends Component {

    constructor() {
        super()
        this.state = {
          files: []
        }
        //this.props.images=[]
      }

      getFiles(files){
        this.setState({ files: files })
        this.state.files.map(file => {this.props.images.push(file.name)})
      }

      render() {
        return (
        <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this) } />
        )
      }
     
}

export default FormUploadComponent