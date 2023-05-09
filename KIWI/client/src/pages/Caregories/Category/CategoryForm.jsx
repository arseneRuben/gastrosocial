
import { Component } from 'react'
import InputComponent from '../../../component/form/input-component'
import { buildHeader } from '../../utils'


class CategoryForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // values of differents fields
            formValues: {},
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.clear = this.clear.bind(this)
        this.handleOnSave = this.handleOnSave.bind(this)
    }

   
    clear (){
        this.setState({
            formValues: {}
        })
        for (var key in this.state.formValues) {
              document.getElementById(key).value=""
          }
      };
    handleOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
       // this.clear()
    }

    handleOnSave = (e) => {
        e.preventDefault()
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        fetch('http://localhost:8000/categories', buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    categories: responseObject,
                })
            })
    }

    render () {
        return (
            <div className='row justify-content-center '>
                <div className="card d-flex p-2">
                        <div className="card-header text-center"> Nouvel categorie</div>
                        <div className="card-body">
                            <form autoComplete="off" noValidate  onSubmit={this.handleOnSave}>
                                <InputComponent onChange={this.handleOnChange} label="Nom:" type='text' name='name' value={this.state.formValues.name} />
                                <InputComponent onChange={this.handleOnChange} label="Description:" type='textarea' name='description' value={this.state.formValues.description} />
                                <div className="col-md-6 offset-md-4 d-flex justify-content-around">
                                    <div className=" d-inline">
                                        <button type="submit" className="btn btn-primary" >
                                            Valider
                                        </button>
                                    </div>
                                    <div className=" d-inline">
                                        <button type="reset" className="btn btn-secondary"  onClick={this.clear}>
                                            Annuler
                                        </button>
                                    </div>
                                 </div>
                            </form>
                        </div>
                    
                </div>
            </div>
        )
    }

    
};
export default CategoryForm;