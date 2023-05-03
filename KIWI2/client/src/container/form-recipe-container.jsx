import React, { Component } from 'react'
import InputComponent from '../component/form/input-component';
import ListComponent from '../component/list-component';
import FormComponent from '../component/form/form-component';




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
        console.log(event.target.value)
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
        this.render(
            
        )
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        recipes: responseObject,
                        showForm: false
                    })
                })
        }
        if (method === 'PUT') {
            fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        recipes: responseObject,
                        showForm: false
                    })
                })
        }
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    renderForm () {
        return (
            <div>
                <h1>Formulaire</h1>
                <FormComponent action='/recipes' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom de recette:' type='text' name='proposed_title' value={this.state.formValues.proposed_itle} />
                    <InputComponent onChange={this.handleInputOnChange} label='Description:' type='text' name='proposed_description' value={this.state.formValues.proposed_description} />
                    <InputComponent onChange={this.handleInputOnChange} label='Createur :' type='number' name='user_id' value={this.state.formValues.userid} />
                    <InputComponent onChange={this.handleInputOnChange} label='Temps  de preparation:' type='number' name='preparation_time' value={this.state.formValues.preparation_time} />
                    <InputComponent onChange={this.handleInputOnChange} label='Temps de cuisson:' type='number' name='cooking_time' value={this.state.formValues.cooking_time} />
                    <InputComponent onChange={this.handleInputOnChange} label='Portions:' type='number' name='portions' value={this.state.formValues.portios} />

                </FormComponent>
            </div>

        )
    }

    renderList () {
        return (
            <div>
                {this.state.recipes.length > 1 ? <h1 style={{ textAlign: 'center' }}>Liste</h1> : <h1 style={{ textAlign: 'center' }}>Details d'une recette</h1>}
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
