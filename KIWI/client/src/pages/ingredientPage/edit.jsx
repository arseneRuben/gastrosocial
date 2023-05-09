
import { Component } from 'react'
import InputComponent from '../../component/form/input-component'
import { buildHeader } from '../utils'
import withRouter from '../withRouter';
import CachedIcon from '@mui/icons-material/Cached';


class EditIngredientPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // values of differents fields
         
            formValues: {},
            image: new FormData()
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSave = this.handleOnSave.bind(this)
    }
    
    readFile (event){
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
        
      };
    componentDidMount() {
         fetch(`http://localhost:8000/ingredients/${this.props.params.id}`)
        .then(response => {
             return response.json()
        })
        .then(responseObject => {
           
            this.setState({ formValues: responseObject })
           
        }).catch(error=>{
            console.log(error)
        })
    }
    
    handleOnChange (event) {
        console.log(event.target.name, event.target.value)
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
        
    }

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
        const method = 'PUT' 
       // console.log(this.state.formValues)
        if(this.state.formValues._id ){
            fetch(`http://localhost:8000/ingredients/${this.state.formValues._id}`, buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    ingredients: responseObject,
                })
            })
        }
       
    }
    

    render () {
        console.log()
        return (
            !this.state.formValues ? <CachedIcon/> :
            <div className='row justify-content-center '>
                
                <div className="col-md-6">
                <div className="card d-flex p-2">
                            <div className="card-header text-center"> Modifier {this.state.formValues.name}</div>
                            <div className="card-body">
                                <form  onSubmit={this.handleOnSave}>
                                    <InputComponent onChange={this.handleOnChange} label="Intitule:" type='text' name='name' value={  this.state.formValues.name} />
                                    <InputComponent  onChange={this.handleOnChange} type='hidden' name='id'  value={  this.state.formValues.id} />

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Unites de mesure</label>
                                        </div>
                                        <select name="unity" onChange={this.handleOnChange} value={this.state.formValues.unity} className="custom-select" id="inputGroupSelect01">
                                            <option  defaultValue="">Choisi...</option>
                                            <option defaultValue="G">Gramme</option>
                                            <option  defaultValue="L">Litre</option>
                                        </select>
                                    
                                    </div>
                                    <div className="input-group mb-3">
                                        <label htmlFor='image'> Associer une image</label>
                                        <input id='image'  onChange={(event)=> { this.readFile(event)  }} onClick={(event)=> {  event.target.value = null}}  accept="image/*"  type="file" name="image"   />
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
export default withRouter(EditIngredientPage);