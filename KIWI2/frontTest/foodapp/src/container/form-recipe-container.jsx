import React, { Component } from 'react'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {TiGroup} from 'react-icons/ti'
import {BsPersonCircle} from 'react-icons/bs'

import FormComponent from '../components/Form/form-component'
import InputComponent from '../components/Form/input-component'
import ListComponent from '../components/Form/list-component'



function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class FormRecipeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            recipes: []
        }

        // Ajustment du contexte d'exécution pour avoir accès à l'instance avec this.
        // Première façon en utilisant .bind(this) et le même résultat est obtenu
        // avec la fonctions fléchée comme dans les exemples suivants.
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recipes', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                console.log(responseObject)
                this.setState({ recipes: responseObject })
            })
    }

    /**
     * Tout les chants du formulaire exécute cette méthode sur l'évènement onChange
     *
     * Exemple de state pour le formulaire.
     * Le id est ajouté à la création et les autres propriétés représentent le name et value des balises <input>
     * {
     *  id: 1
     *  userName: 'abc',
     *  firstName: 'b',
     *  lastName: 'c'
     * }
     */
    handleInputOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    handleItemOnClick = (event) => {
        // Le <span> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/recipes/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    recipes: responseObject,
                    showForm: false
                })
            })
    }

    handleItemDeleteOnClick = (event) => {
        // Le <button> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/recipes/' + id, { method: 'DELETE' })
            .then(response => response.json())
            .then(response => {
                this.setState({ recipes: response })
            })
    }

    handleAddOnClick = () => {
        this.setState({
            formValues: {},
            showForm: true
        })
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    recipes: responseObject,
                    showForm: false
                })
            })
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    renderForm () {
        return (
            <section className='flex items-center justify-between gap-[10rem] mx-32'>
    
    <aside className=''>
      <div className='flex gap-10 mt-10 size 50px'>
        <h2>Nouvelle recette</h2>
      </div>
            <div>
                <h1>Formulaire</h1>
                <FormComponent action='/recipes' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                <div className='flex gap-7 mt-10'>
                    <div className='flex flex-col'>
                    
                            <fieldset>
                           

                        
                            <div className='border-b-2 border-black'>
                            <InputComponent onChange={this.handleInputOnChange} label='Nom de recette:' type='text' name='proposed_title' value={this.state.formValues.proposed_title} />

                            </div>
                            </fieldset>
                        
                    </div>
                 </div>
                <div className='flex gap-7 mt-10 ' >
                    <div className='flex flex-col '>
                        
                            <fieldset>
                                <AiOutlineFieldTime size= {45} color='black' />
                            
                                <div className=' border-b-2  border-black'>
                                <InputComponent onChange={this.handleInputOnChange} label='Temps de preparation(en min):' type='text' name='preparation_time' value={this.state.formValues.preparation_time} />

                                </div>
                            </fieldset>
                    </div>
                </div> 

                <div className='flex gap-7 mt-10'>
                    <div className='flex flex-col'>
                    
                            <fieldset>
                            <AiOutlineFieldTime size= {45} color='red' />

                        
                            <div className='border-b-2 border-black'>
                            <InputComponent onChange={this.handleInputOnChange} label='Temps de cuisson(en min):' type='text' name='cooking_time' value={this.state.formValues.cooking_time} />

                            </div>
                            </fieldset>
                        
                    </div>
                </div>

                <div className='flex gap-7 mt-10'>
                    <div className='flex flex-col'>
                    
                            <fieldset>
                            <TiGroup size= {45} color='green' />

                        
                            <div className='border-b-2 border-black'>
                            <InputComponent onChange={this.handleInputOnChange} label='Nombre de portions:' type='text' name='portions' value={this.state.formValues.portions} />

                            </div>
                            </fieldset>
                        
                    </div>
                 </div>
                 <div className='flex gap-7 mt-10'>
                    <div className='flex flex-col'>
                    
                            <fieldset>
                           

                        
                            <div className='border-b-2 border-black'>
                            <InputComponent onChange={this.handleInputOnChange} label='Description:' type='text' name='proposed_description' value={this.state.formValues.proposed_description} />

                            </div>
                            </fieldset>
                        
                    </div>
                 </div>
                 <div className='flex gap-7 mt-10'>
                    <div className='flex flex-col'>
                    
                            <fieldset>
                           

                            <BsPersonCircle size= {45} color='gray' />
                            <div className='border-b-2 border-black'>
                            <InputComponent onChange={this.handleInputOnChange} label='Createur :' type='text' name='user_id' value={this.state.formValues.user_id} />

                            </div>
                            </fieldset>
                        
                    </div>
                 </div>
              

      
                </FormComponent>
            </div>
            </aside>
  </section>
        )
    }

    renderList () {
        return (
            <div>
                 {this.state.recipes.length > 1 ? <h4>Liste</h4> : <h4>Details d'une recette</h4>}
                <ListComponent
                    recipes={this.state.recipes}
                    onItemClick={this.handleItemOnClick}
                    onItemDeleteClick={this.handleItemDeleteOnClick}
                    onAddClick={this.handleAddOnClick}
                />
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.state.showForm ? this.renderForm() : this.renderList()}
            </div>
        )
    }
}

export default FormRecipeContainer
