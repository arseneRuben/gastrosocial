import { useState } from 'react';

import React, { Component } from "react";

class StepInputComponent extends Component {
    
 

   render() {
      return (
            <div className="form-group row">
              
                <div className='col-8'>
                    <input id={"text-step-"+this.props.stepNumber} placeholder={`Decrire l' etape ${this.props.stepNumber} si possible image a l'appuie`}  className='form-control col-8 ' type="textarea"    />
                </div>
                <div className='col-4'>
                    <input id={"image-step-"+this.props.stepNumber} className='form-control  col-4 image' type="file"    />
                </div>
            </div>
       );
      }
}

export default StepInputComponent;