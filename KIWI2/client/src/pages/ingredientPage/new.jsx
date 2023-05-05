
import { Component } from 'react';
import InputComponent from '../../component/form/input-component';
import { buildHeader } from '../utils';



class NewIngredientPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // values of differents fields
            formValues: {},
        }

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    handleOnSave = (e) => {
        e.preventDefault()
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        fetch('http://localhost:8000/ingredients', buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    ingredients: responseObject,
                    showForm: false
                })
            })
    }

    render () {
        return (
            <div className='row justify-content-center '>
            <div className="col-md-6">
                <div className="card d-flex p-2">
                        <div className="card-header text-center"> Nouvel ingredient</div>
                        <div className="card-body">
                            <form  onSubmit={this.handleOnSave}>
                                <InputComponent onChange={this.handleOnChange} label="Intitule:" type='text' name='name' value={this.state.formValues.title} />

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Unites de mesure</label>
                                    </div>
                                    <select name="unity" onChange={this.handleOnChange} className="custom-select" id="inputGroupSelect01">
                                        <option selected>Choisi...</option>
                                        <option className="1" defaultValue="G">Gramme</option>
                                        <option className="2" defaultValue="L">Litre</option>
                                    </select>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary" >
                                    Valider
                                </button>
                               
                            </div>
                            </form>
                        </div>
            
                </div>
                </div>
                </div>
        )
    }

    
};
export default NewIngredientPage;