
import { Component } from 'react'
import InputComponent from '../../component/form/input-component'
import { buildHeader } from '../utils'
import UnityOptions from './unity-options'



class NewIngredientPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // values of differents fields
            formValues: {},
            image: new FormData()
        }
      //  this.navigate = this.props.navigate.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSave = this.handleOnSave.bind(this)
        this.clear = this.clear.bind(this)
    }

    
    handleOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    clear (){
        for (var key in this.state.formValues) {
             //   document.getElementById(key).value=""
        }
        this.setState({
            formValues: {}
        })
    };

    handleOnSave = (e) => {
        const image = document.getElementById("image")
        const imageNames=[]
        e.preventDefault()
        for(let i=0; i< image.files.length; i++){
            this.state.image.append("file", image.files[i])
            imageNames.push(image.files[i].name)
        }
        if(this.state.image.has("file")){
            fetch("http://localhost:8000/upload_file", {
                method: 'POST',
                body: this.state.image,
            }).then((res) => console.log(res))
            .catch((err)=> ("Erreur de transfer", err))
        
         }
        const method = 'POST'
        fetch('http://localhost:8000/ingredients', buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    ingredients: responseObject,
                })
            })
       this.clear()
      // this.navigate('/ingredients')
    }
    

    render(){
        return (
            <div className='row justify-content-center '>      
                <div className="col-md-6">
                    <div className="card d-flex p-2">
                            <div className="card-header text-center"> Nouvel ingredient</div>
                            <div className="card-body">
                                <form  onSubmit={this.handleOnSave}>
                                    <InputComponent onChange={this.handleOnChange} label="Intitule:" type='text' name='name' value={this.state.formValues.title} />
                                    <InputComponent  type='hidden' name='id' value={this.state.formValues.id} />
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Unites de mesure</label>
                                        </div>
                                        <select name="unity" onChange={this.handleOnChange} value={this.state.formValues.unity} className=" form-control custom-select" id="inputGroupSelect01">
                                          <UnityOptions />
                                        </select>
                                    </div>
                                    <div className="input-group mb-3">
                                        <label htmlFor='image'> Associer une image</label>
                                        <input id='image' onChange={this.handleOnChange}  type="file" name="image"  value={this.state.formValues.image} />
                                    </div>
                                    <div className=" d-flex justify-content-between">
                                        <div className=" d-inline">
                                            <button type="submit" className="btn btn-primary" >
                                                Valider
                                            </button>
                                        </div>
                                        <div className=" d-inline">
                                            <button type="reset" className="btn btn-secondary" >
                                                Annuler
                                            </button>
                                        </div>
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